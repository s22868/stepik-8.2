import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from 'react-router-dom'

const Calculator = () => {
  const { operation } = useParams()
  const [searchParams] = useSearchParams()
  const x = searchParams.get('x')
  const y = searchParams.get('y')

  if (x === null || y === null) {
    return <div>Brak x lub y</div>
  }

  let result: number | string

  switch (operation) {
    case 'add':
      result = Number(x) + Number(y)
      break
    case 'sub':
      result = Number(x) - Number(y)
      break
    case 'mul':
      result = Number(x) * Number(y)
      break
    case 'div':
      result = Number(x) / Number(y)
      break
    default:
      result = 'tylko /mul /div /add /sub'
  }

  return <h1>Wynik: {result}</h1>
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:operation" Component={Calculator} />
      </Routes>
    </Router>
  )
}

export default App
