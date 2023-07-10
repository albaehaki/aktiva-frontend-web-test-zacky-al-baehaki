import React, { useState, useEffect, useRef } from "react"
import ReactDOMServer from "react-dom/server";

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet";
import { useMapEvents } from "react-leaflet"

// components
import PinMap from "../../components/pinMap"
import LocationMarker from "../../components/getCurrentLocation"

// ant Design
import { Layout, Space } from "antd"

const { Header, Footer, Sider, Content } = Layout

// icon
import { SearchOutlined, AimOutlined, LaptopOutlined, EnvironmentOutlined } from "@ant-design/icons"

// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"
import { addNewPosition } from "../../features/positionSlice/positionSlice"



const aimIcon = ReactDOMServer.renderToString(<AimOutlined />);

// const aimIconUrl = `data:image/svg+xml;base64,${btoa(aimIcon)}`;

export const newicon = new Leaflet.Icon({
  iconUrl: aimIcon,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55]
});

function Home() {
  const mapRef = useRef(null)
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch() 
  const dataBusiness = useAppSelector((state) => state.reducer.data.data) as any

  useEffect(() => {
    dispacth(fetchData({ latitude: position[0], longitude: position[1], radius: 1000 }))
  
  }, [dispacth])

  useEffect(() => {
    // Logika atau pemanggilan fungsi lain yang berkaitan dengan perubahan dataBusiness
  }, [dataBusiness]);
console.log(dataBusiness)
  return (
    <>
      <Layout>
        <Header></Header>
        <Layout hasSider>
          <Sider width={200} style={{ overflow: 'auto', height: '100vh', left: 0 }}>
            {/* {dataBusiness?.businesses.map((item: any, i: number) =>(
              <p
                key={item.id}
                style={{
                background: 'white',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '10px',
              }}>{item.name}</p>
            ))
            // : ''
            } */}
          </Sider>
          <Content style={{ height: '100vh' }}>
            <MapContainer
              center={position}
              zoom={5}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
            >
              <PinMap />
              <LocationMarker />
              <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>{`${position[0]}, ${position[1]}`}</Popup>
              </Marker>
            </MapContainer>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Home
