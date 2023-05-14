import { render, screen } from '@test-utils';
import { ContainerLoader } from '../ContainerLoader';

describe('ContainerLoader', () => {
    it('should render properly', () => {
        const { container } = render(<ContainerLoader />);
        expect(container).toMatchSnapshot();
        expect(screen.getByTitle('loader')).toBeInTheDocument();
    });
});
