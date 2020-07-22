
import os
from flask import Flask

# Differs from other files in that everything is located in one place. No additional
# files need be imported, except for the testfile.py, containing executable Python code

def create_app(test_config=None):
    # create the app
    app = Flask(__name__, instance_relative_config=True)
    
    # Configures the app to development mode. Do not touch
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Function that prints the return value of the python program
    from .views import main
    app.register_blueprint(main)
    return app
