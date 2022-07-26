import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Channel from './components/Channel';
import Ranking from './components/Ranking';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 4em 10%;
`;

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="channels/:channelId" element={<Channel />} />
            <Route index element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </div>
  );
}

export default App;
