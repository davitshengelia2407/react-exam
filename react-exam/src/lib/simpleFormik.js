import { useCallback, useState } from "react";

export function useFormik({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }, []);

  const handleBlur = useCallback((event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  }, [onSubmit, validate, values]);

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
}
