from flask import Blueprint, request
from apis.AnalysisAPI import analysis, test_result

analysis_bp = Blueprint('analysis', __name__, url_prefix='/api')

@analysis_bp.route('/analysis', methods=['GET'])
def get_analysis_result():
  result = analysis()
  return result


# 테스트 결과 받고 전달
@analysis_bp.route('/test', methods=['POST'])
def test():
  answer = request.json['answer']
  submit = request.json['submit']

  result = test_result(answer, submit)
  return result, 200
