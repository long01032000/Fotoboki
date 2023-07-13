import React from "react";
import "./styles.scss";

interface IRightSideProps {
  image: string;
  title: string;
  content: string;
}

export default function RightSide({ image, title, content }: IRightSideProps) {
  return (
    <div className="rightSide">
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
