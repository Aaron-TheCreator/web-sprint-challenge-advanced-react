import { useLocalStorage } from "./useLocalStorage";

// write your custom hook here to control your checkout form

// replacement for following logic needed in this hook

// const CheckoutForm = (props) => {
// const CheckoutForm = (props) => {
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [values, setValues] = useState(initialValue);

//   const handleChanges = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccessMessage(true);
//   };

export const useForm = (key, initialValues, callback) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        callback();
    };

    return [values, handleChanges, handleSubmit];
};
