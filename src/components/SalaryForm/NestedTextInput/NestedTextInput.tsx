import { Box, Button, Textfield } from '@Lib';
import React, { useCallback, useState } from 'react';

interface BudgetItem {
    name: string;
    value: number;
    children?: BudgetItem[];
}

interface Props {
    node: BudgetItem;
    onSubmit: (node: BudgetItem) => void;
}

const Budget: React.FC<Props> = ({ node, onSubmit }) => {
    const [values, setValues] = useState<BudgetItem>(node);

    const handleValueChange = (newValue: number, item: BudgetItem) => {
        const newValues = { ...values };
        const setValue = (item: BudgetItem, value: number) => {
            item.value = value;
            if (item.children) {
                item.children.forEach((child) => setValue(child, value));
            }
        };
        setValue(item, newValue);
        setValues(newValues);
    };

    const onSave = useCallback(() => {
        onSubmit(values);
    }, [onSubmit, values]);

    const renderBudgetItem = (item: BudgetItem) => {
        return (
            <Box key={item.name} flexWrap="wrap" gap="1rem">
                <Textfield
                    label={item.name}
                    value={item.value}
                    onChange={(e) => handleValueChange(+e.target.value, item)}
                    disabled={!!item.children}
                />
                {item.children && item.children.map(renderBudgetItem)}
            </Box>
        );
    };

    return (
        <Box flexDirection="column" gap="2rem" alignItems="start">
            {renderBudgetItem(values)}
            <Button onClick={onSave}>Save</Button>
        </Box>
    );
};

export default Budget;
