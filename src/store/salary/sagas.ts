import { urls } from '@constant/urls';
import { fetch } from '@utils';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SalaryActionTypes, getSalaryFailed, getSalarySuccess } from '.';

function* fetchSalarySagaSaga() {
    const { response, error } = yield call(fetch, {
        url: urls.salary,
        method: 'GET',
    });

    if (response?.data?.length) {
        yield put(getSalarySuccess(response.data[0]));
    }
    if (error) {
        console.log(error);
        yield put(getSalaryFailed());
    }
}

export function* watchSalary() {
    yield all([takeLatest(SalaryActionTypes.GET_SALARY_REQUEST, fetchSalarySagaSaga)]);
}
