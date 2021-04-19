import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

describe('Testing Browser Navigation', () => {

    test('testcase1', () => {
        const { debug } = render(<App />);

        expect(screen.queryByTestId('component1')).toBeFalsy();
        expect(screen.queryByTestId('component2')).toBeFalsy();
        expect(window.location.pathname).toBe("/");

        const linkhome = screen.getByTestId('linkhome');
        const linkcomponent1 = screen.getByTestId('linkcomponent1');
        const linkcomponent2 = screen.getByTestId('linkcomponent2');

    })

    test('testcase1', () => {
        const { debug } = render(<App />);

        const linkhome = screen.getByTestId('linkhome');
        const linkcomponent1 = screen.getByTestId('linkcomponent1');
        const linkcomponent2 = screen.getByTestId('linkcomponent2');

        fireEvent.click(linkcomponent1);
        expect(screen.queryByTestId('component1')).toBeTruthy();
        expect(window.location.pathname).toBe("/component1");


    })

    test('testcase3', () => {
        const { debug } = render(<App />);

        const linkhome = screen.getByTestId('linkhome');
        const linkcomponent1 = screen.getByTestId('linkcomponent1');
        const linkcomponent2 = screen.getByTestId('linkcomponent2');

        fireEvent.click(linkcomponent2);
        expect(screen.queryByTestId('component2')).toBeTruthy();
        expect(window.location.pathname).toBe("/component2");

    });

    test('testcase4', () => {
        const { debug } = render(<App />);

        const linkhome = screen.getByTestId('linkhome');
        const linkcomponent1 = screen.getByTestId('linkcomponent1');
        const linkcomponent2 = screen.getByTestId('linkcomponent2');

        window.history.pushState({}, '', '/component2');
        window.dispatchEvent(new PopStateEvent("popstate"));

        fireEvent.click(linkcomponent2);
        expect(screen.queryByTestId('component2')).toBeTruthy();
        expect(window.location.pathname).toBe("/component2");

    })

})