import React, { useState } from 'react';
import styled from 'styled-components';
import RankingRow from './RankingRow';
import { Link } from 'react-router-dom';
import SortOptionDropDown from './SortOptionDropDown';

const channels = [
  // 総再生回数順
  { rank: 1, name: 'ヨコサワポーカーチャンネル', count: 240000, subscriber: 150000 },
  { rank: 2, name: '田村２', count: 230000, subscriber: 120000 },
  { rank: 3, name: '田西３', count: 220000, subscriber: 220000 },
  { rank: 4, name: '田崎４', count: 210000, subscriber: 100000 },
  { rank: 5, name: '田端５', count: 200000, subscriber: 20000 },
  { rank: 6, name: '田島６', count: 190000, subscriber: 80000 },
  { rank: 7, name: '田淵７', count: 180000, subscriber: 60000 },
  { rank: 8, name: '田沼８', count: 170000, subscriber: 70000 },
  { rank: 9, name: '田中', count: 160000, subscriber: 55000 },
  { rank: 10, name: '田村', count: 150000, subscriber: 80000 },
  { rank: 11, name: '田西', count: 140000, subscriber: 40000 },
  { rank: 12, name: '田崎', count: 130000, subscriber: 30000 },
  { rank: 13, name: '田端', count: 120000, subscriber: 25000 },
  { rank: 14, name: '田島', count: 110000, subscriber: 20000 },
  { rank: 15, name: '田淵', count: 100000, subscriber: 12000 },
  { rank: 16, name: '田沼', count: 90000, subscriber: 9000 },
  { rank: 17, name: '田中', count: 80000, subscriber: 8000 },
  { rank: 18, name: '田村', count: 70000, subscriber: 7000 },
  { rank: 19, name: '田西', count: 60000, subscriber: 6000 },
  { rank: 20, name: '田崎', count: 50000, subscriber: 5000 },
  { rank: 21, name: '田端', count: 40000, subscriber: 4000 },
  { rank: 22, name: '田島', count: 30000, subscriber: 3000 },
  { rank: 23, name: '田淵', count: 20000, subscriber: 2000 },
  { rank: 24, name: '田沼', count: 10000, subscriber: 1000 },
];

let channelsInShowingOrder = [...channels];

const RankingWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const SortOptionDropDownWrapper = styled.div`
  display: flex;
  margin-right: 5%;
  margin-bottom: 2em;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function Ranking() {

  const [sortOpt, setSortOpt] = useState('総再生回数順');
  window.addEventListener('popstate', (e) => {
    // SortOptionDropDownが「登録者数順」のまま別ページに遷移し、ブラウザの戻るをしたときに、どうしても、
    // SortOptionDropDownは「総再生回数順」、channelsInShowingOrderは「登録者数順」になってしまう
    // 応急処置的にリロードしてチャラにしている
    window.location.reload();
  }, false);

  const handleSort = (opt) => {
    console.log('click : ' + opt);
    setSortOpt(opt);

    channelsInShowingOrder.sort((a,b) => {
      if (opt === '総再生回数順') {
        return b.count - a.count;
      } else {
        // 登録者数順
        return b.subscriber - a.subscriber;
      }
    })
    console.log(opt, sortOpt, channelsInShowingOrder);
  };

  return (
    <div>
      <h2>ランキングページ</h2>

      <SortOptionDropDownWrapper>
        <SortOptionDropDown handleSort={handleSort} sortOpt={sortOpt}/>
      </SortOptionDropDownWrapper>

      <RankingWrapper>
        {channelsInShowingOrder.map((channel) => (
          <RankingRow channel={channel} />
        ))}
      </RankingWrapper>
    </div>
  );
}
