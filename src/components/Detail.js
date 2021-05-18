import React from 'react';
import styled from 'styled-components';


const DetailContainer = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;


const Background = styled.div`
    position: fixed;
    left: 0px;
    opacity: 0.8;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

function Detail() {

    return (
        <DetailContainer>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>
        </DetailContainer>
    )
}

export default Detail;
