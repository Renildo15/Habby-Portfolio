import './App.css'
import PortfolioPage from './pages/PortfolioPage'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/about/About';
const App = () => {
  return (
    <div className="App">
        <Router>
          <PortfolioPage/>
        </Router>
    </div>
  )
}

export default App
