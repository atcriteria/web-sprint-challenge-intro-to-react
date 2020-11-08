// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Characters(props) {

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
margin: 1.5% .5%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
max-width: 12%;
min-width: 220px;
height: 420px;
background-image: url('https://i.dlpng.com/static/png/6727909_preview.png');
background-position: center;
background-size: auto;
padding: 0;
`

const CharacterImg = styled.img`
width:100%;
background-color: #5c5c5c;
padding: 0;
margin-bottom: 2.5%;
`

const CharacterContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 2.5% 0;
width: 100%;
border: 14px solid black;
background-color: #0d120d;
padding: 0;
`

const InfoContainer = styled.div`
width: 100%;
height: 170px;
padding: 5%;
border: 5px solid grey;
`

const StyledPara = styled.p`
text-align: left;
font-weight: normal;
margin: 3% 1.5%;
width: 100%;
color: #7ed983;
padding: 0;
`