import React from 'react';
import styled from 'styled-components';


const LoginContainer = styled.section`
    overflow:hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* align-items: top; */
    /* justify-content: center; */
    
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

    &:before {
        height: 100%;
        position: absolute;
        content: "";
        top: 70px;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1; // 뒤에 배치시켜 콘첸츠가 보이게 함
    }
`;

const CTA = styled.div`
    width: 100%;
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;

`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1px;
    margin-top: 8px;
    margin-bottom: 12px;
    border-radius: 1px solid transparent;

    &:hover {
        background-color: #0483ee;
        letter-spacing: 1.8px;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.7;
    margin: 0 0 24px;
`;

function Login({}) {
    return (
        <LoginContainer>
            <Content>
                <CTA>
                    <CTALogoOne src="images/cta-logo-one.svg" alt=""/>
                    <SignUp>이 모든 것을 지금 바로</SignUp>
                    <Description>디즈니의 한국 서비스 많은 기대 바랍니다. 즐겁고 다양한 영상들을 한번에 즐길 수 있는 디즈니플러스! 지금 당장 시작하세요. 1000여개의 즐거움이 한번에! 언제 다시 돌아올지 모르는 그런 이벤트! 계속 오는 기회가 아닙니다~ 줄때 잡으세요! 얼른 라잇 나우. 이건 김예찬이 만든 웹사이트.</Description>
                    <CTALogoTwo src="images/cta-logo-two.png" alt="" />
                </CTA>
            </Content>
        </LoginContainer>
    )
}

export default Login;


