import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atom/count";
import { evenSelector } from "./store/selector/evenSelector";

function App(){
  return <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  </div>
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer(){
  const count  = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
    <EvenSelector />
  </div>
}

function EvenSelector(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "even hai" : "nahi hai even"}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  console.log("count rerenderer")
  return <div>
    <button onClick={ () =>{setCount(count => count + 1)} }> INC </button>
    <button onClick={ () =>{setCount(count => count - 1)} }>DNC</button>
  </div>
}

export default App;