import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyPageDiv } from '../../styles/myPage_css';
import { Spinner } from 'react-bootstrap';
import firebase from '../../firebase';

function MyPage() {
  const [currentImage, setCurrentImage] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [editName, setEditName] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameCheckInfo, setNameCheckInfo] = useState('');
  const [loading, setLoading] = useState(true);

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
            setNameCheckInfo('👌 사용 가능한 이름입니다.');
          } else {
            setNameCheckInfo('⚠️ 사용 불가능한 이름입니다.');
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

    setLoading(false);
    axios.post('/api/user/profile/image', formData).then((response) => {
      if (response.data.success) {
        setCurrentImage(response.data.filePath);
        setLoading(true);
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
      <div className="profileImgDiv">
        <label htmlFor="file">
          <input
            id="file"
            className="fileInput"
            type="file"
            accept="image/*"
            onChange={uploadImage}
          />

          {loading ? (
            <div className="image">
              <img src={currentImage} alt="profile" />
            </div>
          ) : (
            <div className="spinner">
              <Spinner animation="border" variant="info" />
            </div>
          )}
        </label>
      </div>

      <div className="profileNameDiv">
        <p className="name">{currentName}</p>

        <button
          className="editBtn"
          onClick={(e) => {
            e.preventDefault();
            setEditName(true);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>

      {editName && (
        <div className="editNameDiv">
          <label htmlFor="name" className="nameLabel">
            닉네임
          </label>

          <div className="editForm">
            <input
              id="name"
              className="input"
              type="text"
              value={currentName}
              onChange={(e) => {
                setCurrentName(e.currentTarget.value);
              }}
              placeholder="닉네임을 입력해주세요."
            />

            {nameCheckInfo && <p className="checkInfo">{nameCheckInfo}</p>}

            <button
              disabled={nameCheck}
              className="checkBtn"
              onClick={nameCheckFunc}
            >
              중복 검사
            </button>

            <button className="saveBtn" onClick={updateProfile}>
              저장
            </button>
          </div>
        </div>
      )}
    </MyPageDiv>
  );
}

export default MyPage;
