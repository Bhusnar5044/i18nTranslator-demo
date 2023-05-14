import { render } from '@test-utils';
import { Home } from '../Home';

describe('Home', () => {
    it('should render properly', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
