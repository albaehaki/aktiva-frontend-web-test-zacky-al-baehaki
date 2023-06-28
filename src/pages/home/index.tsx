import React, { useState, useEffect, useRef } from "react"

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useMapEvents } from "react-leaflet"

// components
import PinMap from "../../components/pinMap"
import LocationMarker from "../../components/getCurrentLocation"


// icon
import { SearchOutlined, AimOutlined } from "@ant-design/icons"

// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"
import { addNewPosition } from '../../features/positionSlice/positionSlice';

function Home() {
  const mapRef = useRef(null);
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch()

  useEffect(() => {
    dispacth(fetchData({ latitude: position[0], longitude: position[1] }))
    const map = mapRef.current;
    // if(map){
    //   map.flyTo(position, map.getZoom());
    // }
  }, [dispacth])

  

  return (
    <>
      

      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        style={{ width: "100vw", height: "100vh" }}
      >
        <PinMap />
        <LocationMarker />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{`${position[0]}, ${position[1]}`}</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Home
