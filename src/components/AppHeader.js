import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 4em;
  position: fixed;
  align-items: center;
  background-color: #a6120d;
`;

const HeaderIcon = styled.div`
  margin-left: 1em;
  font-family: 'Stick', sans-serif;
  font-size: 1.2em;
  color: white;

  font-weight: 600;
`;

export default function AppHeader() {
  return (
    <Header>
      <HeaderIcon>ポーカーYouTuberランキング</HeaderIcon>
    </Header>
  );
}
