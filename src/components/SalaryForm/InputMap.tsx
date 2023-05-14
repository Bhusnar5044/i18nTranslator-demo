import { Box, Button, Textfield } from '@Lib';
import React, { useState } from 'react';

interface Node {
    name: string;
    value: number;
    children?: Node[];
}

interface Props {
    node: Node;
    onUpdateNode: (node: Node) => void;
    nested?: boolean;
}

const NodeTextInput: React.FC<Props> = ({ node, onUpdateNode, nested }) => {
    const [localNode, setLocalNode] = useState(node);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalNode((prev) => ({ ...prev, name: e.target.value }));
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalNode((prev) => ({ ...prev, value: parseInt(e.target.value) }));
    };

    const handleChildUpdate = (childIndex: number, updatedChild: Node) => {
        setLocalNode((prev) => {
            const updatedChildren = [...prev.children!];
            updatedChildren[childIndex] = updatedChild;
            return { ...prev, children: updatedChildren };
        });
    };

    const handleAddChild = () => {
        setLocalNode((prev) => ({
            ...prev,
            children: [...prev.children!, { name: '', value: 0 }],
        }));
    };

    const handleRemoveChild = (childIndex: number) => {
        setLocalNode((prev) => {
            const updatedChildren = [...prev.children!];
            updatedChildren.splice(childIndex, 1);
            return { ...prev, children: updatedChildren };
        });
    };

    const handleSave = () => {
        onUpdateNode(localNode);
    };

    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap="1rem">
            <Box display="flex" flexDirection="row" gap="1rem">
                <Textfield label="name" value={localNode.name} onChange={handleNameChange} />
                <Textfield
                    //  type="number"
                    label="Value"
                    value={localNode.value}
                    onChange={handleValueChange}
                />
            </Box>
            {localNode.children?.map((child, index) => (
                <Box display="flex" flexDirection="column" gap="3rem" key={index}>
                    <NodeTextInput
                        node={child}
                        onUpdateNode={(updatedChild) => handleChildUpdate(index, updatedChild)}
                        nested
                    />
                    {/* <button onClick={() => handleRemoveChild(index)}>Remove</button>
                    <br /> */}
                </Box>
            ))}
            {/* <button onClick={handleAddChild}>Add Child</button> */}
            {!nested && <Button onClick={handleSave}>Save</Button>}
        </Box>
    );
};

export default NodeTextInput;
