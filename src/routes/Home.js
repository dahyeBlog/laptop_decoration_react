import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

  const imagesListRef = ref(storage, "images/");

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

  return (
    <PhotoUploadContainer>
      <Title>
        <h2>Photo Upload</h2>
        <p>자신의 사진을 업로드 하세요.</p>
      </Title>
      <PhotoInputWrapper>
        <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button onClick={uploadFile}> 파일 업로드 </button>
      </PhotoInputWrapper>

      <PhotoImageWrapper>
        {imageUrls.map((url, index) => {
          return <img src={url} key={index} />;
        })}
      </PhotoImageWrapper>
    </PhotoUploadContainer>
  );
};

const PhotoUploadContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  color: #c45964;
  h2 {
    letter-spacing: 1px;
    font-weight: 700;
    margin-top: 3rem;
  }
  p {
    letter-spacing: 1px;
    margin-top: 20px;
  }
`;

const PhotoInputWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px auto;
`;

const PhotoImageWrapper = styled.div`
  margin: 50px auto;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  img {
    cursor: pointer;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
      transform: scale(1.1);
      transition: transform 800ms ease-in-out;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 80%;
    grid-template-columns: 1fr 1fr;

    img {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export default Home;
