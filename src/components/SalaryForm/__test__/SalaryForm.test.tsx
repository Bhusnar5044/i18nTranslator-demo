import { render, screen } from '@test-utils';
import { SalaryForm } from '../SalaryForm';

describe('SalaryForm', () => {
    it('should render properly', () => {
        const { container } = render(<SalaryForm />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/Expenditure Details/i)).toBeInTheDocument();
    });
});
