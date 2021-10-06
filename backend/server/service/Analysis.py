from flask.json import jsonify
from domain.dao.userDao import new_user
from domain.dao.resultDao import new_result
from domain.dao.quizDao import all_quiz
from domain.dao.answerslistDao import count_answer

def analysis_service(result):
  #new 유저
  user = new_user(result['name'])
  score = score_service(result['answers'])
  #user_id, score, times, delivery_count
  # result = new_result(user.id, score,result['times'], result['delivery_count'])

  return user.id

def score_service(answers):
  quizzes = all_quiz()
  score = 0
  for quiz, answer in zip(quizzes, answers):
    if quiz.answer == answer:
      score += 1
      count_answer(quiz.id, answer)

  return score


def trash_service():
  

  return 


def test_result(name, submit):
  return jsonify({"name":name, "submit":submit})