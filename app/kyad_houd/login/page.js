'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';


const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://keep-your-anger-down-production.up.railway.app/login/', { //http://127.0.0.1:8000/

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': username, 'password': password }),
      });

      console.log(response)

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Store the token in the browser's local storage
        localStorage.setItem('token', token);

        // Redirect to the welcome page upon successful login
        // You can use the Next.js router for navigation
        router.push('/');
      } else {
        // Handle authentication error
        console.log('Login failed');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input className={styles.inputusername} type="text" value={username} onChange={handleUsernameChange} placeholder="Username/Email" />
        <input className={styles.inputpass} type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
