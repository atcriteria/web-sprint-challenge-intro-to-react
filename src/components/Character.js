// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Characters(props) {
    const { info } = props;

    return (    
        <MainContain>
            <CharacterContainer>
                <CharacterImg src={props.info.image} alt={props.info.name}></CharacterImg>
                 <InfoContainer>
                    <StyledPara>Name: {props.info.name}</StyledPara>
                    <StyledPara>Status: {props.info.status}</StyledPara>
                    <StyledPara>Species: {props.info.species}</StyledPara>
                    <StyledPara>Gender: {props.info.gender}</StyledPara>
                    <StyledPara>Location: {props.info.location.name}</StyledPara>
                </InfoContainer>
            </CharacterContainer>
        </MainContain>
    )
}

const MainContain = styled.div`
margin: 1.5% 0;
border: 1px solid red;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 20%;
min-width: 320px;
height: 500px;
background-image: url('https://i.dlpng.com/static/png/6727909_preview.png');
background-position: center;
background-size: auto;
`

const CharacterImg = styled.img`
max-width:100%;
`

const CharacterContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin: 2.5% 0;
border: 1px solid red;
width: 80%
`

const InfoContainer = styled.div`
width: 100%;
`

const StyledPara = styled.p`
text-align: left;
font-weight: bold;
`