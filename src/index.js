import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Post from "./components/Post";
import Lndia from "./components/Lndia";
// import Img1 from "./assets/my new.png";

function App(props) {
  return (
    <div className="top">
      <Header />
      <Content />
      <Post />
      <Lndia />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
