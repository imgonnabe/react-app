import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/library';
import Clock from './chapter_04/clock';
import CommentList from './chapter_05/commentList';
import NotificationList from './chapter_06/notificationList';
import Accommodate from './chapter_07/accommodate';
import ConfirmButton from './chapter_08/confirmButton';
import LandingPage from './chapter_09/landingPage';
import Attendance from './chapeter_10/attendance';
import SignUp from './chapter_11/singUp';
import Calculator from './chapter_12/calculate';
import ProfileCard from './chapter_13/profileCard';
import DarkOrLight from './chapter_14/darkOrLight';
import Blocks from './chapter_15/block';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock></Clock>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>,
  document.getElementById('root')
)

root.render(
  <React.StrictMode>
    <Accommodate />
    <ConfirmButton/>
    <LandingPage/>
    <Attendance/>
    <SignUp/>
    <Calculator/>
    <ProfileCard/>
    <DarkOrLight/>
    <Blocks/>
  </React.StrictMode>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
