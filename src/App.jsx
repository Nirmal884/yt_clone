import './App.css'
import Navbar from './component/navbar'
import SideView from './component/sideView'
import Sidebar from './component/sidebar'

function App() {

  return (
    <>
    <Navbar />
    <div className='flex'>
    <Sidebar />
    <SideView />
    </div>
    </>
  )
}

export default App
