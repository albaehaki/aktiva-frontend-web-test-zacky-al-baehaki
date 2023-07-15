import React, {useEffect} from 'react'

// Redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"

function Home() {
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch()
  const data = useAppSelector((state) => state.reducer.data.data.dataDetail) as any
  const id = useAppSelector((state) => state.reducer.detail.id) 

  useEffect(() => {
    dispacth(fetchData({endpoint: id, params: {}}))
  }, [])
 
  console.log(data)
  return (
    <div>Hallo ini halaman surah</div>
  )
}

export default Home;