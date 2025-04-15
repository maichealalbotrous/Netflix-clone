import React, { useEffect, useState } from "react";
import "./Trailer.css";
import { Link, replace, useNavigate, useParams } from "react-router-dom";
const Trailer = () => {
const id = useParams();

const navigate = useNavigate();

const [data,setdata] = useState({
  name:"",
  key:"",
  published_at:"",
  type :"",
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1NmYwMTc1ZDA1ODNiMmM0MGRhMjQ0NWY3Mzc1ZiIsIm5iZiI6MTc0MDE1MDE5Ni44LCJzdWIiOiI2N2I4OTViNGJjODRkNTZjYmViYTg3M2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.y-_T_LQLm3HCvBLf2_WEs23V_dHgQq5PEP4Op3HC3fw'
    }
  };
useEffect(()=>{
    
  fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?language=en-US`, options)
  .then(res => res.json())
    .then(res =>setdata(res.results[0]))
    .catch(err => console.error(err));
},[])
  return (
    <div>
      <div className="Player_trailer container">
        <div className="player_icon">
            <div onClick={()=>{navigate("/" , {replace:true})}}>
            <img src="/back_arrow_icon.png"/>
            </div>
        </div>

        <div className="Ifram">
        <iframe 
   src={data.key ? `https://www.youtube.com/embed/${data.key}` : ""}
   title="Trailer" 
   allowFullScreen 
/>
        </div>

        <div className="Date_And_Type">
            <p className="Date">
                <span> Published :</span>
                <span> {data.published_at.slice(0,10)}</span>

            </p>
            <p className="Type">
                <span> Type:</span>
                <span>{data.type}</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
