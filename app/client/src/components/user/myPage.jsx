import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyPageDiv } from '../../styles/myPage_css';
import firebase from '../../firebase';

function MyPage() {
  const [currentImage, setCurrentImage] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState('');
  const [changeName, setChangeName] = useState(false);

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  // 닉네임 중복검사
  const nameCheckFunc = (e) => {
    e.preventDefault();

    if (!currentName) {
      return alert('❗️ 닉네임을 입력해 주세요.');
    }

    let body = {
      displayName: currentName,
    };

    axios
      .post('/api/user/nameCheck', body)
      .then((response) => {
        if (response.data.success) {
          if (response.data.check) {
            setNameCheck(true);
            setNameInfo('👌 사용 가능한 이름입니다.');
          } else {
            setNameInfo('⚠️ 사용 불가능한 이름입니다.');
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 프로필 업데이트
  const updateProfile = async (e) => {
    e.preventDefault();

    if (currentName === '' && !nameCheck) {
      return alert('❗️ 닉네임 중복검사를 진행해 주세요.');
    }

    try {
      await firebase.auth().currentUser.updateProfile({
        photoURL: currentImage,
        displayName: currentName,
      });
    } catch (error) {
      return alert('❗️ 프로필 저장에 실패하였습니다.');
    }

    let body = {
      uid: user.uid,
      photoURL: currentImage,
      displayName: currentName,
    };

    axios
      .post('/api/user/profile/update', body)
      .then((response) => {
        if (response.data.success) {
          alert('프로필 저장이 완료되었습니다.');
          window.location.reload();
        } else {
          alert('⚠️ 프로필 저장에 실패하였습니다.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 이미지 저장
  const uploadImage = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    axios.post('/api/user/profile/image', formData).then((response) => {
      if (response.data.success) {
        setCurrentImage(response.data.filePath);
      }
    });
  };

  // 로그인 여부 체크
  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate('/login');
    } else {
      setCurrentImage(user.photoURL);
      setCurrentName(user.displayName);
    }
  }, [user, navigate]);

  return (
    <MyPageDiv>
      <div className="avatarDiv">
        <label htmlFor="file">
          <input
            id="file"
            className="fileInput"
            type="file"
            accept="image/*"
            onChange={uploadImage}
          />
          <div className="avatar">
            <img src={currentImage} alt="avatar" />
          </div>
        </label>
      </div>

      <div className="nameInfo">
        <p>{currentName}</p>
        <button
          className="changeBtn"
          onClick={(e) => {
            e.preventDefault();
            setChangeName(true);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>

      {changeName && (
        <div className="changeNameDiv">
          <label htmlFor="name" className="nameLabel">
            닉네임
          </label>

          <div className="nameWrapper">
            <input
              id="name"
              className="nameInput"
              type="text"
              value={currentName}
              onChange={(e) => {
                setCurrentName(e.currentTarget.value);
              }}
              placeholder="닉네임을 입력해주세요."
            />
            <button
              disabled={nameCheck}
              className="nameCheckBtn"
              onClick={nameCheckFunc}
            >
              중복 체크
            </button>
          </div>
          {nameInfo && <p>{nameInfo}</p>}
        </div>
      )}

      <button className="saveBtn" onClick={updateProfile}>
        저장
      </button>
    </MyPageDiv>
  );
}

export default MyPage;
