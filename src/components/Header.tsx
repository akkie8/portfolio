import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Wrap = styled.div`
  font-size: 20;
`;

const TitleWrap = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Vollkorn';
`;

const Header: React.FC = () => {
  return (
    <Wrap>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <TitleWrap>Aki Yamada</TitleWrap>
            <div>
              <a href="https://www.instagram.com/akistagram_jp/">
                <IconButton aria-label="delete" color="default">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a href="https://twitter.com/akiy_8">
                <IconButton aria-label="delete" color="default">
                  <TwitterIcon />
                </IconButton>
              </a>
              <a href="https://github.com/akkie8">
                <IconButton aria-label="delete" color="default">
                  <GitHubIcon />
                </IconButton>
              </a>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Wrap>
  );
};
export default Header;
