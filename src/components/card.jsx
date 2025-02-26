import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title }) => {
  return (
    <div className="w-full max-w-[300px] h-[400px] bg-slate-300 rounded-2xl overflow-hidden shadow-lg m-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-[250px]">
        <img 
          className="w-full h-full object-cover rounded-t-2xl" 
          src={image} 
          alt={title} 
        />
      </div>
      <div className="px-4 py-3 text-center">
        <h2 className="font-bold text-lg text-gray-800 truncate">{title}</h2>
      </div>
      <div className="px-4 pb-4 flex justify-center" >
        <Link 
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          to={`/mememaker?url=${image}`}
        >
          Edit Meme
        </Link>
      </div>
    </div>
  );
};

export default Card;
