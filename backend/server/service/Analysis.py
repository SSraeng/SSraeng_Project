from flask.json import jsonify

def analysis_service(result):
  score = (count_service(result['answers']) * 8) + times/100

  #new 유저
  user = User(result['name'])
  db.session.add(user)
  db.session.commit()

  #user_id, score, times, delivery_count
  result = Result(score)

  return user.id

def count_service():

  origin_answers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2]
  count = 0

  for i, j in zip(answers, origin_answers):
      if i == j:
          count += 1

  return count


def trash_service():
  delivery_count = request.json['delivery_count']
  total = (14 + 15 + 44 + 10) * 3/4 * delivery_count

  return jsonify({"trash": trash}, 200)


def test_result(name, submit):
  return jsonify({"name":name, "submit":submit})