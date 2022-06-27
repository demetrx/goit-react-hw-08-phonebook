import { useState } from 'react';
import { useLoginMutation } from 'services/contacts-api';

const SignUpView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading }] = useLoginMutation();

  const handleFieldChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error(name + 'field is not supported!');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSignUp = e => {
    e.preventDefault();
    login({ email, password });
    resetForm();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <p>E-mail</p>
          <input
            onChange={handleFieldChange}
            name="email"
            type="text"
            value={email}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            onChange={handleFieldChange}
            name="password"
            type="text"
            value={password}
          />
        </label>
        <button>Log In</button>
      </form>
    </>
  );
};

export default SignUpView;
