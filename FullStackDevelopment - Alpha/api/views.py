from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/hello')
def hello():
    return jsonify({'message' : "hello"})

@main.route('/idiot')
def idiot():
    return jsonify({'message':'iamdumb'})