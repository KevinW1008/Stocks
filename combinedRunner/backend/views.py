
from flask import Blueprint, jsonify, request
from StockModelingFunctions import stockrun, update_stock_ticker, projectionCalculator

main = Blueprint('main', __name__)

# @main.route('/hello')
# def hello():
#     number = stockrun()
#     return jsonify({'message' : number})

@main.route('/fetch_stock', methods=['POST'])
def fetch_stock():
    ticker_data = request.get_json()
    new_ticker = ticker_data["name"]
    update_stock_ticker(new_ticker)
    projectionCalculator()
    return_val = stockrun()
    return jsonify(return_val)

