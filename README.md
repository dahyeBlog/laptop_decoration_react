# Photo upload 프로젝트
-  Photo를 업로드 해서 관리할 수 있는 간단한 사이트를 제작함

## 데모사이트
- https://dahyeblog.github.io/photo_upload_project_react/

## 구현한 내용
- 회원가입, 로그인
- 메인 페이지는 사진을 업로드 할 수 있음

## 폴더 상세설명
```bash 
src
 ┣ components
 ┃ ┣ App.js
 ┃ ┣ AuthForm.js
 ┃ ┗ Router.js
 ┣ routes
 ┃ ┣ Auth.js
 ┃ ┣ Home.js
 ┃ ┣ MyProfile.js
 ┃ ┗ Navigation.js
 ┣ firebase.js
 ┣ index.css
 ┗ index.js
```

## 사용한 도구 및 라이브러리
- react, firebase
- react-router-dom@6.3.0
- npm i styled-components

## 강의를 통해 배운 것
- firebase의 storage에 사진을 업로드 하는 기능
- 사진 업로드 코드 
```bash
  //이미지 업로드 하기
  const uploadFile = () => {
    if (imageUpload == null) return; // 이미지 업로드값이 없으면, 리턴
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    // `images === 참조값 이름(폴더이름),/뒤에 아이디 생성`
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // 업로드 되자마자 뜨게 만드는것
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  //저장한 이미지 가져오기 
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      //listAll 메서드 이용해서 이미지 리스트를 불러옴.
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
```

## 해결한 오류
- 깃헙 page에 배포 했을 때 다음과 같은 오류가 발생했다. 

```bash
  iframe.js:299 Info: The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (dahyeblog.github.io) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.
```
- 해결 방법음 오류에 써있는 것과 같이 Firebase console -> Auth section -> Settings tab -> 승인된 도메인 목록에 도메인을(dahyeBlog.github.io) 추가해주면 된다. 

- ![스크린샷 2022-12-20 오후 10 25 08](https://user-images.githubusercontent.com/85933158/208677731-851fe730-d02e-4276-9a72-a4f81c627e6d.png)

