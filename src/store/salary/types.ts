import { Action } from 'redux';

export enum SalaryActionTypes {
    GET_SALARY_REQUEST = '@salary/GET_SALARY_REQUEST',
    GET_SALARY_SUCCESS = '@salary/GET_SALARY_SUCCESS',
    GET_SALARY_FAILED = '@salary/GET_SALARY_FAILED',
    EDIT_SALARY = '@salary/EDIT_SALARY',
}

export interface SankeyNode {
    name?: string;
    value?: number;
    children?: SankeyNode[];
}

export interface SankeyLink {
    source: string;
    target: string;
    value: number;
}

export type SankeyData = {
    nodes: SankeyNode[];
    links: SankeyLink[];
};
export interface SalaryState {
    isLoading: boolean;
    expenditure: SankeyNode;
    sankeyData: SankeyData;
}

export interface GetSalaryRequest extends Action {
    type: typeof SalaryActionTypes.GET_SALARY_REQUEST;
}

export interface GetSalarySuccess extends Action {
    payload: SankeyNode;
    type: typeof SalaryActionTypes.GET_SALARY_SUCCESS;
}

export interface GetSalaryFailed extends Action {
    type: typeof SalaryActionTypes.GET_SALARY_FAILED;
}

export interface EditSalary extends Action {
    payload: SankeyNode;
    type: typeof SalaryActionTypes.EDIT_SALARY;
}

export type SalaryActions = GetSalaryRequest | GetSalarySuccess | GetSalaryFailed | EditSalary;
