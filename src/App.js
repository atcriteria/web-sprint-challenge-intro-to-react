import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Characters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const fetchChars = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        setChars(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {

      });
    }
    fetchChars();
  }, [])

  return (
    <div className="App">
      <MainContain>
        <Header>Rick And Morty Characters</Header>
        <CharContainer>
          {
            chars.map(char => {
              return <Characters info={char} />
            })
          }
        </CharContainer>
      </MainContain>
    </div>
  );
}

export default App;

const MainContain = styled.div`
margin: auto;
`

const CharContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`

const Header = styled.h1`
font-size: 3.6rem;
padding-top: 2%;
`