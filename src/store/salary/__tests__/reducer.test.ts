import { generateSankeyData } from '@utils';
import * as salary from '@utils/mockData/salary.json';
import { editSalary, getSalaryRequest, getSalarySuccess } from '../actions';
import { initialState, salaryReducer } from '../reducer';

describe('notionReducer', () => {
    it('should GET_SALARY_REQUEST action', () => {
        expect(salaryReducer(initialState, getSalaryRequest())).toEqual({ ...initialState, isLoading: true });
    });

    it('should GET_SALARY_SUCCESS action', () => {
        expect(salaryReducer(initialState, getSalarySuccess(salary))).toEqual({
            ...initialState,
            isLoading: false,
            expenditure: salary,
            sankeyData: generateSankeyData(salary),
        });
    });

    it('should EDIT_SALARY action', () => {
        expect(salaryReducer(initialState, editSalary({ ...salary, value: 900000 }))).toEqual({
            ...initialState,
            isLoading: false,
            expenditure: { ...salary, value: 900000 },
            sankeyData: generateSankeyData({ ...salary, value: 900000 }),
        });
    });
});
