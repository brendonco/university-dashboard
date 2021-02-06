import styled from 'styled-components';

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 730px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const CardLayout = styled.div`
    width: 100%;
    height: 200px;
    margin: 1rem;
    flex: 1 1 33.33%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: ${(props) => `1px solid ${props.theme.colors.charcoal}`};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    img {
        height: 1em;
    }
`;
