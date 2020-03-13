require('dotenv').config();
const app = require('./app');
require('./db'); // Conexión a DB

async function main(){
    await app.listen(app.get('port'));
    console.log('Servidor iniciado en el puerto:', app.get('port'));
}

main();