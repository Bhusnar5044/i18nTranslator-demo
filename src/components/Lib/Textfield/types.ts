import { ChangeEvent } from 'react';

export type Props = {
    label: string;
    name?: string;
    value: any;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
};
