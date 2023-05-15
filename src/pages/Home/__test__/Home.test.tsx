import { renderWithStore } from '@test-utils';
import { Home } from '../Home';

describe('Home', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Home />);
        expect(container).toMatchSnapshot();
    });
});
