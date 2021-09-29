from flask import Blueprint, request

from controller.dto.response_dto import temp_data_response_dto
from service.Ranking import get_rank

data_api_bp = Blueprint('data_api', __name__, url_prefix='/api')

@data_api_bp.route('/ranking', methods=['GET'])
def get_ranking():
  rankings = get_rank()
  return temp_data_response_dto(rankings)