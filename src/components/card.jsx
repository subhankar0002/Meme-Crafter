import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
const Card = (props) => {

  const nevigate= useNavigate()
  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={props.image} alt />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> {props.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        to={`/mememaker?url=${props.image}`}
        >
          
          Edit
        
        </Link>
      </div>
    </div>
    
  );
};

export default Card;
