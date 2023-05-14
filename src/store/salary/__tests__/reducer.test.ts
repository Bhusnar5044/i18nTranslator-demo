import { getSalaryRequest } from '../actions';
import { initialState, salaryReducer } from '../reducer';

describe('notionReducer', () => {
    it('should GET_SALARY_REQUEST action', () => {
        expect(salaryReducer(initialState, getSalaryRequest())).toEqual({ ...initialState, isLoading: true });
    });
});
