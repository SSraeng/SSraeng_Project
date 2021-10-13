from domain.models.user import User, db

def all_user():
  result = User.query.order_by(User.id.desc()).all()
  return result

def new_user(name):
  user = User(name)
  db.session.add(user)
  db.session.commit()
  return user

def one_user(user_id):
  result = User.query.filter_by(id=user_id).first()
  return result