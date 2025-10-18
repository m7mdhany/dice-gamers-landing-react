import React from 'react'
import { Link } from 'react-router-dom';
import { useGames } from '../GamesContext/GamesContext';

const Card = ({ title, img, overview, thisGame }) => {
  const { game, setGame } = useGames()
  console.log(img);
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white rounded-2xl overflow-hidden w-72 hover:scale-105 transition-transform duration-300 shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover hover:obj"
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300  text-sm mb-4 line-clamp-4">{overview}</p>
        <Link
          onClick={() => { setGame(thisGame) }}
          to="/details"
          className="bg-red-400 cursor-pointer hover:bg-red-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300 w-fit">
          تفاصيل
        </Link>
      </div>
    </div>
  );
}

export default Card
