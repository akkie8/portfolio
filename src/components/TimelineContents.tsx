import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

type Props = {
  title: string
  text: string
  skill?: string[] | undefined
}

const Wrap = styled.div`
  margin: 0 auto 30px;
  max-width: 500px;
`;

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  color: white;
  padding: 2px 15px;
  display: inline;
`;

const Text = styled.div`
  font-size: 16px;
  /* word-break: keep-all; */
  margin-bottom: 10px;
`;

const ContentsWrap = styled.div`
  font-size: 16px;
  border-left: 2px solid rgba(0, 0, 0, 0.8);
  padding-left: 20px;
  margin: 10px;
`;

const StyledChip = styled(Chip)`
  margin: 2px;
  && {
    background-color: #b6c3ae;
  }
`;

const TimelineContents: React.FC<Props> = ({ title, text, skill = [] }) => {

  const listItems = skill.map((item, i) => (
    <StyledChip label={item} key={i}/>
  ));

  return (
    <Wrap>
      <Title>{title}</Title>
      <ContentsWrap>
        <Text>{text}</Text>
        {listItems}
      </ContentsWrap>
    </Wrap>
  );
};
export default TimelineContents;
