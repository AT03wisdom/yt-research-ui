import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileImage from './ProfileImage';

const RankingElement = styled.div`
  margin-bottom: 0.5em;
  align-items: center;
  
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  :hover {
    background-color: whitesmoke;
  }
`;

const RankingNumPlaceholder = styled.div`
  width: 1em;
  margin: 0.5em;
`;

const ProfileImageWrapper = styled.div`
  margin: 0.5em;
`;

const NamePlaceholder = styled.div`
  flex: 6;
  margin: 0.5em;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: silver;
  }
`;

const NumberPlaceholder = styled.div`
  width: 6em;
  margin: 0.5em;
  text-align: right;
  flex-grow: 1;
`;

export default function RankingRow(props) {
  let navigate = useNavigate();
  async function handleClick() {
    navigate(`/channels/${props.channel.name}`);
  }

  return (
    <RankingElement onClick={handleClick}>
      <RankingNumPlaceholder>{props.channel.rank + '.'}</RankingNumPlaceholder>

      <ProfileImageWrapper>
        <ProfileImage size="50" />
      </ProfileImageWrapper>

      <NamePlaceholder>{props.channel.name}</NamePlaceholder>

      <NumberPlaceholder>{props.channel.count.toLocaleString() + ' 回'}</NumberPlaceholder>
    </RankingElement>
  );
}
