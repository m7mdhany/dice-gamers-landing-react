import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Collection from '../Collection/Collection'
import { db } from "../../../src/firebaseConfig";
import { collection, doc, getDocs } from 'firebase/firestore';
import { databases } from '../../appwriteConfig';
import { useGames } from '../GamesContext/GamesContext';
import RequestGame from '../RequestGame/RequestGame';


const Home = () => {

  const { games, setGames } = useGames([])

  useEffect(() => {
    const fetchGames = async () => {
      const querySnapshot = await getDocs(collection(db, "games"));
      const gamesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGames(gamesData);
      // console.log(gamesData);
    };

    fetchGames();
  }, []);


  // useEffect(() => {
  //   const fetchGames = async () => {
  //     try {
  //       const response = await databases.listDocuments(
  //         "68efae4a0013175ba85f",      // Database ID
  //         "games"     // Collection ID
  //       );
  //       // console.log(response.documents);
  //       setGames(response.documents);
  //     } catch (error) {
  //       console.error("Error fetching games:", error);
  //     }
  //   };
  //   fetchGames();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Collection games={games} />
      <RequestGame />
    </div>
  )
}

export default Home
