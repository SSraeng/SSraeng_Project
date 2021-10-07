from flask.json import jsonify
from datetime import datetime

from domain.dao.userDao import new_user
from domain.dao.resultDao import new_result
from domain.dao.quizDao import all_quiz
from domain.dao.exampleDao import count_example


def analysis_service(result):
  #new 유저
  # user = new_user(result['user_name'])
  # score = score_service(result['answers'])
  start_time = result['start_time']
  end_time = result['end_time']
  
  s_year, s_month, s_day, s_hour, s_minute, s_sec, s_milisec = int(start_time[:4]), int(start_time[5:7]), int(start_time[8:10]), int(start_time[11:13]), int(start_time[14:16]), int(start_time[17:19]), int(start_time[20:22])
  
  e_year, e_month, e_day, e_hour, e_minute, e_sec, e_milisec = int(end_time[:4]), int(end_time[5:7]), int(end_time[8:10]), int(end_time[11:13]), int(end_time[14:16]), int(end_time[17:19]), int(end_time[20:22])
  
  stime = s_year*31560000000 + s_month*2628000000 + s_day*6400000 + s_hour*3600000 + s_minute*60000 + s_sec*1000 + s_milisec
  etime = e_year*31560000000 + e_month*2628000000 + e_day*6400000 + e_hour*3600000 + e_minute*60000 + e_sec*1000 + e_milisec
  
  # delivery_count = result['delivery_count']
  
  exam_time = etime - stime
  # final_score = score*10 - 3*delivery_count*(delivery_count+1)/2
  # result = new_result(userid=user.id, score=final_score, examtime=exam_time, deliverycount=delivery_count)

  # return user.id
  return {"exam_time": exam_time}

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