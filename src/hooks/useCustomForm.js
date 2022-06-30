import { useForm, Controller } from 'react-hook-form';
import { Button } from 'components/UI/Button/Button';
import {
  Input,
  Error,
  Label,
  Form,
} from 'components/ContactsForm/ContactsForm.styled';
import { useCallback, useEffect } from 'react';

const useCustomForm = defaultValues => {
  const {
    reset,
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const hasErrors = Object.keys(errors).length > 0;

  // Focus first error field
  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const Field = useCallback(
    ({ label, ac, pattern, placeholder, type = 'text' }) => {
      const name = label.toLowerCase().split('-').join('');

      return (
        <>
          <Label htmlFor={name}>{label}</Label>
          <Controller
            name={name}
            control={control}
            rules={{
              required: 'This is required.',
              maxLength: {
                value: name === 'email' ? 40 : 20,
                message: '20 characters max.',
              },
              minLength: {
                value: name === 'password' ? 7 : 1,
                message: 'Password shall be 7 characters or more.',
              },
              pattern,
            }}
            render={({ field }) => (
              <Input
                {...field}
                autoComplete={ac ? 'on' : 'off'}
                type={type}
                id={name}
                placeholder={placeholder}
              />
            )}
          />

          {errors[name] && <Error>{errors[name].message}</Error>}
        </>
      );
    },
    [control, errors]
  );

  const Submit = useCallback(
    ({ isLoading = false, label = '' }) => (
      <Button
        type="submit"
        disabled={isLoading || hasErrors}
        width="100%"
        mt={3}
      >
        {label}
      </Button>
    ),
    [hasErrors]
  );

  return { reset, handleSubmit, Field, Submit, Form };
};

export default useCustomForm;
