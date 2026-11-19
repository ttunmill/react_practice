/* eslint-disable */
/* 터미널 worning 지우기 */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let h1Style = {color : 'blue', fontSize: '22px' };
  let posts = '강남 고기 맛집';
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  //따봉변경(10); /* 따봉변경 대체할 데이터 */

  function pointUp() {
    따봉변경(따봉 + 1);
  }
  function changeTitle() {
    //글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학'])

    //var newArray = 글제목; 복사가 아닌 값 공유 x / reference date type 특징

    var newArray = [...글제목]; //deep copy (값 공유 x) / 서로 독립적인 값을 가지는 복사
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <header>
        <h1>개발 Blog</h1>
        <h1 style={ {color : 'blue', fontSize: '22px' } }>개발 Blog</h1>
        <h1 style={ h1Style }>개발 Blog</h1>
      </header>
      <img className="displaynone" src={ logo }/>
      <ul className="blog_contents_area">
        <li>
          <p className="blog_title">{ posts } <span onClick={pointUp}>👍</span> { 따봉 }</p>
          <p className="blog_date">2026.11.18</p>
        </li>
        <li>
          <p className="blog_title">{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }</p>
          <p className="blog_date">2026.11.19</p>
        </li>
        <li>
          <p className="blog_title">{ 글제목[1] }</p>
          <p className="blog_date">2026.11.20</p>
        </li>
        <li>
          <p className="blog_title">{ 글제목[2] }</p>
          <p className="blog_date">2026.11.21</p>
        </li>
      </ul>

      <button onClick={changeTitle}>버튼</button>

      <Modal />
    </div>
  );
}

/* Component 작성법 */
// 대문자로 시작
// return() 안에 있는건 태그 하나로 묶어야함
function Modal() {
  return (
    //의미없는 div 쓰기 싫으면 <></> 사용 => 이후엔 연속적으로 태그 사용 가능
    <>
      <div className="modal">
        <h2>제목</h2>
        <p className="modal_date">날짜</p>
        <p className="modal_detail">내용</p>
      </div>
      <div className="displaynone">연속적으로 작성 불가</div>
    </>
  )
}

export default App;
