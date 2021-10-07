from flask.json import jsonify

def user_response_dto(user):
  return jsonify(user),200

def quiz_response_dto(quiz):
  return jsonify(quiz), 200

def analysis_response_dto(user_id):
  return jsonify(user_id), 200

def user_ranking_response_dto(ranks):
  return jsonify(ranks), 200