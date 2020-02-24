import React from 'react';
import styled from 'styled-components';
import TimelineContents from '../components/TimelineContents';

const Wrap = styled.div`
  margin-bottom: 50px;
  padding: 20px;
`;

const MainTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 30px;
  margin: 0 auto 30px;
  color: #515e64;
  border-bottom: solid 4px #515e64;
`;

const Timeline: React.FC = () => {
  return (
    <Wrap>
      <MainTitle>career and skills</MainTitle>
      <TimelineContents title="2015/05" text="ネイリストからエンジニアに転職" />
      <TimelineContents
        title="2015年05月〜（１社目）"
        text="ホームページ制作、検査装置開発、ツール系アプリ開発、ゲームアプリ開発"
        skill={['HTML', 'CSS', 'jQuery', 'JavaScript', 'C++', 'swift', 'VBA']}
      />
      <TimelineContents
        title="2017年12月〜（２社目）"
        text="Facebook Instant Games 開発、LINE Account Connect 開発、ソーシャルゲーム運営"
        skill={[
          'HTML5',
          'Phaser.js',
          'Riot.js',
          'JavaScript',
          'TypeScript',
          'GitHub',
          'Node.js',
          'Unity',
          'C#',
        ]}
      />
      <TimelineContents
        title="2018年12月〜（フリーランス）"
        text="クロスプラットフォーム開発、サイト制作、ワードプレス改修、システム開発、個人アプリ開発"
        skill={[
          'JavaScript',
          'TypeScript',
          'Angular',
          'React',
          'Vue.js',
          'GitHub',
          'Firebase',
          'Node.js',
          'GraphQL',
          'Flutter',
          'Dart',
        ]}
      />
    </Wrap>
  );
};

export default Timeline;
