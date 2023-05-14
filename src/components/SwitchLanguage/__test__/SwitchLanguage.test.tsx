import { render } from '@test-utils';
import { SwitchLanguage } from '../SwitchLanguage';

describe('SwitchLanguage', () => {
    it('should render properly', () => {
        const { container } = render(<SwitchLanguage />);
        expect(container).toMatchSnapshot();
    });
});
