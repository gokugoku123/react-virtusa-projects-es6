import { render, screen, waitFor } from '@testing-library/react';
import Modal from '../components/Modal/Modal';

describe('Testing Modal Component', () => {
    test('testcase1', () => {

        const divRoot = document.createElement('div')
        divRoot.setAttribute('id', 'root');
        const divPortal = document.createElement('div')
        divPortal.setAttribute('id', 'portal');

        document.body.appendChild(divRoot);
        document.body.appendChild(divPortal);
        
        const { rerender } = render(<Modal setModal={jest.fn()} open={true} addTask={jest.fn()} />, divRoot)

        let overlay = screen.getByTestId('overlay');
        let modalContaineer = screen.getByTestId('modalContainer');

        rerender(<Modal open={false} />);

        overlay = screen.queryByTestId('overlay');
        modalContaineer = screen.queryByTestId('modalContainer');

        expect(overlay).toBeFalsy();
        expect(modalContaineer).toBeFalsy();

    })
})

