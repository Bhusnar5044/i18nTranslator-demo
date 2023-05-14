import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { saveState } from '@utils';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as salaryInitialState, salaryReducer } from './salary';

export const initialState = {
    salary: salaryInitialState,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = () => [sagaMiddleware];

const rootReducer = combineReducers({ salary: salaryReducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware,
});

store.subscribe(() => {
    saveState({
        ...store.getState(),
    });
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
