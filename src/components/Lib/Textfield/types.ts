import { ChangeEvent } from 'react';

export type Props = {
    label: string;
    name?: string;
    value: any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
};
