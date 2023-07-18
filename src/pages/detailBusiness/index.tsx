import React, { useEffect } from "react"

// Redux
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchData } from "../../features/yelpApiSlice/yelpApiSlice"

// antDesign
import { Row, Col, Space, Progress, Rate, Typography } from "antd"
const { Text } = Typography

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"

// dummy data
export const dataDummy: any = {
  id: "JQhiHB0luuEs1FEc1oEFtw",
  alias: "exploradôme-vitry-sur-seine",
  name: "Exploradôme",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/TXmb8i28OXX2TcC0T2qDSg/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/explorad%C3%B4me-vitry-sur-seine?adjust_creative=0AaIzRQtwHliTIq8q-lbRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=0AaIzRQtwHliTIq8q-lbRw",
  phone: "+33143911633",
  display_phone: "+33 1 43 91 16 33",
  review_count: 1,
  categories: [
    {
      alias: "museums",
      title: "Museums",
    },
  ],
  rating: 5.0,
  location: {
    address1: "18 avenue Henri Barbusse",
    address2: null,
    address3: null,
    city: "Vitry-Sur-Seine",
    zip_code: "94400",
    country: "FR",
    state: "94",
    display_address: [
      "18 avenue Henri Barbusse",
      "94400 Vitry-Sur-Seine",
      "France",
    ],
    cross_streets: "",
  },
  coordinates: {
    latitude: 48.79294,
    longitude: 2.393011,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/XFE_iidzDssnuT8QlyLoAw/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/a1nHsVk-0dPherQldZCSSQ/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/JJUDOedes1psUjrY-nTUkA/o.jpg",
  ],
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: "1000",
          end: "1200",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1330",
          end: "1700",
          day: 1,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "1800",
          day: 2,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "1200",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1330",
          end: "1700",
          day: 3,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "1200",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1330",
          end: "1700",
          day: 4,
        },
        {
          is_overnight: false,
          start: "1000",
          end: "1800",
          day: 5,
        },
        {
          is_overnight: false,
          start: "1300",
          end: "1800",
          day: 6,
        },
      ],
      hours_type: "REGULAR",
      is_open_now: false,
    },
  ],
  transactions: [],
}

function Home() {
  const position = useAppSelector((state) => state.reducer.position)
  const dispacth = useAppDispatch()
  const data = useAppSelector(
    (state) => state.reducer.data.data.dataDetail,
  ) as any
  const id = useAppSelector((state) => state.reducer.detail.id)

  useEffect(() => {
    dispacth(fetchData({ endpoint: id, params: {} }))
  }, [])

  console.log(data)
  return (
    <div style={{ overflowX: "hidden" }}>
      <Row justify="center" style={{ padding: "16px" }} gutter={[16, 16]}>
        <Col span={12}>
          <div
            style={{
              backgroundImage: `url(${dataDummy.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "516px",
              borderRadius: "25px",
            }}
          ></div>
          {/* <img src={dataDummy.image_url} alt="Image 1" style={{ width: '100%' }} /> */}
        </Col>
        <Col span={12}>
          <Row
            // style={{paddingLeft: "10px"}}
            gutter={[0, 16]}
          >
            <Col
              // style={{
              //   backgroundImage: `url(${dataDummy.photos[0]})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              //   width: "100%",
              //   height: "250px",
              //   borderRadius: "25px",
              // }}
              span={24}
            >
              <div
                style={{
                  backgroundImage: `url(${dataDummy.photos[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "250px",
                  borderRadius: "25px",
                }}
              ></div>
              {/* <img src={dataDummy.photos[0]} alt="Image 2" style={{ width: '100%', height: '300px' }} /> */}
            </Col>
            <Col span={24}>
              <Row gutter={[16, 0]}>
                <Col
                  // style={{
                  //   backgroundImage: `url(${dataDummy.photos[1]})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  //   backgroundRepeat: "no-repeat",
                  //   width: "100%",
                  //   height: "250px",
                  //   borderRadius: "25px",
                  // }}
                  span={12}
                >
                  <div
                    style={{
                      backgroundImage: `url(${dataDummy.photos[1]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "250px",
                      borderRadius: "25px",
                    }}
                  ></div>
                  {/* <img src={dataDummy.photos[1]} alt="Image 3" style={{ width: '100%' }} /> */}
                </Col>
                <Col
                  // style={{
                  //   backgroundImage: `url(${dataDummy.photos[2]})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  //   backgroundRepeat: "no-repeat",
                  //   width: "100%",
                  //   height: "250px",
                  //   borderRadius: "25px",
                  // }}
                  span={12}
                >
                  <div
                    style={{
                      backgroundImage: `url(${dataDummy.photos[2]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "250px",
                      borderRadius: "25px",
                    }}
                  ></div>
                  {/* <img src={dataDummy.photos[2]} alt="Image 3" style={{ width: '100%' }} /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" style={{ padding: "16px" }} gutter={[16, 16]}>
        <Col span={18}>
          <div
            style={{
              // backgroundImage: `url(${dataDummy.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "516px",
              borderRadius: "25px",
              border: "1px solid",
            }}
          >
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%", borderRadius: "25px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  dataDummy.coordinates.latitude,
                  dataDummy.coordinates.longitude,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              // backgroundImage: `url(${dataDummy.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "516px",
              borderRadius: "25px",
              borderColor: "lightgray",
              border: "1px solid",
            }}
          >
            {/* <Progress percent={70} size='small' /> */}
            <Row align="middle">
              <Col>
                <p
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    paddingRight: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  {dataDummy.rating.toFixed(1)}{" "}
                </p>
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0px",
                }}
              >
                <Rate
                  allowHalf
                  disabled
                  style={{ fontSize: 24 }}
                  value={dataDummy.rating}
                />

                <p>Based on {dataDummy.review_count} Reviewers</p>
              </Col>
              <Col
                style={{ paddingRight: "20px", paddingLeft: "20px" }}
                span={24}
              >
                <Text>{dataDummy.location.address1}</Text>
                <br />
                <Text>
                  {dataDummy.location.zip_code} {dataDummy.location.city}
                </Text>
                <br />
                <Text>{dataDummy.location.country}</Text>
                <br />
                <Text>{dataDummy.display_phone}</Text>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home
