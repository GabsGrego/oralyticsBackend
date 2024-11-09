const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

// Cadastro de usuario
exports.registerUser = (req,res) => {
    const { name, email, dataNasc, numCard, password } = req.body;

    // hash da senha
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if(err) return res.status(500).json({ error: err.message });

        //insere o usuario no banco
        db.run(
            "INSERT INTO usuarios (name, email, dataNasc, numCard, password) VALUES (?, ?, ?, ?, ?)",
            [name, email, dataNasc, numCard, hashedPassword],
            function(err) {
                if (err) {
                    return res.status(500).json({ error: 'Erro ao criar usuário.' });
                }
                res.status(201).json({ message: 'Usuário registrado com sucesso!'});
            }
        );
    });
};

// Login de usuario
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    //busca usuario no banco
    db.get("SELECT * FROM usuarios WHERE email = ?", [email], (err, user) => {
        if (err || !user) {
            return res.status(401).json({ error: 'Email ou senha inválidos' });
        }

        //Compara a senha criptografada
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!isMatch || err) {
                return res.status(401).json({ error: 'Email ou senha inválidos '});
            }

            // Gera o token JWT
            const token = jwt.sign({ id: user.id}, 'secreta-chave', { expiresIn: '1h' });
            res.status(200).json({ token });
        });
    });
};

// Buscar todos os usuarios
exports.getUsers = (req, res) => {
    db.all("SELECT * FROM usuarios", (err, users) => {
    
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
        res.status(200).json(users);
    });
};


// Buscar usuario por Id
exports.getUserById = (req, res) => {
    const { id } = req.params;

    db.get("SELECT * FROM usuarios WHERE id = ?", [id], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
    });
};

// Buscar usuario por Token
exports.getUserByToken = (req, res) => {
    const {id} = req.user;

    db.get("SELECT * FROM usuarios WHERE id = ?", [id], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado', pause:req.user });
    }
    res.status(200).json(user);
    });
};


// Atualizar usuario
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, dataNasc, numCard, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });

        db.run(
        "UPDATE usuarios SET name = ?, email = ?, dataNasc = ?, numCard = ?, password = ? WHERE id = ?",
        [name, email, dataNasc, numCard, hashedPassword, id],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar usuário' });
            }
            if (this.changes) {
                return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
            }
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    );
    });
};

// Deletar usuario
exports.deleteUser = (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM usuarios WHERE id = ?", [id], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
        if (this.changes) {
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        }
        res.status(404).json({ error: 'Usuário não encontrado' });
    });
};