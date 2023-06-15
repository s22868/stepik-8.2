import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Photo from './components/photo/Photo'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:photoIndex?" Component={Photo} />
      </Routes>
    </Router>
  )
}

export default App
