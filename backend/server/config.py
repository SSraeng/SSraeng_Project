from secret import db_pw, secret_key

DATABASE_NAME = ''
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:'+db_pw+'@localhost/' + DATABASE_NAME +'?charset=utf8'
SQLALCHEMY_TRACK_MODIFICATIONS = False

SECRET_KEY = secret_key