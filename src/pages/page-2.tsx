// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = (props: PageProps<Site.MetaDataQuery>) => {
    const { author, title } = props.data.site.siteMetadata;
    return (
        <Layout>
            <SEO title='Page two' />
            <h1>
                Hi from the second page :: {title} :: {author}
            </h1>
            <p>Welcome to page 2 ({props.path})</p>
            <Link to='/'>Go back to the homepage</Link>
        </Layout>
    );
};

export default SecondPage;

export const query = graphql`
    query GetTitle {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`;
