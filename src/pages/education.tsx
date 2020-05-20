import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

type EducationNode = {
    id: string;
    degree: string;
    program: string;
    universityName: string;
    yearCompleted: string[];
};

interface IWorkQuery {
    allEducationJson: {
        nodes: EducationNode[];
    };
}

export default function Work() {
    const {
        allEducationJson: { nodes },
    } = useStaticQuery<IWorkQuery>(graphql`
        query {
            allEducationJson {
                nodes {
                    id
                    degree
                    program
                    universityName
                    yearCompleted
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title='Education' />
            <h1>Education</h1>

            <StyledUL>
                {nodes.map((node) => (
                    <li key={node.id}>
                        <h3>
                            {node.degree} {node.program}
                        </h3>
                        ,{' '}
                        <span>
                            {node.yearCompleted}, {node.universityName}
                        </span>
                    </li>
                ))}
            </StyledUL>
        </Layout>
    );
}

const StyledUL = styled.ul`
    h3 {
        color: var(--secondary-color);
        display: inline;
    }
`;
