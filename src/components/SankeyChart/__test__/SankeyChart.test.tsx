import { initialState } from '@store';
import { render } from '@test-utils';
import { generateSankeyData } from '@utils';
import * as salary from '@utils/mockData/salary.json';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import { SankeyChart } from '../SankeyChart';

const mockStore = reduxMockStore();

const renderer = (isLoading = false) => {
    const store = mockStore({
            ...initialState,
            salary: {
                ...initialState.salary,
                isLoading,
                sankeyData: generateSankeyData(salary),
            },
        }),
        utils = render(
            <Provider store={store}>
                <SankeyChart />
            </Provider>,
        );

    return { store, ...utils };
};
describe('SankeyChart', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });
});
