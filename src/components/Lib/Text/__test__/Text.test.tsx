import { render, screen } from '@test-utils';
import { Text } from '../Text';

describe('Text', () => {
    it('should render properly', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with content provided', () => {
        render(<Text>Dummy Text</Text>);
        expect(screen.getByText(/Dummy Text/i)).toBeInTheDocument();
    });

    it('should render properly with content provided', () => {
        render(<Text>Dummy Text</Text>);
        expect(screen.getByText(/Dummy Text/i)).toBeInTheDocument();
    });

    it('should render properly with provided style props', () => {
        render(
            <Text textColor="red" textAlign="center">
                Dummy Text
            </Text>,
        );
        expect(screen.getByText('Dummy Text')).toHaveStyleRule('color', 'red', 'text-align', 'center');
    });
});
