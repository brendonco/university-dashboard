import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        position: absolute;
        top: 2em;
        text-align: center;
        font: inherit;
        border: 6px solid #a3d8d6;
        padding: 0.8125em 0.75em;
        font-size: 1em;
        box-shadow: 0 1px 1px #ddd;
        width: 24em;
        outline: none;
        display: block;
        color: #788585;
        margin: 0 auto 20px;
    }

    button {
        position: absolute;
        top: 6em;
        margin: 1.875em;
        font-size: 1em;
        height: 2em;
        width: 15.625em;
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
        background: #a3d8d6;
        cursor: pointer;
    }
`;
