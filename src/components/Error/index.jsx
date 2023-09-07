import React from 'react';
import errorPic from "./404_page_cover.jpg"
import style from "./Error.module.scss"

const Error = () => {
  return (
    <div className={style.bloc__error} >
      <img src={errorPic} alt="error" />
    </div>
  );
}

export default Error;
