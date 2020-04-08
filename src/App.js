import React from 'react';
import Users from './components/Users';
import styled from 'styled-components'

const StyledUsersCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`
const Wrapper =styled.div`
    display: flex;
`


function App() {
  return (
    <Wrapper>
      <h3>Users:</h3>
      <StyledUsersCard>
         <Users />
      </StyledUsersCard>
    </Wrapper>
  );
}

export default App;
