import { SingleSelect } from '@components/Lib/SingleSelect/SingleSelect';
import { Options } from '@components/Lib/SingleSelect/types';
// import i18next from 'i18next';
import { ChangeEvent, FC, memo, useState } from 'react';

// const availableLocales = Object.keys(i18next.services.resourceStore.data);

const options: Options = [].map((languageCode) => {
    const nameGenerator = new Intl.DisplayNames(languageCode, { type: 'language' });
    const displayName = nameGenerator.of(languageCode) || '';
    return { value: languageCode, label: displayName };
});

const formattedOptions = [{ value: '', label: 'Switch Language', disabled: true }, ...options];

export const SwitchLanguage: FC = memo(() => {
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    return <SingleSelect onChange={handleChange} value={value} options={formattedOptions} disableLabel />;
});

SwitchLanguage.displayName = 'SwitchLanguage';
