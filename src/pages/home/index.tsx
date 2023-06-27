import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapEvent } from 'react-leaflet/hooks'

// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"


type positionType = [number, number]
type setPositionType = React.Dispatch<React.SetStateAction<positionType>>;

type ChildComponentProps = {
  position: positionType;
  setPosition: setPositionType;
};

function MyComponent(props:ChildComponentProps) {
  const { position, setPosition } = props;
  const map = useMapEvent('click', (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
    console.log(e.latlng)
  })
  return null
}

function Home() {
  const [position, setPosition] = useState<positionType>([0, 0])

  const data = useAppSelector(state => state.data.data)
  const dispacth = useAppDispatch()
  
  useEffect(() => {
    dispacth(fetchData({"location" : "nyc"}))
  }, [dispacth])
  
console.log(data)
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100vw', height: '100vh' }} >
      <MyComponent position={position} setPosition={setPosition}/>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Home;