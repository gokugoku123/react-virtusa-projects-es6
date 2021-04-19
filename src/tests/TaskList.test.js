import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TaskList from '../components/TaskList/TaskList';

describe('Testing TaskList Application', () => {

    test('testcase2', async () => {
        render(<TaskList />);

        const divPortal = document.createElement('div')
        divPortal.setAttribute('id', 'portal');

        document.body.appendChild(divPortal);

        const addTask = screen.getByTestId('add');

        fireEvent.click(addTask);

        const overlay = screen.getByTestId('overlay');
        const modalContainer = screen.getByTestId('modalContainer')
        const modalInput = screen.getByTestId('modalInput');

        fireEvent.click(overlay);

        expect(screen.queryByTestId('modalContainer')).toBeFalsy();
    });

    test('testcase3', async () => {
        render(<TaskList />);

        const divPortal = document.createElement('div')
        divPortal.setAttribute('id', 'portal');

        document.body.appendChild(divPortal);

        const addTask = screen.getByTestId('add');

        fireEvent.click(addTask);

        const overlay = screen.getByTestId('overlay');
        const modalContainer = screen.getByTestId('modalContainer')
        const modalInput = screen.getByTestId('modalInput');

        const modalForm = screen.getByTestId('modalForm');

        fireEvent.submit(modalForm, {
            target : [
                {value : 'Buy Milk'}
            ]
        });

        // fireEvent.submit(modalForm, {
        //     target : [
        //         {value : 'Buy Everything'}
        //     ]
        // });

        let notCompletedListItem = screen.getAllByTestId('notCompletedListItem');

        expect(notCompletedListItem[0].textContent).toBe('Buy Milk');

        const firstItem = notCompletedListItem[0];

        fireEvent.dragStart(firstItem, {
            target : {
                value : 'Buy Milk',
                listnumber : '1'
            }
        });

        const inprogressList = screen.getByTestId('inprogress');

        fireEvent.drop(inprogressList, {
            target : {
                name : 'inprogress',
            }
        })

        notCompletedListItem = screen.queryAllByTestId('notcompleted');
        const inProgressList = screen.queryAllByTestId('inprogress');

        expect(notCompletedListItem.length).toBe(0);
        expect(inProgressList.length).toBe(1);

        expect(screen.queryByTestId('modalContainer')).toBeFalsy();
    });

})