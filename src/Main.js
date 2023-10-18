import { Button } from "@mui/material";
import 배경 from "../src/assets/image/background.jpg";
import 태블로 from "../src/assets/image/tableau.png";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Main() {

  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (imgId) => {
    setActiveImage(imgId);
  }

  return (
    <div
      className="container-fluid"
      style={{ padding: 0, overflowX: "hidden" }}
    >
      <div
      className="main-background"
        style={{
          position: "relative",
          height: "80vh",
          width: "100vw",
          background: `url(${배경}) no-repeat center/cover`,
        }}
      />
      <p
        style={{
          position: "absolute",
          top: "30vh",
          left: "10vw",
          fontSize: "1.2rem",
        }}
      >
        챗봇에 증상 한 줄만 입력하면, <br />
        <br />
        <strong style={{ fontSize: "2rem" }}>
          진료과, 맞춤 병원, 진단명을 <br />
          한번에 알려드립니다.
        </strong>
      </p>
      <Button
        component={Link}
        to="/chat"
        style={{
          position: "absolute",
          top: "50vh",
          left: "13vw",
          backgroundColor: "rgb(255, 223, 86)",
          color: "#36454F",
          padding: '10px 20px',
          fontSize: "1rem",
          borderRadius:"25px"
        }}
      >
        <strong>챗봇 바로 시작</strong>
      </Button>
      <img
        src={태블로}
        alt="picture"
        onClick={() => handleImageClick('img2')}
        style={{
          position: "absolute",
          top: "30vh",
          left: "60vw",
          width: "500px",
          height: "280px",
          borderRadius: "25px",
          zIndex: activeImage === 'img1' ? 3 : 2,
          transform: activeImage === 'img1' ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s, z-index 0.3s'
        }}
      />
      <img
        src={태블로}
        alt="picture"
        onClick={() => handleImageClick('img1')}
        style={{
          position: "absolute",
          top: "25vh",
          left: "50vw",
          width: "500px",
          height: "280px",
          borderRadius: "25px",
          zIndex: activeImage === 'img2' ? 3 : 2,
          transform: activeImage === 'img2' ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s, z-index 0.3s'
        }}
      />

<div style={{
      position: "absolute",
      top: "65vh",  // 위치는 조절하여 이미지 바로 아래에 오도록 설정
      left: "60vw",  // 위치는 조절하여 이미지 중간에 오도록 설정
      display: 'flex',
    }}>
      <Button
        onClick={() => handleImageClick('img2')}
        style={{
          backgroundColor: "#36454F",
          color: "white",
          width: '100px',
          height: '40px',
          borderRadius: '20px',
          padding: '10px 20px',
          margin: '10px'
        }}
      >
        <strong>챗봇</strong>
      </Button>
      <Button
        onClick={() => handleImageClick('img1')}
        style={{
          backgroundColor: "#36454F",
          color: "white",
          width: '130px',
          height: '40px',
          borderRadius: '20px',
          padding: '10px 20px',
          margin: '10px'
        }}
      >
        <strong>사용자 분석</strong>
      </Button>
    </div>
    </div>
  );
}

export default Main;
