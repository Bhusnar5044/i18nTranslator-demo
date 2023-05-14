import { render, screen } from '@test-utils';
import { Header } from '../Header';

describe('Header', () => {
    it('should render properly', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
