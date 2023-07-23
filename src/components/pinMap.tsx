import { useMapEvent, useMap } from 'react-leaflet/hooks'

// redux
import { useAppDispatch, useAppSelector } from "../app/hooks"

import { addNewPosition } from '../features/positionSlice/positionSlice';


export default function PinMap() {
  const dispacth = useAppDispatch()
  const map = useMapEvent('click', (e) => {
    dispacth(addNewPosition([e.latlng.lat, e.latlng.lng]))
  })
  return null
}