from flask import Blueprint, request

from apis.dto.responseDto import temp_data_response_dto, user_response_dto
from service.Ranking import get_rank
from service.Users import get_user

data_api_bp = Blueprint('data_api', __name__, url_prefix='/api')

@data_api_bp.route('/user', methods=['GET'])
def get_users():
  users = get_user()
  return user_response_dto(users)

@data_api_bp.route('/ranking', methods=['GET'])
def get_ranking():
  rankings = get_rank()
  return temp_data_response_dto(rankings)