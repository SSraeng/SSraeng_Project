from domain.dao.quizDao import all_quiz
from domain.dao.exampleDao import all_examples

def get_quiz():
  quiz_data = all_quiz()
  result = []
  for quiz in quiz_data:

    example_list = all_examples(quiz.id)
    examples = []
    for example in example_list:
      examples.append(example.content)

    result.append({
        "question":quiz.question,
        "examples":examples
    })
  return result