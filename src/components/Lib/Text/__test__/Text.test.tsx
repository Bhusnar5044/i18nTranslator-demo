import { render } from '@test-utils';
import { Text } from '../Text';

describe('Text', () => {
    it('should render properly', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });
});
