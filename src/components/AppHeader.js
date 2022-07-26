import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 4em;
  position: fixed;
  align-items: center;
  background-color: white;
`;

const HeaderIcon = styled.div`
  margin-left: 1em;
  font-family: 'Stick', sans-serif;
  font-size: 1.2em;

  font-weight: 600;
`;

export default function AppHeader() {
  return (
    <Header>
      <HeaderIcon>ポーカーYouTuberランキング</HeaderIcon>
    </Header>
  );
}
