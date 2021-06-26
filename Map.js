import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { Redirect } from "react-router";
import Star from "./Star_Rating.js";
//import ZoomControl from "react-leaflet";
import * as cities from "../../data/data_map.json";
import "../../stylesheets/sayendeep_style/Map.css";
//import Marker from '../assets/'

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

function Map() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 23.473324,
    longitude: 77.947998,
    zoom: 4
  });
  // map.addControl(new ReactMapGL.NavigationControl());
  const [selectCity, setSelectcity] = useState(null);
  const navStyle = {
    bottom: 50,
    right: 0,
    padding: "10px"
  };
  const [selectComment, setSelectComment] = useState(false);
  if (selectComment){
    return <Redirect to='/comment'/>
  }
  return (
    <div className="Map">
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/safak/cknndpyfq268f17p53nmpwira"}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {cities.features.map((city) => (
          <Marker
            key={city.properties.id}
            latitude={city.geometry.coordinates[1]}
            longitude={city.geometry.coordinates[0]}
            offsetLeft={-2 * viewport.zoom}
            offsetTop={-4 * viewport.zoom}
          >
            <button
              className="marker-btn"
              onClick={(event) => {
                event.preventDefault();
                setSelectcity(city);
              }}
            >
              <img
                src="https://image.flaticon.com/icons/png/128/1483/1483336.png"
                alt="cities-icon"
              />
            </button>
          </Marker>
        ))}

{selectCity ? (
            <Popup
              latitude={selectCity.geometry.coordinates[1]}
              longitude={selectCity.geometry.coordinates[0]}
              closeButton={true}
              closeOnClick={false}
              anchor="bottom"
              onClose={() => {
                setSelectcity(null);
              }}
            >
              <div className='card1'>
                <img
                  src={`/ruthra/images/${selectCity.properties.image}`}
                  class="card-img-top"
                  alt="Places"
                  className="img"
                />
                <div class="card-body">
                  <h5 class="card-header place">
                    {selectCity.properties.title}
                  </h5>
                  <p class="card-text desc">
                    {selectCity.properties.description}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                <div class="text-left">
                  <h4>Give Your Rating Below</h4>
                  
                   {//<StarRating name="small-rating" caption="Small!" size={30} totalStars={5} rating={3} />  
                  }
                  <Star />
                  
                </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="button">
                  &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-primary" id="b1" type="submit" onClick={()=>setSelectComment(true)}>REVIEW</button>
                 </div>  
                </div>
              </div>
            {/* </div> */}
          </Popup>
        ) : null}
        <NavigationControl style={navStyle} />
      </ReactMapGL>
    </div>
  );
}
export default Map;
