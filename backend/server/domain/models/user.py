from db_connect import db

class User(db.Model):

  __tablename__ = 'user'

  id   = db.Column(db.Integer, primary_key=True, nullable=False)
  name = db.Column(db.NVARCHAR(256), nullable=False)

  def __init__(self, name):
    self.name = name