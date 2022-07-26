import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDiv } from '../../styles/auth_css';
import firebase from '../../firebase';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  // 로그인
  const loginFunc = async (e) => {
    e.preventDefault();

    if (email === '' || pw === '') {
      return alert('❗️ 모든 항목을 채워주세요.');
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrorMsg('⚠️ 존재하지 않는 이메일입니다.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMsg('⚠️ 비밀번호가 일치하지 않습니다.');
      } else {
        setErrorMsg('⚠️ 로그인에 실패하였습니다.');
      }
    }
  };

  // 에러메세지
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg('');
    }, 3000);
  }, [errorMsg]);

  //로그인여부 체크
  useEffect(() => {
    if (user.accessToken) {
      navigate('/');
    }
  }, []);

  return (
    <LoginDiv>
      <form className="loginForm">
        <h2>Login</h2>
        <input
          className="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => {
            setPw(e.currentTarget.value);
          }}
        />
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}

        <button className="login" onClick={loginFunc}>
          로그인
        </button>

        <button
          className="register"
          onClick={(e) => {
            e.preventDefault();
            navigate('/register');
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
