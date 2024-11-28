import Example from "./examples";
import Intro from "./Introduction";
import Timer from "./useEffect";
import Counter from "./usestate";


function App(){
  return(
    <>
    <h1 className="btn">use_state demostration </h1>
    <div>
      <Counter/>
    </div>
    

    <div className="dot">
      <Intro/>
    </div>
    <h1>example of useEffect</h1>

<div className="btn">
  <Timer/>
</div>

<div>
  <Example/>
</div>
    
    </>
  )
}

export default App