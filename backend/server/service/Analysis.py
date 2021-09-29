from flask.json import jsonify

def analysis():
  return "분석 요청"


def test_result(name, submit):
  return jsonify({"name":name, "submit":submit})