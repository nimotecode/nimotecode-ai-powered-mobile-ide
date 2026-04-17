# 퀵 스타트 (3분)

이 가이드는 "한 세션에서 첫 성공"을 목표로 최적화되어 있습니다.

## 목표

3분 안에 다음을 완료합니다:

1. 워크스페이스 열기
2. 실제 명령 실행하기
3. 파일 하나 편집하기
4. 고가치 패널 하나 사용하기 (Source Control / AI / Debug)

## 1단계: 워크스페이스 열기 (30초)

모드 선택:

- Local Explorer: 로컬 프로젝트 디렉토리 열기
- Remote Explorer: SSH로 연결하기

리모트 모드 사용 시:

1. SSH 프로필 생성 (`host`, `port`, `username`)
2. 인증 방식 선택 (비밀번호 또는 개인 키)
3. 연결하고 워크스페이스 루트 경로 확인

## 2단계: 터미널에서 명령 실행하기 (30초)

1. 터미널 패널 열기
2. 검증 명령 실행 (예: `pwd`, `ls`, 또는 빌드/테스트 명령)
3. 출력이 길면 터미널 검색 사용

## 3단계: 편집하고 저장하기 (45초)

1. 탐색기에서 소스 파일 열기
2. 한 줄 편집하기
3. 파일 저장하기
4. 필요시 심볼 탐색 또는 파일 내 찾기/바꾸기 사용

## 4단계: 결과 경로 하나 선택하기 (75초)

### 경로 A: 변경 사항 커밋하기

Source Control을 열고:

- 수정된 파일 검사
- 변경 사항 스테이징
- 커밋 (설정된 경우 푸시도)

참고: [/ko/docs/source-control](/ko/docs/source-control)

### 경로 B: AI에 가속 요청하기

AI 패널을 열고:

- 프로바이더 설정 선택
- 설명/리팩토링/수정 제안 요청
- 워크플로우 자동화를 위해 AI 에이전트 실행 (선택사항)

참고: [/ko/docs/ai](/ko/docs/ai)

### 경로 C: 더 빠르게 진단하기 (Pro)

LSP/Debug를 열고:

- 진단 확인
- 코드 작업 적용
- 디버그 세션 시작하고 변수/감시 검사

참고: [/ko/docs/lsp](/ko/docs/lsp), [/ko/docs/debug](/ko/docs/debug)

## 고가치 시나리오

1. 프로덕션과 유사한 서버에서의 원격 핫픽스: `/ko/docs/ssh` + `/ko/docs/terminal` + `/ko/docs/source-control`
2. 빠른 버그 분류: `/ko/docs/lsp` + `/ko/docs/debug` + `/ko/docs/timeline`
3. 반복 작업 자동화: `/ko/docs/tasks` + `/ko/docs/ai`
4. 안정적인 일일 설정: `/ko/docs/settings` + `/ko/docs/configuration`

## 다음 최적 단계

첫 실행 후 즉시 이것들을 설정하세요:

- AI 프로바이더 프로필: [/ko/docs/configuration](/ko/docs/configuration)
- 편집기 및 키보드 기본 설정: [/ko/docs/settings](/ko/docs/settings)
