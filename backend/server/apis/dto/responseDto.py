from flask.json import jsonify

def user_response_dto(user):
  return jsonify(user),200

def quiz_response_dto(quiz):
  return jsonify(quiz), 200

def analysis_response_dto(user_id):
  return jsonify(user_id), 200