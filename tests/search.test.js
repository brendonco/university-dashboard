import { fireEvent, screen } from '@testing-library/react';

import App from '../pages/search';
import { render } from './test-utils';

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

const setup = () => {
    const utils = render(<App />);
    const input = utils.getByLabelText('search-uni-input');
    return {
        input,
        ...utils
    };
};

describe('App', () => {
    test('renders Search without crashing', () => {
        render(<App />);
        expect(screen.getByPlaceholderText(/search university/i)).toBeInTheDocument();
    });

    test('It should allow user to input', () => {
        const { input } = setup();

        fireEvent.change(input, { target: { value: 'jakarta' } });
        expect(input.value).toBe('jakarta');
    });
});
