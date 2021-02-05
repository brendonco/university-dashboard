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
        padding: 13px 12px;
        font-size: 15px;
        box-shadow: 0 1px 1px #ddd;
        width: 384px;
        outline: none;
        display: block;
        color: #788585;
        margin: 0 auto 20px;
    }
`;
