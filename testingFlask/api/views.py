from flask import Blueprint, jsonify
from testfile import stockrun

main = Blueprint('main', __name__)

@main.route('/hello')
def hello():
    number = stockrun()
    return jsonify({'message' : number})

@main.route('/idiot')
def idiot():
    return jsonify({'message':'iamdumb'})