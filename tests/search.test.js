import { render, screen } from '@testing-library/react';

import App from '../pages/search';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/search',
            pathname: '',
            query: '',
            asPath: ''
        };
    },
    withRouter: (component) => {
        component.defaultProps = {
            ...component.defaultProps,
            router: { pathname: '/search' }
        };
        return component;
    }
}));

describe('App', () => {
    it('renders Search without crashing', () => {
        render(<App />);
        expect(screen.getByPlaceholderText(/search university/i)).toBeInTheDocument();
    });
});
