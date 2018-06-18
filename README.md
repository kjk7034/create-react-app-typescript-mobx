기존에 작업한 [`create-react-app-typescript`](https://github.com/kjk7034/create-react-app-typescript)에서 redux를 mobx로 교체한 내용.


## 목차(Table of Contents)

- [개발 환경](#개발-환경)
- [라이브러리 선택](#라이브러리-선택)
- [상태 관리 선택](#상태-관리-선택)
- [정적 타이핑 선택](#정적-타이핑-선택)
- [라우터](#라우터)
- [코드 분할](#코드-분할)
- [CSS 전처리기](#CSS-전처리기)
- [코딩 스타일 가이드](#코딩-스타일-가이드)
- [폴더 구조](#폴더-구조)
- [설치 및 실행](#설치-및-실행)
- [프로젝트 설정 과정](#프로젝트-설정-과정)

## 개발 환경

* OS : window
* 형상관리 : git
* 배포 자동화 : [Jenkins](https://jenkins.io/)
* 에디터 : [Visual Studio Code](https://code.visualstudio.com/)
* 서버 언어 : java
  * SSR은 하지 않기로 결정 됨.

## 라이브러리 선택

[React](https://reactjs.org/)를 선택.

선택한 가장 이유는 다른 프로젝트들을 React, React Native를 이용하여 웹과 모바일앱 다수를 만든 경험이 있고, 추후 모바일 앱 개발 진행 시 아직 확정되진 않았지만 RN을 또 사용할 생각으로 선택했습니다.

`16.3.x`의 Lifecycle Methods 사용. ([참고 - React Component Lifecycle Methods from v16.3 with example](http://javasampleapproach.com/frontend/react/react-component-lifecycle-methods-from-v16-3-react-lifecycle-example))

`componentWillMount, componentWillReceiveProps, componentWillUpdate` **사용하지 않기!!**

## 상태 관리 선택

~~`Context API`, `MobX`도 고려하긴 했지만 프로젝트에는 Redux를 선택.~~

~~기존의 학습 경험이 선택한 이유 중 가장 큽니다.~~

~~미들웨어로 기존에는 `redux-thunk`를 주로 사용했지만, 이번에는 action을 더 명확하게 관리한다는 생각이 들어서 [`redux-saga`](https://github.com/redux-saga/redux-saga)를 선택.~~

~~([참고 - redux-saga로 비동기처리와 분투하다.](https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md))~~

~~`reducer`에서 현재 state를 수정하고 다음의 불변 상태의 트리를 생성하는 용도로 [`immer`](https://github.com/mweststrate/immer) 사용.~~

처음에는 위와 같은 내용으로 redux, redux-saga, immer를 선택했다.

기존에 내가 알고 있던 내용은 유지 보수가 용이 한 대규모 팀에서 사용하거나 확장 가능한 옵션을 갖춘 복잡한 앱에서는 Redux를 그리고 규모가 조금 작거나 앱을 빨리 만들기를 선호하면 MobX를 추천한다는 정도만 알고 있었다.

Typescript를 공부하는 과정에서 [`타입스크립트 코리아 : React with TypeScript 세미나`](https://www.inflearn.com/course/react-with-typescript/) 영상을 보게 되었고, 그 중 Redux, MobX에 대한 내용도 있어서 같이 봤다.

`MobX`를 더 검색하다 보니 발표하신 분이 MobX를 쓴 이유에 대한 글도 읽게 되었다.
[`왜 내가 Redux 대신 MobX를 쓰게 되었나`](https://rokt33r.github.io/devnotes/2018/03/05/why-i-replace-redux-with-mobx/)

위 영상과 해당 글을 읽고 `MobX`에 대한 흥미가 생겼다. 그래서 이번 프로젝트를 `MobX`로 변경했다.
(프로젝트 마지막에가서 직접 성능을 보고 시간이 허락한다면 Redux로 바꿔서 실제 성능을 비교해보고 싶다.)

## 정적 타이핑 선택

먼저 정적 타이핑을 통해서 다양한 버그를 사전에 예방하고, 더 나은 문서화 등의 큰 장점이 있어서 사용하기로 결정.

`Flow`와 `Typescript`를 가지고 간단하게 환경 설정 및 테스트를 진행했습니다.

VSCODE와의 연결, 커뮤니티 활성화, 다른 라이브러리나 프레임워크로 전환 시에도 도움이 될 것이라고 판단하여 `Typescript`를 선택했습니다.

## 라우터

[`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)을 사용.

## 코드 분할

코드 분할을 해서 현재 필요한 것만 Lazy-load 할 수 있어 앱의 성능을 향상시키기 위해서 사용.

React 공식 사이트에 있는 [`React Loadable`](https://reactjs.org/docs/code-splitting.html#react-loadable)을 사용.

## CSS 전처리기

[PostCSS](https://github.com/postcss/postcss)를 사용하고 싶었지만, 작업하실 분에게 최대한 맞춰서 `Sass`를 선택.

이 과정에서 제일 많이 사용하는 `node-sass`를 사용하지 않고, `node-sass-chokidar`을 선택했습니다. 그 이유는 다음과 같습니다.

**Why node-sass-chokidar?**

node-sass has been reported as having the following issues:

* node-sass --watch has been reported to have performance issues in certain conditions when used in a virtual machine or with docker.
* Infinite styles compiling [#1939](https://github.com/facebookincubator/create-react-app/issues/1939)
* node-sass has been reported as having issues with detecting new files in a directory [#1891](https://github.com/sass/node-sass/issues/1891)

node-sass-chokidar is used here as it addresses these issues.

## 코딩 스타일 가이드

[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)를 적용.

Code Formatter로 [`Prettier`](https://github.com/prettier/prettier)를 적용.

## 폴더 구조

`create-react-app eject` 해서 생성된 폴더를 제외하고 작업 폴더(src) 구조만 정리

```
src
--| api         // request api
--| components  // Presentational Components
--| containers  // Container Components
--| images      // images
--| router      // pages based on routes
--| stores      // mobx stores
--| styles      // stylesheet
--| utils       // utility functions

```
## 설치 및 실행

```sh
git clone https://github.com/kjk7034/create-react-app-typescript.git
cd create-react-app-typescript
yarn
yarn start
```

## 프로젝트 설정 과정

[`create-react-app Typescript 프로젝트 설정 과정`](./README.SetupProcess.md)을 다음과 같이 정리했습니다.

* create react app typescript
* npm run eject
* Formatting Code Automatically
* Prettier/Editor is VSCode
* Adding Airbnb JavaScript Style Guide
* Changing the Page `<title>`
* Code Splitting
* Adding a CSS Preprocessor Sass
* Setting default port
* Proxying API Requests in Development
* Using HTTPS in Development
* Adding a Router
* Adding HMR
* ~~Adding redux~~
* Adding MobX
* Adding another npm