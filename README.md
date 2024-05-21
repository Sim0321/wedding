# 청첩장

## 기술 스택

- react, typeScript, scss, context API, yarn berry

## 기능

- 인트로 동영상
- 이미지 갤러리
- 데이터 값 가져오기
- 캘린더
- 지도
- 연락처
- 공유
- 참석 여부

## 고려한 점

- Section 공통컴포넌트

  - 모바일 청첩장의 특성상 Section별로 이루어지고 같은 레이아웃을 가지고 있어 공통컴포넌트로 분리해 재사용성을 높였다.
  - props로 title을 React.ReactNode로 받아, 각 Section의 title이 다른 위치에 있을 수 있게 확장성을 고려했다.

- Text 컴포넌트

  - 본문의 내용에 \n과 같은 줄바꿈하기 위해 생성

- yarn berry 적용

- css module과 classname 통합
  - css module 방식은 클래스 이름을 로컬 범위로 제한해 동일한 이름의 클래스가 충돌하지 않도록 해주고, classname 은 조건부로 클래스 이름을 적용하도록 한다.
  - 또한 cx라는 변수로 classname과 style을 bind해 클래스 이름을 조건부로 작성해 직관적인 방식으로 코드의 가독성을 향상시켰다.

## 개선사항
