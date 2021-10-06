from domain.models.example import Example

def all_examples(quiz_id):
  example_list = Example.query.filter_by(quiz_id=quiz_id).all()
  return example_list