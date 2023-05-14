import { Box, Text } from '@Lib';
import ContainerLoader from '@components/ContainerLoader';
import { AppState, useAppSelector } from '@store';
import { editSalary, getSalaryRequest } from '@store/salary';
import { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NestedTextInput from './NestedTextInput/NestedTextInput';

export const SalaryForm: FC = memo(() => {
    const dispatch = useDispatch();
    const { isLoading, expenditure } = useAppSelector((state: AppState) => state.salary);
    const onSubmit = useCallback(
        (node: any) => {
            console.log({ node });
            dispatch(editSalary(node));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(getSalaryRequest());
    }, [dispatch]);

    return (
        <Box flexDirection="column" gap="3rem">
            <Text textVariant="h3">Expenditure Details</Text>
            {isLoading && <ContainerLoader />}
            {!isLoading && <NestedTextInput node={expenditure} onSubmit={onSubmit} />}
        </Box>
    );
});

SalaryForm.displayName = 'SalaryForm';
