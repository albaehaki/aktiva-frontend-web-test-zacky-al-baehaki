import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// components
import PinMap from "../../components/pinMap";


// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"



function Home() {

  const data = useAppSelector(state => state.reducer.data)
  const position = useAppSelector(state => state.reducer.position)
  const dispacth = useAppDispatch()
  
  useEffect(() => {
    dispacth(fetchData({"latitude" : position[0], "longitude": position[1]}))
  }, [dispacth])
  
console.log(data)
console.log(position)
console.log(import.meta.env.VITE_YELP_API_TOKEN)
  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ width: '100vw', height: '100vh' }} >
      <PinMap />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        {`${position[0]}, ${position[1]}`}
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Home;