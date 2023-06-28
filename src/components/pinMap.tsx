import { useMapEvent, useMap } from 'react-leaflet/hooks'

// redux
import { useAppDispatch, useAppSelector } from "../app/hooks"

import { addNewPosition } from '../features/positionSlice/positionSlice';


export default function PinMap() {
  const dispacth = useAppDispatch()
  const map = useMapEvent('click', (e) => {
    // setPosition([e.latlng.lat, e.latlng.lng]);
    dispacth(addNewPosition([e.latlng.lat, e.latlng.lng]))
    console.log([e.latlng.lat, e.latlng.lng])
  })
  return null
}