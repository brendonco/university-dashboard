import { screen } from '@testing-library/react';

import App, { downloadJSONFile } from '../pages/newsletter';
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

    test('downloadJSONFile', () => {
        const anchorMocked = { href: '', click: jest.fn() };
        const createElementSpyOn = jest
            .spyOn(document, 'createElement')
            .mockReturnValueOnce(anchorMocked);
        const getElementByIdSpyOn = jest
            .spyOn(document, 'getElementById')
            .mockReturnValueOnce({ value: 'my@email.com' });
        global.URL.createObjectURL = jest.fn();

        document.body.appendChild = jest.fn();
        document.body.removeChild = jest.fn();

        downloadJSONFile();

        expect(createElementSpyOn).toBeCalledWith('a');
        expect(document.body.appendChild).toBeCalledWith(anchorMocked);
        expect(anchorMocked.click).toBeCalledTimes(1);
        expect(document.body.removeChild).toBeCalledWith(anchorMocked);
    });
});
