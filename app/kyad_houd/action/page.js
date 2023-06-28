'use client'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

import React, { useState, useEffect } from "react";


const RegisterForm = () => {
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [time, setTime] = useState("");
  const [acts, setActs] = useState([]);
  const [kid, setKid] = useState("");


  const router = useRouter();
  const searchParams = useSearchParams();
  const kid_id = searchParams.get('kid');

 // const token = localStorage.getItem('token');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get the token from your authentication system
    const token = localStorage.getItem('token');

    try {
      // Construct the request body
      const requestBody = {
        'description': description,
        'level': level,
        'time': time,
        'isgood': false,
        'kid_id': kid_id,
      };

      // Make the POST request to the API
      const response = await fetch("https://keep-your-anger-down-production.up.railway.app/save_action/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data); // Handle the response data

      // Reset the form fields after successful submission
      setDescription("");
      setLevel("");
      setTime("");
    } catch (error) {
      console.error(error); // Handle the error
    }
  };


  const listActs = () => {

    // Get the token from your authentication system
      useEffect(() => {
          const token = localStorage.getItem('token');

        fetch(`https://keep-your-anger-down-production.up.railway.app/act/${kid_id}/0/`, {
              headers: {
                Authorization: `Token ${token}`, // Replace with your token
              },
           })
          .then((response) => response.json())
          .then((data) => setActs(data))
          .catch((error) => console.error("Error fetching kids:", error));
      }, []);

      return(
          <div className={styles.cardlist}>
          {acts.map((act) => (
                  <div className={styles.cardkid}>
                      <h2>{act.description} -- {act.time}</h2>
                    </div>
              ))}
          </div>
      )
    };




      useEffect(() => {
      const token = localStorage.getItem('token');
        fetch(`https://keep-your-anger-down-production.up.railway.app/kid/${kid_id}/`, {
              headers: {
                Authorization: `Token ${token}`, // Replace with your token
              },
           })
          .then((response) => response.json())
          .then((data) => setKid(data.name))
          .catch((error) => console.error("Error fetching kids:", error));
      }, []);

  return (
  <div>

  <div>
  <h5>What has {kid} done again?</h5>
  </div>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="level">Level:</label>
        <input
          type="text"
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
    <div>
    {listActs()}
    </div>
    </div>
  );
};

export default RegisterForm;

