from domain.dao.userDao import all_user, one_user
from domain.dao.resultDao import all_result

from .userRankService import get_user_rank

def get_user_ranking(user_id):
  if user_id != None:
    one_user_data = one_user(user_id)
    if one_user_data == None:
      return "Not Found User"
  
  user_data = all_user()
  result_data = all_result()
  ranking = []
  
  rank_info = {90: 5, 80: 4, 50:3, 20:2}
  return_value = dict()
  
  for user, result in zip(user_data, result_data):
    quiz_score = result.quiz_score*10
    delivery_count = result.delivery_count
    final_score = quiz_score + (1/result.exam_time) - 3*delivery_count*(delivery_count+1)/2
    total_score = quiz_score - 3*delivery_count*(delivery_count+1)/2
    
    tier = 0
    for key, value in rank_info.items():
      if final_score >= key:
        tier = value
        break
    if tier == 0:
      tier = 1
      
    ranking.append({'name':user.name, 'final_score':final_score, 'tier': tier, 'quiz_score':quiz_score, 'delivery_count': delivery_count, 'total_score': total_score})
    
    if user.id == user_id:
      user_rank = get_user_rank(user_id)
      if user_rank == None:
        return "Not Found User"
      
      user_info = {'name':user.name, 'final_score':final_score, 'tier': tier, 'quiz_score':quiz_score, 'delivery_count': delivery_count, 'total_score': total_score, 'ranking': user_rank}
      
      return_value['user'] = user_info
    
  ranking.sort(key = lambda x: x['final_score'])
  
  return_value['ranks'] = ranking
    
  return return_value
