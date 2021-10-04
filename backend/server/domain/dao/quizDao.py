from domain.models.quiz import Quiz

def all_quiz():
  result = Quiz.query.all()
  return result