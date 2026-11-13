const express = require("express");

const app = express();
const puerto = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Servidor Node.js</title>
        </head>
        <body>
            <h1>Servidor HTTPS con Node.js</h1>
            <p>Esta aplicación funciona con JavaScript y Express.</p>
        </body>
        </html>
    `);
});

app.listen(puerto, "127.0.0.1", () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`);
});