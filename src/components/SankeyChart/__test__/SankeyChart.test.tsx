import { render } from '@test-utils';
import { SankeyChart } from '../SankeyChart';

describe('SankeyChart', () => {
    it('should render properly', () => {
        const { container } = render(<SankeyChart />);
        expect(container).toMatchSnapshot();
    });
});
