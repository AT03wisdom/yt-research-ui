import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';

import ProfileImage from './ProfileImage';

const ChannelProfileWrapper = styled.div`
  margin-top: 2em;
  display: flex;
`;

const ProfilePlaceholder = styled.div`
  display: flex;
  margin-left: 20%;
`;

const ChannelNamePlaceholder = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10%;
  text-decoration: underline 4px;
  text-underline-offset: 0.25em;
  font-size: 2.4em;
  font-weight: 800;
  justify-content: flex-start;
  margin-bottom: 0.5em;
`;

const NumberPlaceholder = styled.div`
  width: 100%;
  display: flex;
  font-size: 2em;
`;

const ChannelDescription = styled.div`
  display: flex;
  width: 100%;
  ul {
    margin-left: 8%;
  }
  flex-direction: column;
`;

const TwitterTimelineWrapper = styled.div`
  display: flex;
  margin-left: 16%;
`;

export default function Channel() {
  return (
    <div>
      <h2>チャンネルページ</h2>
      <ChannelProfileWrapper>
        <ProfilePlaceholder>
          <ProfileImage size="200" />
        </ProfilePlaceholder>
        <ChannelDescription>
          <ChannelNamePlaceholder>
            チャンネル名・チャンネル名
          </ChannelNamePlaceholder>

          <ul>
            <NumberPlaceholder>
              <li>登録者数 1,0000位</li>
            </NumberPlaceholder>

            <NumberPlaceholder>
              <li>登再生回数 2,0000回 </li>
            </NumberPlaceholder>

            <NumberPlaceholder>
              <li>チャンネル開設日 2022/05/20</li>
            </NumberPlaceholder>
          </ul>
        </ChannelDescription>
      </ChannelProfileWrapper>

      <TwitterTimelineWrapper>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MasatoYokosawa',
          }}
          options={{
            height: '400',
            theme: 'dark',
          }}
        />
      </TwitterTimelineWrapper>
    </div>
  );
}
