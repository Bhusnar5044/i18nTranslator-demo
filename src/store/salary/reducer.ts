import { generateSankeyData } from '@utils';
import { SalaryActionTypes, SalaryActions, SalaryState } from './types';

export const initialState: SalaryState = {
    isLoading: false,
    expenditure: {},
    sankeyData: { nodes: [], links: [] },
};

export const salaryReducer = (state: SalaryState = initialState, action: SalaryActions): SalaryState => {
    switch (action.type) {
        case SalaryActionTypes.GET_SALARY_REQUEST:
            return { ...state, isLoading: true };
        case SalaryActionTypes.GET_SALARY_SUCCESS:
        case SalaryActionTypes.EDIT_SALARY:
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
