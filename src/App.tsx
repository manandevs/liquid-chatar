
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
    </>
  )
}

export default App
