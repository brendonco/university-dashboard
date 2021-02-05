import { screen } from '@testing-library/react';

import App from '../pages/newsletter';
import { render } from './test-utils';

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
    test('renders Newsletter without crashing', () => {
        render(<App />);

        expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    });
});
