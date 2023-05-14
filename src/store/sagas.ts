import { all } from 'redux-saga/effects';
import { watchSalary } from './salary';

export function* rootSaga(): Generator {
    yield all([watchSalary()]);
}
