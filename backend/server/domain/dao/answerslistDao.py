from domain.models.answerslist import AnswersList,  db

def all_answerslist(quiz_id):
  all_answer_list = AnswersList.query.filter_by(quiz_id=quiz_id).all()
  return all_answer_list

def count_answer(quiz_id, answer_num):
  answer = AnswersList.query.filter_by(quiz_id=quiz_id, answer_num=answer_num).first()
  answer.answer_num += 1
  db.session.commit()
  pass