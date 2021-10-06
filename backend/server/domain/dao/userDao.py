from domain.models.user import User, db

def all_user():
  result = User.query.all()
  return result

def new_user(name):
  user = User(name)
  db.session.add(user)
  db.session.commit()
  return user