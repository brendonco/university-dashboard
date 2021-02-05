import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../assets/default-theme';

const AllTheProviders = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AllTheProviders.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.node]).isRequired
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
