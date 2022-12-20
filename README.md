# Photo upload 프로젝트
-  Photo를 업로드 해서 관리할 수 있는 간단한 사이트를 제작함

## 데모사이트

## 구현한 내용
- 회원가입, 로그인
- 메인 페이지는 사진을 업로드 할 수 있음

## 폴더 상세설명
```bash 

```

## 사용한 도구 및 라이브러리
- react, firebase
- react-router-dom@6.3.0
- npm i styled-components

## 강의를 통해 배운 것
- 사진을 업로드 할 수 있는 함수를 배웠고, 이를 firebase의 storage에 저장하는 기능을 배웠다. 
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

## 학습하면서 어려웠던 점
- 

