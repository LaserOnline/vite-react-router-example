import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
     <div>
        <Link to="/home">Home</Link>
     </div>
     <div>
        <Link to="/title">Title</Link>
     </div>
     <div>
        <Link to="/title2">Title2</Link>
     </div>
     <div>
        <Link to="/get">Api Get</Link>
     </div>
    </>
  )
}

export default App