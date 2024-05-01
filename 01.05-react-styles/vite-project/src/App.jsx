import './App.css'
import PrimarySearchAppBar from './companents/Header'
import Main from './companents/Main'
import Variants from './companents/Movies/Skeleton'
import SkeletonColor from './companents/Movies/Skeleton'

function App() {
const arr = Array.from({length:6})
  return (
    <>
     <PrimarySearchAppBar />
     <div className="container">
      <div className="row">
        {arr && arr.map((s,i)=>{
          return < Variants/>
        })}
      </div>
     </div>
     <Main/>
    </>
  )
}

export default App
