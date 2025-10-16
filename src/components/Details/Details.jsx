import { useState } from "react";
import { useGames } from "../GamesContext/GamesContext";
import { Navigate } from "react-router-dom";

export default function GameDetails() {
  const { game, setGame } = useGames()

  const [current, setCurrent] = useState(0);

  console.log(game.images);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % game.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? game.images.length - 1 : prev - 1
    );
  };
  if (!game.title) {
    return <Navigate to="/" replace />;
  }

  return (
    <div dir="ltr" className=" h-screen min-h-fit text-white flex flex-col items-center py-10 px-6 mb-5">
      <div className="flex justify-center w-full h-full">
        <div className="justify-center w-1/3 items-center flex flex-col ">
          <div className="relative w-full mb-6 h-full">
            <div className="h-full min-h-full flex justify-center items-center">
              <img
                src={game.images[current]}
                alt={`${game.title} ${current + 1}`}
                className=" rounded-xl border border-red-400 shadow-lg max-h-[700px]"
              />
            </div>
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              ›
            </button>
            <div className="flex gap-2 mb-8 w-full justify-center">
              {game.images?.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === current ? "bg-red-500" : "bg-gray-600"
                    }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div dir="rtl" className="flex flex-col mx-10 items-center">
          <h1 className="text-4xl font-bold text-red-400 mb-8 tracking-wide">
            {game.title}
          </h1>
          <div className=" max-w-2xl text-start text-gray-900 leading-relaxed border-t border-red-400 pt-6 flex flex-col items-end gap-5">
            <div className=" grid gap-2">
              <p className="col-span-12 w-full font-bold text-2xl"> : عن اللعبة</p>
              <p className="col-span-12 w-full">{game.overview}</p>
              <p className="col-span-12 w-full">{game.description}</p>
            </div>
            <div className="w-full">
              <p className="text-2xl font-bold mb-2">: مميزات</p>
              {game.about?.map(i => <p>{i}</p>)}
            </ div>
            <div className="">
              <p className="text-2xl font-bold mb-2">: ازاى بتتلعب</p>
              {game.play?.map(i => <p>{i}</p>)}
            </ div>
          </div>
          <div className="flex justify-center w-full gap-5">
            <button className="bg-red-400 px-5 py-2 w-1/2 cursor-pointer rounded-md self-end my-5 hover:bg-red-600">أطلب</button>
            <button className="bg-gray-400 px-5 py-2 w-1/2 cursor-pointer rounded-md self-end my-5 hover:bg-red-600">كل الالعاب</button>
          </div>
        </div>

      </div>
      <img className="absolute -z-10 opacity-10" src="/src/assets/imgs/logo.png" alt="" />
    </div >
  );
}
