from flask import Flask, render_template, request, jsonify
import socket
import requests

celpeu = '172.20.10.4'
pclab = '172.20.9.110'
local ='127.0.0.1'
app = Flask(__name__)

# criar a primeira página do site

app.static_folder = 'static'

if __name__ == "__main__":
    app.run()

@app.route("/")
def home():
    return render_template("start.html") 


@app.route("/index")
def ConectarPagina():
    return render_template("index.html")

@app.route('/calculate_result', methods=["GET","POST"])
def calculate_result():
    setpoint = request.form["Setpoint"]
    #print(f'Setpoint: {setpoint}') valor numerico
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect(('172.20.9.110',8080))
    #print(f'Encode: {setpoint.encode()}') valor codificado
    from_server = sock.recv(4096)
    from_server = sock.recv(4096)
    sock.send(setpoint.encode()+b'\n\r\n\r') 
    aux = str(from_server).split("|")
    print(f'Aux: {aux}')#string de resposta
    sock.close()
    
    return jsonify({"result":f'{from_server}', "setpoint":f'{setpoint}'})