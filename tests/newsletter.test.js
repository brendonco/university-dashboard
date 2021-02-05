import { render, screen } from '@testing-library/react';

import App from '../pages/newsletter';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/newsletter',
            pathname: '',
            query: '',
            asPath: ''
        };
    },
    withRouter: (component) => {
        component.defaultProps = {
            ...component.defaultProps,
            router: { pathname: '/newsletter' }
        };
        return component;
    }
}));

describe('App', () => {
    it('renders Newsletter without crashing', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument();
    });
});
