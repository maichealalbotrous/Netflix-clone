import React, { useEffect, useRef, useState } from "react";
import "./SwiperCompenent.css";
import { Link } from "react-router-dom";

const SwiperCompenent = ({ Title, Category }) => {
  const cardref = useRef(null);
  const [GetApi, SetApi] = useState([]);

  const handlwheel = (event) => {
    event.preventDefault();
    if (cardref.current) {
      cardref.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    if (cardref.current) {
      cardref.current.addEventListener("wheel", handlwheel);
    }
    return () => {
      if (cardref.current) {
        cardref.current.removeEventListener("wheel", handlwheel);
      }
    };
  }, []);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1NmYwMTc1ZDA1ODNiMmM0MGRhMjQ0NWY3Mzc1ZiIsIm5iZiI6MTc0MDE1MDE5Ni44LCJzdWIiOiI2N2I4OTViNGJjODRkNTZjYmViYTg3M2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.y-_T_LQLm3HCvBLf2_WEs23V_dHgQq5PEP4Op3HC3fw'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${Category ? Category :"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => SetApi(res.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container Card_Containar">
      <h1 className="Title">{Title}</h1>

      <div className="Card_Div" ref={cardref}>
        {GetApi.map((card, index) => (
          <Link to={`/Trailer/${card.id}`} className="Card" key={index}>
            <div className="card_title">
              <h1>{card.original_title}</h1>
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SwiperCompenent;
