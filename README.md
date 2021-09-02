# [React Native] 페이워크 TODO LIST

## 💻 Built With

![ReactNative](https://img.shields.io/badge/reactnative-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![EXPO](https://img.shields.io/badge/expo-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

<br>

## 🧑 참여 멤버

|  이름  | 역할 |
| :----: | :--: |
| 김종원 | TodoList 구현 |

<br>

## ✨ 설치 및 시작방법

```bash
# install dependencies
 $ yarn install

# serve with hot reload at localhost:19006
 $ expo start
```

<br>

## 📝 구현 목록

- 과제 : To-Do List App 만들기

        ✅ 적절한 Header 생성
            ✔ 스크롤 시 Header가 사라지지 않고 화면 상단에 고정
        ✅ 투두리스트에 적합한 기능을 구현하기 위해 데이터 조작 가능
            ✔ Task 목록 조회기능 구현
            ✔ Task 추가기능 구현
            ✔ Task 삭제기능 구현

<br>


## 🗂 프로젝트 구조

```bash
📁src
│
└─📁components
  ├─📁body
  │    TodoCreate.js
  │ TodoItem.js
  ├─📁button
  │  DeleteButton.js
  └─📁header
      Header.js

```

<br>

## 🖥 작동 화면

<div style={display: flex;}>
<img src="https://user-images.githubusercontent.com/73818206/131776448-5646808b-e241-40d7-8d9f-84055353816c.gif" alt="record" width="400" height="800" />

</div>

<br>

## 참고한 레퍼런스

- Redux-Saga
  - https://www.youtube.com/watch?v=UxpREAHZ7Ck
  - https://github.com/wecode-bootcamp-korea/react-redux-example
  
- Context API: https://react.vlpt.us/basic/22-context-dispatch.html
