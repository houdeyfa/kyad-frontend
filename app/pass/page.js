'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import React, { useState } from "react";

const PassForm = () => {
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get the token from your authentication system
    const token = localStorage.getItem('token');

    try {
      // Construct the request body
      const requestBody = {
        'pass_dark': pass,
      };

      // Make the POST request to the API
      const response = await fetch("https://keep-your-anger-down-production.up.railway.app/ckeckdark/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data); // Handle the response data
      if (response.ok) {
        router.push('/kyad_houd/');
      }
      setPass("");
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
          <label htmlFor="pass" className={styles.typewritertext} >ASK ANYTHING:</label>
          <input
            type="text"
            id="pass"
            value={pass}
            className={styles.input}
            onChange={(e) => setPass(e.target.value)}
          />

        <button type="submit" className={styles.button}>ASK</button>
      </form>
    </div>
  );
};

export default PassForm;
