import React from 'react';
import styled from 'styled-components';
import my_photo from '../assets/image/my_photo.png';
import Avatar from '@material-ui/core/Avatar';

const Wrap = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin: 0 auto 30px;
    width: 200px;
    height: 200px;
  }
`;

const TextWrap = styled.div`
  width: 300px;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
  text-align: center;
  word-break: keep-all;
`;

const TitleWrap = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const Profile: React.FC = () => {
  return (
    <Wrap>
      <StyledAvatar alt="Aki Yamada" src={my_photo} />
      <TitleWrap>Aki Yamada</TitleWrap>
      <TextWrap>
        1990生まれ フリーランス フロントエンドエンジニア
        デジタルノマド
      </TextWrap>
    </Wrap>
  );
};
export default Profile;
