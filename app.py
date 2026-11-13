from flask import Flask

app = Flask(__name__)

@app.route("/")
def inicio():
    return """
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Servidor Flask</title>
    </head>
    <body>
        <h1>Servidor HTTPS con Flask</h1>
        <p>Esta aplicación funciona con Python y Flask.</p>
    </body>
    </html>
    """