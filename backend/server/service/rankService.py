from domain.dao.userDao import all_user
from domain.dao.resultDao import all_result

def get_user_ranking():
  user_data = all_user()
  result_data = all_result()
  ranking = []
  
  rank_info = {90: 5, 80: 4, 50:3, 20:2}
  
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
    
  ranking.sort(key = lambda x: x['final_score'])
  return ranking
