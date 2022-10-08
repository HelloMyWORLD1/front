### 배포과정

* S3 버킷 생성
1. 아마존 S3 들어가서 버킷 생성
2. S3 버킷 정적 웹 호스팅 활성화
3. 버킷 웹 사이트 엔드포이트 확인 -> http://portfolio-hub.com.s3-website.ap-northeast-2.amazonaws.com(지금은 forbidden 나옴)
4. 버킷 정책 편집(ARN 복사 - > arn:aws:s3:::portfolio-hub.com)
 -> 정책 생성(엔드포인트 이동시 404나옴 -> s3 내에 index.html이 없어서 그럼)

* IAM 정책 연결 및 깃헙 액션을 통한 CI/CD 환경 구축
1. 아마존 IAM 들어가서 사용자 생성
2. 사용자 생성 S3버킷 관련 정책 선택 후 엑세스키, 비밀 엑세스 키 확인 및 저장
3. 깃헙 저장소 세팅에 시크릿 탭으로 이동 후 아마존에서 받은 엑세스 키로 새로운 시크릿 생성
 - 엑세스 키 ID, 비밀 엑세스 키를 각각 SECRET_KEY, SECRET_ACCESS_KEY 로 정의
5. 저장소에 액션 탭으로 이동
 - github action 탭에서 추천 쪽을 보면 필자는 react를 사용했으므로 node.js 를 선택하면 
.github/workflows에 node.js.yml 파일이 생성된다.
6. yml 파일 설정 후 commit 하면 s3 버킷에 업로드 되어 엔드 포인트 접속 시 화면 보임

* 도메인 설정
- 무료 도메인 사이트:  https://www.freenom.com/en/index.html?lang=en
참조 사이트: https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-S3-%EC%A0%95%EC%A0%81-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%98%B8%EC%8A%A4%ED%8C%85-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%84%A4%EC%A0%95Route-53
