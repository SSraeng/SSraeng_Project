from flask import Blueprint, request, jsonify
from apis.dto.requestDto import answer_request_dto
from apis.dto.responseDto import analysis_response_dto
from service.Analysis import analysis_service

analysis_bp = Blueprint('analysis', __name__, url_prefix='/api')

@analysis_bp.route('/analysis', methods=['POST'])
def get_analysis_result():
  total = answer_request_dto(request.get_json())
  user_id = analysis_service(total)
  
  return analysis_response_dto(user_id)