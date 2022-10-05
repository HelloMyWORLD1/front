### Ts Md File

---

-   폴더 및 파일 구성

> slices 폴더

-   `userSlice` - 유저 로그인 / 로그아웃 / 회원가입과 같은 서버와 연동하여 비동기적으로 처리할 slice
-   `blogSlice` - 포트폴리오 / 블로그에 들어갈 비동기적 기능들을 처리할 slice

> pages 폴더

-   페이지별로 각각의 컴포넌트들을 불러와 화면에 보여주는 페이지 컴포넌트

> components 폴더

-   Header, Footer, Button 등 각각의 컴포넌트

> store

-   `slices` 폴더에서 불러온 userSlice, blogSlice를 불러오고 toolkit을 이용해 redux의 전역상태 store 구성

> types.d.ts

-   interface, type등을 선언할 .d.ts file (export / import 필요 x)

> hooks.tsx

-   slice에서 만든 전역 state와 action를 타 파일에서 dispatch등을 할 수 있게 하는 hook (Ts는 방식이 많은데 그 중 한 가지 골라서 사용했음)

---

-   style에 관한 부분도 깔끔하기 위해서는 따로 폴더안에 css 적인 것을 쭉 나열해도 될 듯함 추후에 디자인 나오면 정할것
-   toolkit에 관한 부분은 어떤 식으로 사용하는지는 userSlice에 예시로 적어놨음
