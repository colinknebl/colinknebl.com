/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './header';
import { Footer } from './footer';
import './layout.css';
import styled from 'styled-components';

interface ILayoutProps {
    children: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <PageContainer>
            <Header />
            <main>{children}</main>
            <Footer />
        </PageContainer>
    );
};

export default Layout;

const PageContainer = styled.div`
    padding: 10px;
`;
