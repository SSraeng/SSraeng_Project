from flask.json import jsonify

def analysis():
  return "분석 요청"


def test_result(answer, submit):
  return jsonify({"answer":answer, "submit":submit})