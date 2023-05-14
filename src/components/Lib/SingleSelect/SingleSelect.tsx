import { FC, memo } from 'react';
import { Box } from '..';
import { Option, Select } from './styled';
import { Props } from './types';

export const SingleSelect: FC<Props> = memo(({ options, onChange, value, disableLabel }) => {
    return (
        <Box gap="1rem">
            {!disableLabel && <label htmlFor="select2">Select2</label>}
            <Select title="single-select" value={value} onChange={onChange}>
                {options.map((option) => {
                    return (
                        <Option value={option.value} key={option.value} disabled={option.disabled}>
                            {option.label}
                        </Option>
                    );
                })}
            </Select>
        </Box>
    );
});

SingleSelect.displayName = 'SingleSelect';
