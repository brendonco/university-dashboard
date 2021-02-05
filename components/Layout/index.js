import Head from 'next/head';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary';
import NavBar from '../NavBar';
import { Container, Main } from './layout-styled';

const Layout = ({ children }) => {
    return (
        <ErrorBoundary>
            <Container>
                <Head>
                    <title>Layout</title>
                </Head>
                <NavBar />
                <Main>{children}</Main>
            </Container>
        </ErrorBoundary>
    );
};

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default Layout;
