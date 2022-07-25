import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MainPage from './components/mainPage';
import EditPost from './components/post/editPost';
import PostDetail from './components/post/postDetail';
import UploadPost from './components/post/uploadPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPost />} />
        <Route path="/post/:postNum" element={<PostDetail />} />
        <Route path="/post/edit/:postNum" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
