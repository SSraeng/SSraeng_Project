from domain.dao.quizDao import all_quiz
from domain.dao.answerslistDao import all_answerslist

def get_quiz():
  quiz_data = all_quiz()
  result = {}
  for quiz in quiz_data:
    quiz_number = "문" + str(quiz.id)

    answer_list = all_answerslist(quiz.id)
    answers = []
    for answer in answer_list:
      answers.append(answer.content)
    
    result[quiz_number] = {
        "question":quiz.question,
        "answers":answers
    }
  return result