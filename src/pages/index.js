import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo/logo-y.svg';

import styled from 'styled-components';

const LandingPage = styled.div`
    background-color: $dark-blue;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Chicago', monotype;
`

const Logo = styled.img`
    width: 250px;
    margin-bottom: 10px;
`

const H1 = styled.h1`
    font-weight: bold;
    font-family: 'Chicago', monotype;
`

const StyledLink = styled(Link)`
    color: #939393
`

export default () => (
    <LandingPage>
        <Logo src={logo} alt="awww-logo" />
        <H1>Artists on the World Wide Web</H1>
        <StyledLink to="/work" >Click to enter our AWWW_some world</StyledLink>
    </LandingPage>
);