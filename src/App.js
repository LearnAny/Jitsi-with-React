import "./App.css";
import { useState } from "react";
import Jitsi from "./Component/jitsi";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [openJitsi, setopenJitsi] = useState(false);
  const uuId = uuidv4();

  return openJitsi ? (
    <>
      <div>
        <Jitsi uuId={uuId} />
      </div>
    </>
  ) : (
    <div className="App">
      <div>
        <h1>React App with Jitsi Integration</h1>
        <button className="btn" onClick={() => setopenJitsi(true)}>
          Video Conference
        </button>
      </div>
    </div>
  );
}

export default App;
