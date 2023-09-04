import React from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import "./styles.css";

function BackToTop() {
  const mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-top-top-btn" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;
