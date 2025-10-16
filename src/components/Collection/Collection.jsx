import React from 'react'
import Card from '../Card/Card';

const Collection = ({ games }) => {
  console.log(games);

  return (
    <div className="min-h-screen bg-gradient-to-b z-10 from-gray-800 to-gray-900 p-10 rounded-lg my-5 relative">
      <h1 className="text-4xl font-bold text-center text-red-400 mb-10">Available Games</h1>
      <div className="flex flex-wrap gap-8 justify-center z-20">
        {games && games.length > 0 ? (
          games.map((game, index) => (
            <Card
              key={index}
              title={game.title}
              img={game.images?.[0]}
              overview={game.overview}
              thisGame={game}
            />
          ))
        ) : (
          <p dir='ltr' className="text-white text-xl">Loading ...</p>
        )}
      </div>
      <img className='absolute opacity-5 w-full top-0 -z-10' src="/src/assets/imgs/logo-inv.png" alt="" />
    </div>
  );
}

export default Collection
