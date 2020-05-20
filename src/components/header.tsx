import React from 'react';

import { Navigation } from './navigation';
import styled from 'styled-components';

export const Header = () => (
    <StyledHeader>
        <Navigation />
    </StyledHeader>
);

const StyledHeader = styled.header`
    margin: 0 0 1.45rem 0;
`;
