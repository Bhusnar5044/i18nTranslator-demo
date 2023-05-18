import { Box, Button, Textfield } from '@Lib';
import { SankeyNode } from '@store/salary';
import React, { useCallback, useState } from 'react';

interface Props {
    node: SankeyNode;
    onSubmit: (node: SankeyNode) => void;
}

const Budget: React.FC<Props> = ({ node, onSubmit }) => {
    const [values, setValues] = useState<SankeyNode>(node);

    const handleValueChange = (newValue: number, item: SankeyNode) => {
        const newValues = { ...values };
        const setValue = (item: SankeyNode, value: number) => {
            item.value = value;
            if (item?.children) {
                item.children.forEach((child) => setValue(child, value));
            }
        };
        setValue(item, newValue);
        setValues(newValues);
    };

    const onSave = useCallback(() => {
        onSubmit(values);
    }, [onSubmit, values]);

    const renderBudgetItem = (item: SankeyNode) => {
        return (
            <Box key={item?.name} flexWrap="wrap" gap="1rem">
                <Textfield
                    type="text"
                    name={item?.name || ''}
                    placeholder={`Enter ${item?.name || ''}`}
                    label={item?.name || ''}
                    value={item?.value}
                    onChange={(e) => handleValueChange(+e.target.value, item)}
                    disabled={!!item?.children}
                />
                {item?.children && item.children.map(renderBudgetItem)}
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
