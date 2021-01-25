import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues, callback) => {
    const [vales, setValues] = useLocalStorage(key, false);

    return [vales,setValues];
}