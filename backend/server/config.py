from secret import db_pw, secret_key

SQLALCHEMY_DATABASE_URI = 'mssql+pymssql://ssraeng:'+db_pw+'@ssraeng-db-server.database.windows.net/SsraengDB'
SQLALCHEMY_TRACK_MODIFICATIONS = False

SECRET_KEY = secret_key