import React from 'react';
import styled from 'styled-components'
import Logo from './../img/logo.svg'
import FaceIcon from '@material-ui/icons/Face';

const ExtDiv = styled.div`
display: flex;
height: 100%;
`

const IntDiv = styled.div`
height: 99.4vh;
width: 100%;
border: 2px solid rgba(190, 190, 190, .6);
`

const NavDiv = styled.div`
display: flex;
border-bottom: 2px solid rgba(255, 0, 0, .3);
height: 10vh;
align-items: center;
justify-content: space-around;
`

const IconDiv = styled.div`
padding: 2px;
margin-left: 3em;
`

function UsersScreen() {
  return (
    <ExtDiv>
      <IntDiv>
        <NavDiv>
            
        <img src={Logo}/>
        <IconDiv>
        <FaceIcon fontSize="large" color="secondary"/>
        </IconDiv>
        </NavDiv>

      </IntDiv>
    </ExtDiv>
  );
}

export default UsersScreen;
