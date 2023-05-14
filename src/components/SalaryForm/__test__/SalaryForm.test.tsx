import { render } from '@test-utils';
import { SalaryForm } from '../SalaryForm';

describe('SalaryForm', () => {
    it('should render properly', () => {
        const { container } = render(<SalaryForm />);
        expect(container).toMatchSnapshot();
    });
});
