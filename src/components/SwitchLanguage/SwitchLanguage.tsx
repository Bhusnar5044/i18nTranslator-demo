import { SingleSelect } from '@components/Lib/SingleSelect/SingleSelect';
import { ChangeEvent, FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

// const availableLocales = Object.keys(i18next.services.resourceStore.data);

// const options: Options = availableLocales.map((languageCode) => {
//     const nameGenerator = new Intl.DisplayNames(languageCode, { type: 'language' });
//     const displayName = nameGenerator.of(languageCode) || '';
//     return { value: languageCode, label: displayName };
// });

const formattedOptions = [
    { value: '', label: 'Switch Language', disabled: true },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'fr', label: 'Spanish' },
];

export const SwitchLanguage: FC = memo(() => {
    const [value, setValue] = useState('');
    const { i18n } = useTranslation();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        i18n.changeLanguage(e.target.value);
    };
    return <SingleSelect onChange={handleChange} value={value} options={formattedOptions} disableLabel />;
});

SwitchLanguage.displayName = 'SwitchLanguage';
