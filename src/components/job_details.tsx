import React from 'react';
import styled from 'styled-components';

export function JobDetails({
    title,
    company,
    time,
    partTime,
    description,
    duties,
    open,
}: {
    title: string;
    company: string;
    time: {
        to: string;
        from: string;
    };
    partTime: boolean;
    description: string;
    duties?: string[];
    open: boolean;
}) {
    return (
        <StyledJobDetails>
            <details {...(open ? { open: true } : {})}>
                <summary>
                    <h3>{title}</h3>
                    <span>, {company}</span>
                </summary>
                <p className='time'>
                    {time.from} - {time.to}
                    {partTime ? ' (Part Time)' : ''}
                </p>
                <p className='description'>{description}</p>
                {duties && <Duties duties={duties} />}
            </details>
        </StyledJobDetails>
    );
}

const StyledJobDetails = styled.div`
    margin-bottom: 1.45rem;

    details[open] summary {
        color: var(--primary-color);
    }

    summary {
        color: var(--secondary-color);

        h3 {
            display: inline;
        }

        span {
            color: whitesmoke;
        }
    }

    .time {
        margin-top: calc(1.45rem / 2);
    }
`;

function Duties({ duties }: { duties: string[] }) {
    return (
        <ul>
            {duties.map((duty, i) => (
                <li key={i}>{duty}</li>
            ))}
        </ul>
    );
}
