import { generateSankeyData } from '@utils';
import { Reducer } from 'react';
import { SalaryActionTypes, SalaryActions, SalaryState } from './types';

export const initialState: SalaryState = {
    isLoading: false,
    expenditure: {},
    sankeyData: { nodes: [], links: [] },
};

export const salaryReducer: Reducer<SalaryState, SalaryActions> = (state = initialState, action) => {
    switch (action.type) {
        case SalaryActionTypes.GET_SALARY_REQUEST:
            return { ...state, isLoading: true };
        case SalaryActionTypes.GET_SALARY_SUCCESS:
        case SalaryActionTypes.EDIT_SALARY:
        case SalaryActionTypes.DELETE_SALARY:
            return {
                ...state,
                isLoading: false,
                expenditure: action.payload,
                sankeyData: generateSankeyData(action.payload),
            };
        case SalaryActionTypes.GET_SALARY_FAILED:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};
