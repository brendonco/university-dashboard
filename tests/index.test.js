import { render, screen } from '@testing-library/react';

import App from '../pages/index';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: ''
        };
    },
    withRouter: (component) => {
        component.defaultProps = {
            ...component.defaultProps,
            router: { pathname: '/' }
        };
        return component;
    }
}));

describe('App', () => {
    it('renders Home without crashing', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', { name: 'Welcome to University Dashboard' })
        ).toBeInTheDocument();
    });
});
