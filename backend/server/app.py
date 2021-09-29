from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

from controller.AnalysisController import analysis_bp

from db_connect import db
import config

def create_app():
  app = Flask(__name__)
  app.register_blueprint(analysis_bp)
  app.config.from_object(config)
  
  db.init_app(app)
  
  migrate = Migrate()
  migrate.init_app(app, db, compare_type=True)
  
  CORS(app)  
  
  return app

if __name__ == "__main__":
  create_app().run(debug=True)