import React from "react";
import "../styles/blogBar.css";
import blogImage from "../assets/sample.jpg";

export const BlogBar = () => {
  return (
    <>
    <div className="post">
      <img src={blogImage}></img>
      <div className="text-container">
        <h1>This is the heading of the post</h1>
        <div className="info">
          <span className="author">Jaskaran Singh</span>
          <span className="date">2003-03-09 3:45</span>
        </div>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem eius molestias eos magni quia libero, illo cupiditate
          eligendi, modi magnam nemo unde, adipisci cumque. Consectetur incidunt
          magnam illum error aspernatur.
        </p>
      </div>
    </div>
    <div className="post">
    <img src={blogImage}></img>
    <div className="text-container">
      <h1>This is the heading of the post</h1>
      <div className="info">
        <span className="author">Jaskaran Singh</span>
        <span className="date">2003-03-09 3:45</span>
      </div>
      <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Exercitationem eius molestias eos magni quia libero, illo cupiditate
        eligendi, modi magnam nemo unde, adipisci cumque. Consectetur incidunt
        magnam illum error aspernatur.
      </p>
    </div>
  </div>
 

    </>
  );
}; 
