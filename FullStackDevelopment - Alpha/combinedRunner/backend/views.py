
from flask import Blueprint, jsonify, request
from testfile import stockrun, update_stock_ticker, projectionCalculator

main = Blueprint('main', __name__)

# Serves as API to fetch data for stock by calling on function which generates chart
@main.route('/fetch_stock', methods=['POST'])
def fetch_stock():
    ticker_data = request.get_json()
    new_ticker = ticker_data["name"]
    update_stock_ticker(new_ticker)
    projectionCalculator()
    return_val = stockrun()
    return jsonify(return_val)

