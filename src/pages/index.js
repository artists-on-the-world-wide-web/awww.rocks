import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo/logo-y.svg';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => (props.whiteColor ? 'white' : 'black')};
        margin: ${props => (props.noMargin ? '0px' : '8px')};
        font-family: ${props => props.theme.fontFamily};
    }
`

const LandingPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2C2E40;
`

const Logo = styled.img`
    width: 250px;
    margin-bottom: 10px;
`

const Heading = styled.div`
    font-size: 1.5rem;
    margin: 15px 0px;
`

const StyledLink = styled(Link)`
    color: #939393;
    font-size: .7rem;
`

export default () => (
    <ThemeProvider theme={{ fontFamily: 'Chicago, monotype' }}>
        <LandingPage>
            <GlobalStyle whiteColor noMargin />
            <Logo src={logo} alt="awww-logo" />
            <Heading>Artists on the World Wide Web</Heading>
            <StyledLink to="/work" >Click to enter our AWWW_some world</StyledLink>
        </LandingPage>
    </ThemeProvider>
);