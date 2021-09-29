from domain.models.temp_data import temp_data

# SELECT * FROM temp_data ORDER BY 'score'; 쿼리를 구현한 코드
def sorted_temp_data():
  return sorted(temp_data, key=lambda x: x['score'])