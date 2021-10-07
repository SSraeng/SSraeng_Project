from domain.models.result import Result, db

def new_result(userid, score, examtime, deliverycount):
  result = Result(user_id = userid, quiz_score = score, exam_time = examtime, delivery_count = deliverycount)
  return result

def all_result():
  result = Result.query.order_by(Result.id.desc()).all()
  return result