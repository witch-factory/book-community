import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HeaderLogo from '../../common/HeaderLogo';

function LoginPage() {
  return (
    <>
      <TopBar>
        <LogoContainer>
          <HeaderLogo className="logo" />
        </LogoContainer>
      </TopBar>
      <TotalWrap>
        {/* <HeaderLogo /> */}
        <Form>
          <Form.Group controlId="joinForm">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              maxLength="100"
        //   ref={ref => (this.joinEmail = ref)}
              placeholder="Enter email"
            />
            {/* <Form.Text className="text-muted">
          We wll never share your email with anyone else.
        </Form.Text> */}
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              maxLength="20"
        //   ref={ref => (this.joinName = ref)}
              placeholder="name"
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              maxLength="64"
        //   ref={ref => (this.joinPw = ref)}
              placeholder="Password"
            />
            <Button variant="primary" type="button" className="btn" block> 회원가입</Button>
          </Form.Group>

          <Form.Group controlId="loginForm">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              maxLength="100"
        //   ref={ref => (this.loginEmail = ref)}
              placeholder="Enter email"
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              maxLength="20"
        //   ref={ref => (this.loginPw = ref)}
              placeholder="Password"
            />
            {/* <ReCaptcha
          sitekey="6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb"
          action="login"
          verifyCallback={this.verifyCallback}
        /> */}
            <Button variant="primary" type="button" className="btn" block>로그인</Button>
          </Form.Group>
        </Form>
      </TotalWrap>
    </>
  );
}

// eslint-disable-next-line no-undef
const TotalWrap = styled.div`
  margin: 0;
  width: 300px;
  height: 500px;
  margin-left: 40%;
  margin-top: 100px;

  & .btn{
      background-color: slateblue;
      border: none;
      margin-left: 100px;
      margin-top: 15px;
      margin-bottom: 20px;
  }

`;

const TopBar = styled.div`
  display: flex;
  height: 9vh;
  background-color: rgb(189 167 232);;
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 10vh;
//   background-color: green;
  margin-top: .5rem;
  & .logo {
      color: blue;
  }
`;

export default LoginPage;
