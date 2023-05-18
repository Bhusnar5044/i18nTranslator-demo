import { initialState } from '@store';
import { getSalaryRequest } from '@store/salary';
import { fireEvent, render, screen } from '@test-utils';
import * as salary from '@utils/mockData/salary.json';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import { SalaryForm } from '../SalaryForm';

const mockStore = reduxMockStore();

const renderer = (isLoading = false) => {
    const store = mockStore({
            ...initialState,
            salary: {
                ...initialState.salary,
                isLoading,
                expenditure: salary,
            },
        }),
        utils = render(
            <Provider store={store}>
                <SalaryForm />
            </Provider>,
        );

    return { store, ...utils };
};

describe('SalaryForm', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should show loader if isLoading is true', () => {
        renderer(true);
        expect(screen.getByTitle('loader')).toBeInTheDocument();
    });

    it('should dispatch fetch request action', () => {
        const { store } = renderer(true);
        expect(store.getActions()).toStrictEqual([getSalaryRequest()]);
    });

    it('should should trigger onSubmit method with changed data', () => {
        renderer();
        const input = screen.getByPlaceholderText(`Enter ${salary.children[0].name}`);
        fireEvent.change(input, { target: { value: '9000' } });
        expect(input).toHaveValue('9000');
        const button = screen.getByRole('button', { name: 'Save' });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
});
