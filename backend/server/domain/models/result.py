from db_connect import db

class Result(db.Model):
  
  __tablename__ = 'result'
  
  id    = db.Column(db.Integer, primary_key=True, nullable=False)
  value = db.Column(db.Integer, nullable=False)
  
  def __init__(self, value):
    self.value = value