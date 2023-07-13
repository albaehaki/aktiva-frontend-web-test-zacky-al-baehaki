import React, { useState, useEffect, useRef } from "react"
import ReactDOMServer, { renderToStaticMarkup } from "react-dom/server"

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"
import { useMapEvents } from "react-leaflet"

// components
import PinMap from "../../components/pinMap"
import LocationMarker from "../../components/getCurrentLocation"

// ant Design
import { Layout, Space } from "antd"

const { Header, Footer, Sider, Content } = Layout

// icon
import {
  SearchOutlined,
  AimOutlined,
  LaptopOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons"
import MarkerIcon from "../../image/markerIcon.png"

// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"
import { addNewPosition } from "../../features/positionSlice/positionSlice"

// const aimIcon = ReactDOMServer.renderToString(<AimOutlined />);

// const aimIconUrl = `data:image/svg+xml;base64,${btoa(aimIcon)}`;

export const newicon = new Leaflet.Icon({
  iconUrl: MarkerIcon,
  iconAnchor: [15, 25],
  popupAnchor: [-2, -20],
  iconSize: [25, 25],
})

// const antIcon = <AimOutlined />;
// const antIconMarkup = renderToStaticMarkup(antIcon);

// export const newicon = new Leaflet.divIcon({
//   className: '',
//   iconAnchor: [12, 25],
//   labelAnchor: [-6, 0],
//   popupAnchor: [0, -15],
//   iconSize: [25, 41],
//   html:
// });

function Home() {
  const mapRef = useRef(null)
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch()
  const dataBusiness = useAppSelector((state) => state.reducer.data.data) as any

  useEffect(() => {
    dispacth(
      fetchData({
        latitude: position[0],
        longitude: position[1],
        radius: 1000,
      }),
    )
  }, [dispacth, position])

  useEffect(() => {
    // Logika atau pemanggilan fungsi lain yang berkaitan dengan perubahan dataBusiness
  }, [dataBusiness])
  console.log(dataBusiness.businesses)
  console.log(dataBusiness.businesses.filter((d: any) => d.id === "JQhiHB0luuEs1FEc1oEFtw"))
  console.log(position)
  return (
    <>
      <Layout>
        <Header></Header>
        <Layout hasSider>
          <Sider
            width={200}
            style={{ overflow: "auto", height: "100vh", left: 0 }}
          >
            {
              dataBusiness?.businesses.map((item: any, i: number) => (
                <p
                  key={item.id}
                  style={{
                    background: "white",
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: "10px",
                  }}
                >
                  {item.name}
                </p>
              ))
              // : ''
            }
            {dataBusiness?.businesses.length > 0 ? (
              ""
            ) : (
              <p
                style={{
                  background: "white",
                  marginLeft: "10px",
                  marginRight: "10px",
                  padding: "10px",
                }}
              >
                no data
              </p>
            )}
          </Sider>
          <Content style={{ height: "100vh" }}>
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
              <Marker position={position} icon={newicon}>
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
