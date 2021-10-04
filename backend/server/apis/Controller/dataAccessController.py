from flask import Blueprint, request

from apis.dto.responseDto import user_response_dto
from service.Users import get_user

data_api_bp = Blueprint('data_api', __name__, url_prefix='/api')

@data_api_bp.route('/user', methods=['GET'])
def get_users():
  users = get_user()
  return user_response_dto(users)