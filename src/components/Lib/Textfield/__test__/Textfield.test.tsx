import { render } from '@test-utils';
import { Textfield } from '../Textfield';

describe('Textfield', () => {
    it('should render properly', () => {
        const { container } = render(<Textfield />);
        expect(container).toMatchSnapshot();
    });
});
