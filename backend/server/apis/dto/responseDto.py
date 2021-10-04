from flask.json import jsonify

# 데이터를 받아 JSON 포맷으로 Response를 리턴 해주는 함수
def temp_data_response_dto(temp_data):
  response = []
  for data in temp_data:
    response.append({'id':data['id'], 'name':data['name']})
    
  return jsonify(response)

def user_response_dto(user):
  return jsonify(user),200

def quiz_response_dto(quiz):
  return jsonify(quiz), 200