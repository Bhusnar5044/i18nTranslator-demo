import {
    EditSalary,
    GetSalaryFailed,
    GetSalaryRequest,
    GetSalarySuccess,
    SalaryActionTypes,
    SankeyNode,
} from './types';

export const getSalaryRequest = (): GetSalaryRequest => ({
    type: SalaryActionTypes.GET_SALARY_REQUEST,
});

export const getSalarySuccess = (payload: SankeyNode): GetSalarySuccess => ({
    payload,
    type: SalaryActionTypes.GET_SALARY_SUCCESS,
});

export const getSalaryFailed = (): GetSalaryFailed => ({
    type: SalaryActionTypes.GET_SALARY_FAILED,
});

export const editSalary = (payload: SankeyNode): EditSalary => ({
    payload,
    type: SalaryActionTypes.EDIT_SALARY,
});
