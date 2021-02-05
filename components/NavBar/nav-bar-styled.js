import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.lightBlue};

    a {
        color: #fff;
        background: none;
        border: none;
        padding: 1rem 2rem;
        margin: 0;
        text-decoration: none;
    }
`;

export const List = styled.li`
    display: inline-block;
    padding: 1.25rem 3rem;
    background-color: ${(props) => (props.active ? props.theme.colors.navy : '')};
`;
