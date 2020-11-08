import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Navigation({next, prev}){
    return (
        <div>
            <StyledButton onClick={() => prev()}>{`<< Prev Page`}</StyledButton>
            <StyledButton onClick={() => next()}>{`Next Page >>`}</StyledButton>
        </div>
    )
}

const StyledButton = styled.button`
margin: 0 1%;
`