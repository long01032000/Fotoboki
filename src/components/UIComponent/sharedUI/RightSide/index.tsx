import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

interface IRightSideProps {
  image: string;
  title: string;
  content: string;
}

export default function RightSide({ image, title, content }: IRightSideProps) {
  const navigate = useNavigate();
  return (
    <div className="rightSide">
      <div className="backToHome">
      <CloseCircleOutlined onClick={()=>{
        navigate("/home")
      }}/>    
      </div>
      <div className="rightSide__content ">
        <div className="ellipse">
          <img className="ellipse__image" src={image} alt="..." />
          <div className="ellipse__description">
            <h1>{title}</h1>
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
