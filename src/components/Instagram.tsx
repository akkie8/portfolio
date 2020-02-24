import React from 'react';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

const Wrap = styled.div`
  margin-bottom: 50px;
  margin: auto;
`;

const Instagram: React.FC = () => {
  return (
    <Wrap>
      <InstagramEmbed
        url="https://www.instagram.com/p/B862xVgpWpv/"
        maxWidth={200}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </Wrap>
  );
};
export default Instagram;
