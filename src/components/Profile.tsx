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
  margin-bottom: 10px;
`;

const TitleWrap = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  font-family: 'Vollkorn';
`;

const MainTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 30px;
  margin: 0 auto 30px;
  color: #515e64;
  border-bottom: solid 4px #515e64;
  font-family: 'Vollkorn';
`;

const Profile: React.FC = () => {
  return (
    <Wrap>
      <MainTitle>About me</MainTitle>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <div>
          <StyledAvatar alt="Aki Yamada" src={my_photo} />
          <TitleWrap>Aki Yamada</TitleWrap>
          <TextWrap>
            1990生まれ / フリーランス<br/>
            フロントエンドエンジニア<br />
            デジタルノマド / 海外在住
          </TextWrap>
          <TextWrap>
            生産性の高いコミニケーションを意識し<br/>
            業務を最後まで逃げずに遂行致します。
          </TextWrap>
        </div>
        <Instagram />
      </Grid>
    </Wrap>
  );
};
export default Profile;
