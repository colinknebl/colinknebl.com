import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

type NavLink = {
    name: string;
    to: string;
};

const links: NavLink[] = [
    {
        name: 'home',
        to: '/',
    },
    {
        name: 'about',
        to: '/about',
    },
    {
        name: 'skills',
        to: '/skills',
    },
    {
        name: 'work',
        to: '/work',
    },
    {
        name: 'education',
        to: '/education',
    },
    {
        name: 'social',
        to: '/social',
    },
    {
        name: 'uses',
        to: '/uses',
    },
];

export function Navigation() {
    const data = useStaticQuery(graphql`
        {
            sitePage {
                id
                path
            }
        }
    `);

    return (
        <StyledNavigation>
            <ul>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            className='link'
                            to={link.to}
                            activeClassName='active'
                        >
                            /{link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledNavigation>
    );
}

const StyledNavigation = styled.nav`
    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    @media screen and (max-width: 580px) {
        ul {
            flex-direction: column;
        }
    }

    li {
        margin: 0;

        &:not(:last-of-type) {
            margin-right: 10px;
        }
    }

    .link {
        text-decoration: none;
        color: var(--secondary-color);

        &.active {
            color: var(--primary-color);
        }
    }
`;
