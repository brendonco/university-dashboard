import '@testing-library/jest-dom/extend-expect';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Search from '../pages/search';
import { server } from './mocks/server';
import { render } from './test-utils';

global.fetch = require('node-fetch');

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

const setup = async () => {
    render(<Search />);
    await userEvent.type(screen.getByLabelText(/search-uni-input/i), 'jakarta');
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
    setup();

    await waitFor(() => {
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
});
