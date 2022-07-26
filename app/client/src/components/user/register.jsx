import React from 'react';
import { useState } from 'react';
import { RegisterDiv } from '../../styles/auth_css';
import firebase from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  // 닉네임 중복검사
  const nameCheckFunc = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('❗️ 닉네임을 입력해 주세요.');
    }
    let body = {
      displayName: name,
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

  // 회원가입
  const signUpFunc = async (e) => {
    e.preventDefault();

    if (!(name && email && pw && pwConfirm)) {
      return alert('❗️ 모든 항목을 입력해 주세요.');
    }

    if ((pw && pwConfirm).length < 8) {
      return alert('❗️ 비밀번호는 8자리 이상으로 입력해 주세요.');
    } else {
      if (pw !== pwConfirm) {
        return alert('❗️ 비밀번호와 비밀번호 확인 값이 다릅니다.');
      }
    }

    // 닉네임 중복검사 확인
    if (!nameCheck) {
      return alert('❗️ 닉네임 중복검사를 진행해 주세요.');
    }

    try {
      setLoading(true);
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pw);

      await createUser.user.updateProfile({
        displayName: name,
      });

      let body = {
        displayName: createUser.user._delegate.displayName,
        email: createUser.user._delegate.email,
        uid: createUser.user._delegate.uid,
      };

      axios
        .post('/api/user/register', body)
        .then((response) => {
          if (response.data.success) {
            setLoading(false);
            navigate('/login');
          } else {
            alert('⚠️ 회원가입에 실패하였습니다');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg('⚠️ 이미 사용 중인 이메일입니다.');
      }
    }
  };

  return (
    <RegisterDiv>
      <form className="registerForm">
        <h2>Sign up</h2>
        <input
          type="name"
          placeholder="닉네임"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        {nameInfo && <p className="nameInfo">{nameInfo}</p>}

        <button
          disabled={nameCheck}
          className="nameCheckBtn"
          onClick={nameCheckFunc}
        >
          닉네임 중복검사
        </button>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => {
            setPw(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={pwConfirm}
          onChange={(e) => {
            setPwConfirm(e.currentTarget.value);
          }}
        />
        <button disabled={loading} className="registerBtn" onClick={signUpFunc}>
          회원가입
        </button>
      </form>
    </RegisterDiv>
  );
}

export default Register;
