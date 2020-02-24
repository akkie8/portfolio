import React from 'react';
import styled from 'styled-components';
import my_photo from '../assets/image/my_photo.png';
import Avatar from '@material-ui/core/Avatar';
import Instagram from '../components/Instagram';
import Grid from '@material-ui/core/Grid';

const Wrap = styled.div`
  max-width: 700px;
  margin: 50px auto;
`;

const ProfileWrap = styled.div`
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
  margin-bottom: 10px;
`;

const TitleWrap = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const MainTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 30px;
  margin: 0 auto 30px;
  color: #515e64;
  border-bottom: solid 4px #515e64;
`;

const Profile: React.FC = () => {
  return (
    <Wrap>
      <MainTitle>about me</MainTitle>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <ProfileWrap>
          <StyledAvatar alt="Aki Yamada" src={my_photo} />
          <TitleWrap>Aki Yamada</TitleWrap>
          <TextWrap>
            1990生まれ / フリーランス フロントエンドエンジニア / デジタルノマド
            海外在住 / サーフタウン好き
          </TextWrap>
          <TextWrap>
            生産性の高いコミニケーションを意識し
            業務を最後まで逃げずに遂行致します。
          </TextWrap>
        </ProfileWrap>
        <Instagram />
      </Grid>
    </Wrap>
  );
};
export default Profile;