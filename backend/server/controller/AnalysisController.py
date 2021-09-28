from flask import Blueprint
from apis.AnalysisAPI import analysis

analysis_bp = Blueprint('analysis', __name__, url_prefix='/api')

@analysis_bp.route('/analysis', methods=['GET'])
def get_analysis_result():
  result = analysis()
  return result