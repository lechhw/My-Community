import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MainPage from './components/mainPage';
import UploadPost from './components/post/uploadPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPost />} />
      </Routes>
    </div>
  );
}

export default App;
