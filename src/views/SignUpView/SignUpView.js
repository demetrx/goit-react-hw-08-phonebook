import { useState } from 'react';
import { useSignupMutation } from 'services/contacts-api';

const SignUpView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signup] = useSignupMutation();

  const handleFieldChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;

      default:
        throw new Error(name + 'field is not supported!');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSignUp = e => {
    e.preventDefault();
    signup({ name, email, password });
    resetForm();
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <p>Name</p>
          <input
            onChange={handleFieldChange}
            name="name"
            type="text"
            value={name}
          />
        </label>
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
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default SignUpView;
