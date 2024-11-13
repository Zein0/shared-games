import GamesList from "./components/GamesList"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import XboxGameList from "./components/XboxGameList"
import PlayStationGameList from "./components/PlayStationGameList"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GamesList/>} />
          <Route path='/xbox' element={<XboxGameList/>} />
          <Route path='/ps' element={<PlayStationGameList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
