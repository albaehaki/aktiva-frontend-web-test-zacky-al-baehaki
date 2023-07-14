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
import { addIdDetail } from "../../features/detailSlice/detailSlice"

// React router dom
import { useNavigate, Route } from 'react-router-dom';

export const newicon = new Leaflet.Icon({
  iconUrl: MarkerIcon,
  iconAnchor: [15, 25],
  popupAnchor: [-2, -20],
  iconSize: [25, 25],
})



function Home() {
  const mapRef = useRef(null)
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch()
  const dataBusiness = useAppSelector((state) => state.reducer.data.data) as any
  const data = useAppSelector((state) => state.reducer.data) as any

  // react router dom
  const navigate = useNavigate()

  useEffect(() => {
    dispacth(
      fetchData({endpoint: "search", params:{
        latitude: position[0],
        longitude: position[1],
        radius: 1000,
      }})
    )
  }, [dispacth, position])

  useEffect(() => {
    // Logika atau pemanggilan fungsi lain yang berkaitan dengan perubahan dataBusiness
  }, [dataBusiness])
 
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
             data.error? "" : dataBusiness?.businesses && dataBusiness?.businesses.map((item: any, i: number) => (
                <button
                onClick={() => {
                  dispacth(addIdDetail(item.id))
                  navigate("/detail")
                }}
                  key={item.id}
                  style={{
                    background: "white",
                    // marginLeft: "10px",
                    // marginRight: "10px",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  {item.name}
                </button>
              ))
             
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
