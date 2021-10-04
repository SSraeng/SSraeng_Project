from flask import Blueprint, request
from service.Analysis import analysis, test_result

analysis_bp = Blueprint('analysis', __name__, url_prefix='/api')

@analysis_bp.route('/analysis', methods=['GET'])
def get_analysis_result():
  result = analysis()
  return result

