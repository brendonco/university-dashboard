import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../assets/default-theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica;
    font-size: 1em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

App.defaultProps = {
    Component: null,
    pageProps: {}
};

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    pageProps: PropTypes.objectOf(PropTypes.any)
};
