from flask import Blueprint, request, jsonify
from service.Analysis import analysis, test_result


analysis_bp = Blueprint('analysis', __name__, url_prefix='/api')

@analysis_bp.route('/analysis', methods=['POST'])
def get_analysis_result():
  total = answer_request_dto(request.get_json())
  user_id = analysis_service(total)
  
  return jsonify({"user_id": user_id}, 200)