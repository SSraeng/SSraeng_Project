## Team SSraeng Backend Repository
### 데이터베이스 스키마

<img src="https://github.com/SSraeng/SSraeng_Project/blob/master/wiki_images/ssraeng_db.png?raw=true" alt="스키마 이미지"/>

**User (유저 테이블)**  
- name : 유저의 이름  

**Result (설문 결과 테이블)**
- user_id : 유저의 아이디(고유번호)
- quiz_score : 유저의 맞은 퀴즈 문항 수 (ex: 9)
- ox_list : 유저 정오표 (ex: "OXOXOOOXXO")
- exam_time : 유저의 퀴즈 풀이 시간 (ex: 125) 단위 = 초
- delivery_count : 유저의 배달 주문 횟수 (ex: 5) 단위 = N회/1주

**Quiz (퀴즈 문항 테이블)**
- question : 퀴즈 질문 내용 (ex: "다음 중 종이류로 분리 배출 가능한 품목은?")
- quiz_type : 퀴즈 유형(1: 4지선다, 2: O/X)
- answer : 정답 번호

**Example (퀴즈 보기 테이블)**
- quiz_id : 퀴즈 아이디 (ex: 1) 
- content : 보기 내용 (ex: "검열지(영수증)") 
- num : 보기 번호 (ex: 1)
- count : 유저들이 이 답을 선택한 횟수

**Aritcle (경각심 컨텐츠 테이블)**
- article_id : 컨텐츠 아이디
- title : 컨텐츠 제목 (ex: "미세플라스틱이 우리 몸속에?!") 
- image : 컨텐츠 이미지 URL
- url : 관련 기사 URL

**Recycling (분리수거 팁 테이블)**
- title : 컨텐츠 제목 (ex: "플라스틱 어떻게 분리수거 할까요?") 
- image : 컨텐츠 이미지 URL
