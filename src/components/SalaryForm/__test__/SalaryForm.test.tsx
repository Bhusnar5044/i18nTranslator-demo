import { renderWithStore } from '@test-utils';
import { SalaryForm } from '../SalaryForm';

describe('SalaryForm', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<SalaryForm />);
        expect(container).toMatchSnapshot();
    });
});
