from flask import Blueprint, request

from apis.dto.responseDto import user_response_dto, quiz_response_dto, user_ranking_response_dto
from service.userService import get_user
from service.rankService import get_user_ranking
from service.quizService import get_quiz

data_api_bp = Blueprint('data_api', __name__, url_prefix='/api')

@data_api_bp.route('/user', methods=['GET'])
def get_users():
  users = get_user()
  return user_response_dto(users)

@data_api_bp.route('/test/test', methods=['GET'])
def get_analysis_result():
  quizzes = get_quiz()
  return quiz_response_dto(quizzes)

@data_api_bp.route('/ranking', methods=['GET'])
def get_ranking():
  ranks = get_user_ranking()
  return user_ranking_response_dto(ranks)