import React from 'react';
import styled from 'styled-components';


const LoginContainer = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before {
        position: absolute;
        content: "";
        top: 0;
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
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;

const CTALogoTwo = styled.img`
    width: 90%;
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

    &:hover {
        background-color: #0483ee;
        letter-spacing: 1.8px;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

function Login() {
    return (
        <LoginContainer>
            <CTA> 
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>
                    이 모든 걸 이용하세요
                </SignUp>
                <Description>
                    디즈니의 한국 서비스 많은 기대 바랍니다. 즐겁고 다양한 영상들을 한번에 즐길 수 있는 디즈니플러스! 지금 당장 시작하세요. 1000여개의 즐거움이 한번에! 언제 다시 돌아올지 모르는 그런 이벤트! 계속 오는 기회가 아닙니다~ 줄때 잡으세요! 얼른 라잇 나우. 이건 김예찬이 만든 웹사이트.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </LoginContainer>
    )
}

export default Login;
