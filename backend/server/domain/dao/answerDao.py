from domain.models.answerslist import AnswersList

def all_answers(quiz_id):
  answer_list = AnswersList.query.filter_by(quiz_id=quiz_id).all()
  return answer_list