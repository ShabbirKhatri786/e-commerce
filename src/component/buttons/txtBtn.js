import React from "react";
import "./style.css";

const TextBtn = ({ text, onClick }) => {
  return <button className="text__btn" onClick={onClick}>{text}</button>;
};

export default TextBtn;
