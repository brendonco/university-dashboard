import styled from 'styled-components';

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 6rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const CardLayout = styled.div`
    height: 200px;
    margin: 1rem;
    flex: 1;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    img {
        height: 1em;
    }
`;
