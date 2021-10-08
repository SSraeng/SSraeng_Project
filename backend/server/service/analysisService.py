from flask.json import jsonify
from datetime import datetime

from domain.dao.userDao import new_user
from domain.dao.resultDao import new_result
from domain.dao.quizDao import all_quiz
from domain.dao.exampleDao import count_example


def analysis_service(result):
  #new 유저
  user = new_user(result['user_name'])
  score = score_service(result['answers'])
  score = score*10
  start_time = result['start_time']
  end_time = result['end_time']
  delivery_count = result['delivery_count']
  
  exam_time = end_time - start_time
  
  new_result(userid=user.id, score=score, examtime=exam_time, deliverycount=delivery_count)

  return user.id

def score_service(answers):
  quizzes = all_quiz()
  score = 0
  for quiz, answer in zip(quizzes, answers):
    if quiz.answer == answer:
      score += 1
      count_example(quiz.id, answer)

  return score


def trash_service():
  

  return 
