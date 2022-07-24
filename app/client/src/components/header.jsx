import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderDiv, IconDiv } from '../styles/header_css';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  const [openUserModal, setOpenUserModal] = useState(false);
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setOpenUserModal(false));

  return (
    <HeaderDiv>
      <Navbar bg="light" expand="lg">
        <Container className="container">
          <Navbar.Brand href="/" className="logoDiv">
            <img src="/images/logo.svg" alt="" />
            <h1>My Community</h1>
          </Navbar.Brand>

          <IconDiv>
            <Link to={'/upload'} className="icon upload">
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>

            <div className="userDiv">
              <button
                className="icon user"
                onClick={() => setOpenUserModal(true)}
              >
                <i className="fa-solid fa-user-large"></i>
              </button>

              {openUserModal && (
                <div ref={modalRef} className="userModal">
                  <button>MyPage</button>
                  <button className="logout">Logout</button>
                </div>
              )}
            </div>
          </IconDiv>
        </Container>
      </Navbar>
    </HeaderDiv>
  );
}

// useOnClickOutside Hook : 지정된 요소의 외부 클릭 감지
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default Header;
