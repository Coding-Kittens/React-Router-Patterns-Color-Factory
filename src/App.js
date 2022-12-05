import './App.css'
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom'
import ColorList from './ColorList'
import NewColorForm from './NewColorForm'
import Color from './Color'

function App () {
  return (
    <BrowserRouter>
      <Link exact to={'/colors'}>
        Home
      </Link>
      <Routes>
        <Route exact path="/colors" element={<ColorList />} />
        <Route exact path="/colors/new" element={<NewColorForm />} />
        <Route exact path="/colors/:color" element={<Color />} />
        <Route exact path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
