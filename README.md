# Oralytics - Aplicativo de Monitoramento e Cuidado Dental
Oralytics é uma aplicação mobile desenvolvida para auxiliar no monitoramento e cuidado da saúde bucal dos usuários, oferecendo funcionalidades como registro de escovação diária, histórico dental, carteirinha digital e guias de escovação.

## Tecnologias Utilizadas 📱
### Frontend (Mobile)
- React Native
- Expo
- Native Base (UI Framework)
- React Navigation
- AsyncStorage
- Chart.js

### Backend
- Node.js
- Express
- SQLite
- JWT (JSON Web Token)
- Bcrypt

## Funcionalidades Principais 🚀 
- Registro de Escovação: Monitoramento diário de escovações (manhã, tarde e noite)
- Histórico Dental: Visualização de procedimentos odontológicos realizados- 
- Avaliação Inteligente: Análise preliminar da saúde bucal através de fotos
- Perfil de Usuário: Gerenciamento de informações pessoais e do plano odontológico
- Guia de Escovação: Tutorial passo a passo para uma escovação adequada
- FAQ: Perguntas frequentes sobre o aplicativo e saúde bucal

## Instalação e Execução 🔧 
Pré-requisitos
- Node.js
- npm ou yarn
- Expo CLI (para o frontend)

### Backend
- Navegar para o diretório do backend
  cd oralyticsBackend

- Instalar dependências
  npm install

- Iniciar o servidor
  npm start

### Frontend
- Navegar para o diretório do frontend
  cd oralyticsApp

- Instalar dependências
  npm install

- Iniciar o aplicativo com Expo
  npx expo start

## Autenticação 🔒
O aplicativo utiliza JWT (JSON Web Token) para autenticação. Quando um usuário faz login, um token é gerado e armazenado no AsyncStorage do dispositivo. Este token é utilizado para autenticar requisições subsequentes à API.

## Banco de Dados 📊 
O backend utiliza SQLite para armazenamento de dados, com a seguinte estrutura principal:

Tabela usuarios: Armazena informações dos usuários (id, name, email, dataNasc, numCard, password)

## Licença 📝
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Autores 👥
- Gabriel Gregório - Desenvolvedor
- André Alves - Desenvolvedor
- Kayque Ferreira - Desenvolvedor

© 2024 Oralytics. Todos os direitos reservados.

