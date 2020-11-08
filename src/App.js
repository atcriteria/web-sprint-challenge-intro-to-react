import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import logo from './images/Rick_and_Morty_logo.png';

import Characters from './components/Character';
import Navigation from './components/Navigation';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const nextPage =() => {
    if (pageNum === 34){
      return;
    }
    setPageNum(pageNum + 1);
    return;
  }
  const prevPage = () => {
    if (pageNum === 1){
      return;
    }
    setPageNum(pageNum - 1);
    return;
  }
  
  useEffect(() => {
    const fetchChars = () => {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
      .then((res) => {
        setChars(res.data.results);
      })
      .catch((err) => {

      });
    }
    fetchChars();
  }, [pageNum])

  return (
    <div className="App">
      <MainContain>
        <Header><StyledImg src={logo} alt='Rick And Morty'></StyledImg></Header>
        <Navigation next={nextPage} prev={prevPage} />
        <CharContainer>
          {
            chars.map(char => {
              return <Characters info={char} />
            })
          }
        </CharContainer>
        <Footer>
          <Navigation next={nextPage} prev={prevPage} />
        </Footer>
      </MainContain>
    </div>
  );
}

export default App;

const MainContain = styled.div`
margin: auto;
`

const CharContainer = styled.div`
width: 80%;
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
@media (max-width: 1024px){
  width: 100%;
}
@media (max-width: 768px){
  width: 100%;
}
@media (max-width: 580px){
  width: 85%;
}
@media (max-width: 320px){
  width: 65%;
}
`

const Header = styled.h1`
background-color: black;
width: 100%;
margin-top: 0;
@media (max-width: 320px){
  width: 100%;
}
margin-bottom: 3%;
`
const Footer = styled.div`
margin-bottom: 2.5%;
margin-top: 2.5%;
width: 100%;
`

const StyledImg = styled.img`
width: 75%;
@media (max-width: 320px){
  width: 100%;
}
@media (max-width: 360px){
  width: 100%;
}
`