const app = require('./app');
const PORT = 3000; //define a porta do servidor

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
