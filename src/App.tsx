import Root from "./routes/routes"

function App() {
  console.log(import.meta.env.VITE_YELP_API_URL)
  return (
    <Root />
  )
}

export default App
