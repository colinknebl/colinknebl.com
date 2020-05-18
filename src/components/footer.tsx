import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export function Footer() {
    const {
        site: {
            siteMetadata: { author },
        },
    } = useStaticQuery<Site.MetaDataQuery>(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer>
            © {new Date().getFullYear()} {author}
        </footer>
    );
}
