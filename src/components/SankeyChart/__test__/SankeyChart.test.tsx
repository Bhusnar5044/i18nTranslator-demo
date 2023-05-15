import { renderWithStore } from '@test-utils';
import { SankeyChart } from '../SankeyChart';

describe('SankeyChart', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<SankeyChart />);
        expect(container).toMatchSnapshot();
    });
});
