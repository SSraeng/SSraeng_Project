from domain.models.result import Result, db

def new_result(user_id, score, delivery_count):
  result = Result(user_id, score, delivery_count)
  return result