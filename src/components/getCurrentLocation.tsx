import React, {useEffect, useState} from 'react';

// components
import { Button} from "antd"

// icon
import { SearchOutlined, AimOutlined } from "@ant-design/icons"

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useMapEvent, useMap } from 'react-leaflet/hooks'

// redux
import { useAppDispatch, useAppSelector } from "../app/hooks"

import { addNewPosition } from '../features/positionSlice/positionSlice';


export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);
  const dispacth = useAppDispatch()

  const map = useMap()

  const handleGetCurrentPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispacth(addNewPosition([position.coords.latitude, position.coords.longitude]))
          map.flyTo([position.coords.latitude, position.coords.longitude], 14, { duration: 2 });
        },
        (error) => {
          console.error('Gagal mendapatkan posisi pengguna:', error);
        }
      );
    } else {
      console.error('Browser tidak mendukung Geolocation.');
    }
  };
 
  return (<><Button
  onClick={() => {
    handleGetCurrentPositionClick()
  }}
  shape="circle"
  icon={<AimOutlined />}
  style={{
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
  }}
/>
</>)
}