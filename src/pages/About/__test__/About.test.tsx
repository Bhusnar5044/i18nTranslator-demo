import { render } from '@test-utils';
import { About } from '../About';

describe('Home', () => {
    it('should render properly', () => {
        const { container } = render(<About />);
        expect(container).toMatchSnapshot();
    });
});
