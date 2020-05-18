import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

//#region PageQuery
interface IndexPageQueryResult {
    allDescriptorsJson: {
        nodes: Site.Descriptor[];
    };
    site: {
        siteMetadata: {
            author: string;
        };
    };
}
export const IndexPageQuery = graphql`
    query AllDescriptors {
        allDescriptorsJson {
            nodes {
                value
            }
        }
        site {
            siteMetadata {
                author
            }
        }
    }
`;
//#endregion PageQuery

const IndexPage = (props: PageProps<IndexPageQueryResult>) => (
    <Layout>
        <SEO title='Home' />
        <h1>{props.data.site.siteMetadata.author}</h1>
        <DescriptorsList descriptors={props.data.allDescriptorsJson.nodes} />
    </Layout>
);

export default IndexPage;

//#region DescriptorsList
function DescriptorsList({ descriptors }: { descriptors: Site.Descriptor[] }) {
    return (
        <StyledDescriptorsList>
            {descriptors.map(({ value }) => {
                return <li key={value}>{value}</li>;
            })}
        </StyledDescriptorsList>
    );
}

const StyledDescriptorsList = styled.ul`
    list-style-type: none;
    margin: 0;

    li {
        display: inline-block;
        line-height: 1.8;
        font-size: 1.8rem;

        &:not(:last-of-type):after {
            content: '|';
            margin: 0 20px;
        }
    }
`;
//#endregion DescriptorsList
