from domain.dao.temp_data_dao import sorted_temp_data

# 랭킹 1위부터 3위까지 뽑아서 1위는 God, 2위는 King, 3위는 Person이라는 칭호를 달아주는 기능
def get_rank():
  sorted_data = sorted_temp_data()
  sorted_data[0]['name'] = 'God'
  sorted_data[1]['name'] = 'King'
  sorted_data[2]['name'] = 'Person'
  return sorted_data