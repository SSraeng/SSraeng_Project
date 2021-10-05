from domain.dao.quizDao import all_quiz
from domain.dao.answerDao import all_answers

def get_quiz():
  quiz_data = all_quiz()
  result = {}
  for quiz in quiz_data:
    quiz_number = "Q" + str(quiz.id)

    answer_list = all_answers(quiz.id)
    answers = []
    for answer in answer_list:
      answers.append(answer.content)

    result[quiz_number] = {
        "question":quiz.question,
        "answers":answers
    }
  return result