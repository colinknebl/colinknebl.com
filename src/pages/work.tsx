import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { JobDetails } from '../components/job_details';
import styled from 'styled-components';

interface IWorkProps {
    children?: JSX.Element[];
}

type WorkNode = {
    id: string;
    title: string;
    company: string;
    time: {
        to: string;
        from: string;
    };
    description: string;
    duties: string[];
    partTime: boolean;
};

interface IWorkQuery {
    allWorkJson: {
        nodes: WorkNode[];
    };
}

export default function Work({ children }: IWorkProps) {
    const {
        allWorkJson: { nodes },
    } = useStaticQuery<IWorkQuery>(graphql`
        query {
            allWorkJson {
                nodes {
                    id
                    title
                    company
                    time {
                        from
                        to
                    }
                    description
                    duties
                    partTime
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title='Work' />
            <h1>Work</h1>
            <p>(Select for details)</p>

            <StyledWorkList>
                {nodes.map((node, i) => (
                    <li key={node.id}>
                        <JobDetails
                            company={node.company}
                            title={node.title}
                            time={node.time}
                            partTime={node.partTime}
                            description={node.description}
                            duties={node.duties}
                            open={i === 0}
                        />
                    </li>
                ))}
            </StyledWorkList>
        </Layout>
    );
}

const StyledWorkList = styled.ul`
    list-style-type: none;
    margin: 0;

    & > li {
        margin-bottom: calc(1.45rem * 1.5);
    }
`;
