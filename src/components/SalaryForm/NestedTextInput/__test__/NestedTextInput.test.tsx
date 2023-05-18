import { fireEvent, render, screen } from '@test-utils';
import * as salary from '@utils/mockData/salary.json';
import NestedTextInput from '../NestedTextInput';

const onSubmit = jest.fn();
const renderer = () => {
    return render(<NestedTextInput node={salary} onSubmit={onSubmit} />);
};

describe('SalaryForm', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should should trigger onSubmit Event on click of save button', () => {
        renderer();
        const button = screen.getByRole('button', { name: 'Save' });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onSubmit).toBeCalled();
    });

    it('should should render all the nested TextFields', () => {
        renderer();
        expect(screen.getByText(salary.name)).toBeInTheDocument();
        expect(screen.getByText(salary.children[0].name)).toBeInTheDocument();
        expect(screen.getByText(salary.children[0].children[0].name)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(`Enter ${salary.name}`)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(`Enter ${salary.children[0].name}`)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(`Enter ${salary.children[0].children[0].name}`)).toBeInTheDocument();
    });

    it('should should trigger onSubmit Event with changed data', () => {
        renderer();
        const input = screen.getByPlaceholderText(`Enter ${salary.children[0].name}`);
        fireEvent.change(input, { target: { value: '9000' } });
        expect(input).toHaveValue('9000');
        const button = screen.getByRole('button', { name: 'Save' });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onSubmit).toBeCalledWith({ ...salary, children: [{ ...salary.children[0], value: 9000 }] });
    });
});
