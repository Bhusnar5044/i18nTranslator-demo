import { fireEvent, render, screen } from '@test-utils';
import { SwitchLanguage } from '../SwitchLanguage';

describe('SwitchLanguage', () => {
    it('should render properly', () => {
        const { container } = render(<SwitchLanguage />);
        expect(container).toMatchSnapshot();
    });

    it('should render with i18n options', () => {
        render(<SwitchLanguage />);
        const select = screen.getByTitle('single-select');
        expect(select).toBeInTheDocument();
        fireEvent.click(select);
        expect(screen.getByText('Switch Language')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('French')).toBeInTheDocument();
    });

    it('should select any language on click on option', () => {
        render(<SwitchLanguage />);
        const select = screen.getByTitle('single-select');
        expect(select).toBeInTheDocument();
        fireEvent.click(select);
        const option = screen.getByText('French');
        expect(option).toHaveValue('fr');
    });
});
