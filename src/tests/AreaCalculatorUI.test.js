
import { render, screen, cleanup, fireEvent, queryByTestId } from '@testing-library/react';
import AreaCalculator from '../components/AreaCalculator/AreaCalculator';
import '@testing-library/jest-dom';
import { getAreaOfCircle } from '../components/AreaCalculator/utility';
describe('Testing Area Calculator UI', () => {

    test('testcase1', () => {
        render(<AreaCalculator />);

        const inputEl = screen.getByTestId('input');

        expect(inputEl).toBeInTheDocument();
        const firstTimeAnswer = screen.queryByTestId('result');
        expect(firstTimeAnswer).toBeNull();

        fireEvent.change(inputEl, {target : {value : 1}});
        const answer = screen.queryByTestId('result');
        expect(answer.textContent).toBe(`The area of circle with radius ${1} is ${getAreaOfCircle(1)}`)

        fireEvent.change(inputEl, {target : {value : -24}});
        expect(answer.textContent).toBe(`The area of circle with radius ${-24} is ${getAreaOfCircle(-24)}`)

        fireEvent.change(inputEl, {target : {value : 943}});
        expect(answer.textContent).toBe(`The area of circle with radius ${943} is ${getAreaOfCircle(943)}`)

        fireEvent.change(inputEl, {target : {value : 0}});
        expect(answer.textContent).toBe(`The area of circle with radius ${0} is ${getAreaOfCircle(0)}`)

        fireEvent.change(inputEl, {target : {value : 'res'}});
        expect(screen.queryByTestId('result')).toBeNull();
    })

})