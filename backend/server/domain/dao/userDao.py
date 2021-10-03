from domain.models.user import User

def all_user():
  result = User.query.all()
  return result