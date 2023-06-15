import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom'

const Home: React.FC = () => <h1>Strona główna</h1>
const About: React.FC = () => <h1>O nas</h1>
const Services: React.FC = () => <h1>Usługi</h1>
const Contact: React.FC<{ countryCode?: 'pl' | 'us' | 'de' }> = ({
  countryCode,
}) => {
  return <h1>Kontakt {countryCode}</h1>
}
const NotFound: React.FC = () => {
  const location = useLocation()
  return <h1>Nie znaleziono elementu: {location.pathname}</h1>
}

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/services">Usługi</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/contact/us">Kontakt (US)</Link>
          </li>
          <li>
            <Link to="/contact/pl">Kontakt (PL)</Link>
          </li>
          <li>
            <Link to="/contact/de">Kontakt (DE)</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/contact/pl" element={<Contact countryCode="pl" />} />
        <Route path="/contact/de" element={<Contact countryCode="de" />} />
        <Route path="/contact/us" element={<Contact countryCode="us" />} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  </Router>
)

export default App
