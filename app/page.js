'use client'

import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";


const HomePage = () => {
  const router = useRouter();
  let token = null;


  useEffect(() => {
    // Retrieve the token from local storage
    //const [token, setToken] = useState('');
    token = localStorage.getItem('token')
    //setToken();


    if (!token) {
      // If the token is not present, the user is not authenticated
      // Redirect to the login page
      router.push('/login');
    } else {
      // You can optionally send a request to the server to validate the token
      // and handle cases where the token is expired or invalid

      // If the token is valid, the user is authenticated
      // Proceed with rendering the protected content
    }
  }, []);


  const [kids, setKids] = useState([]);

  useEffect(() => {
    fetch("https://keep-your-anger-down-production.up.railway.app/kids/", {
          headers: {
            Authorization: `Token ${token}`, // Replace with your token
          },
       })
      .then((response) => response.json())
      .then((data) => setKids(data['kids']))
      .catch((error) => console.error("Error fetching kids:", error));
  }, []);

  function renderKids() {

      return(
      <div className={styles.cardlist} id='listContainer'>
          {kids.map((kid) => (
                  <div className={styles.cardkid}>
                      <h2>{kid.name}</h2>
                      <button className={styles.addbutton} onClick={() => router.push(`/action?kid=${kid.id}`)}>+</button>
                    </div>
              ))}

      </div>
          )
  }

//  const mainComponent = document.querySelector('.main');
//  const listContainer = document.getElementById('listContainer');
//  const listHeight = listContainer.minHeight;
//  mainComponent.style.minHeight = `${listHeight}px`;
//
//  console.log(`${listHeight}px`)

  return (
    <div className={styles.main}>
        <p className={styles.paragraph}>KEEP YOUR ANGER <br /> 😄 DOWN 😄</p>
        {renderKids()}
                   <button className={styles.passbutton} onClick={() => router.push(`/pass`)}>?</button>

    </div>

  );
};

export default HomePage;
