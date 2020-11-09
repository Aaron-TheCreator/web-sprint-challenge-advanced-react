import { useState } from 'react';

export const useLocalStaorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState( () => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue))
    })
}