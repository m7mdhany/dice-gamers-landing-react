import React, { createContext, useContext, useState } from 'react'


const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState([]);
  return (
    <GamesContext.Provider value={{ games, setGames, game, setGame }}>
      {children}
    </GamesContext.Provider>
  )
}

export const useGames = () => useContext(GamesContext);