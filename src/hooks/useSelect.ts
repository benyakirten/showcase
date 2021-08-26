import { useState } from 'react';

const useSelect: SelectHook = <T extends string>(defaultVal: T, options: T[]) => {
    const _defaultVal = options.find(o => o === defaultVal);
    if (!_defaultVal) throw new Error('Default value not valid option');
    const [value, _setValue] = useState<T>(_defaultVal);

    const setValue = (newVal: T) => {
        const _newVal = options.find(o => o === newVal);
        if (!_newVal) throw new Error('New value not valid option');
        _setValue(_newVal);
    }
    return [value, setValue];
}

export default useSelect;