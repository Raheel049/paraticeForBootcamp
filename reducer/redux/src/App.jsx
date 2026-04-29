import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { increment } from './slicce/counter'
import SocketComponent from './socket/socket'
import UseRef from './useRef'
import PositionsOfCss from './components/positionsOfCss'

function App() {
  const count = useSelector((state) => state.myCounter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <h1>{count}</h1>

        <SocketComponent />

        <UseRef />

        <PositionsOfCss />
      </div>
    </>
  )
}

export default App
