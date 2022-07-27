import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MainPage from './components/mainPage';
import EditPost from './components/post/editPost';
import PostDetail from './components/post/postDetail';
import UploadPost from './components/post/uploadPost';
import Login from './components/user/login';
import MyPage from './components/user/myPage';
import Register from './components/user/register';
import firebase from './firebase';
import { clearUser, loginUser } from './reducer/userSlice';

function App() {
  const dispatch = useDispatch();

  // userData 체크
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginUser(user._delegate));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPost />} />
        <Route path="/post/:postNum" element={<PostDetail />} />
        <Route path="/post/edit/:postNum" element={<EditPost />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
