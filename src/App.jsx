import { useState } from "react";

function App() {
  const [red,setRed]=useState(0)
  const [green,setGreen]=useState(0)
  const [blue,setBlue]=useState(0)
  
  return (
    <>
      <div
      
       className="w-full h-screen flex flex-col  justify-center items-center">
        <h1 className="text-4xl text-white"
        >Color Generator</h1>
        <div  className="mt-5 w-3/6 h-auto bg-white">
          <div className="w-full flex justify-center gap-3 p-1">
            <input
              min={0}
              max={255}
              className="w-4/6 outline-none"
              onChange={(e)=>setRed(e.target.value)}
              type="range"
              name="red"
              value={red}
            />
            <div className="flex justify-center items-center gap-3 p-1">
              <span className="text-2xl">R</span>
              <input
                className="outline-none w-20 text-2xl  h-11 border-2 rounded-md bg-transparent px-2 border-blue-950"
                type="number"
                value={red}
                readOnly
                id=""
              />
            </div>
          </div>
          <div className="w-full flex justify-center gap-3 p-1">
            <input
              min={0}
              max={255}
              className="w-4/6 outline-none"
              type="range"
              name="green"
              onChange={(e)=>setGreen(e.target.value)}
              value={green}
            />
            <div className="flex justify-center items-center gap-3 p-1">
              <span className="text-2xl">G</span>
              <input
                className="outline-none w-20 text-2xl  h-11 border-2 rounded-md bg-transparent px-2 border-blue-950"
                type="number"
                name=""
                value={green}
                readOnly
              />
            </div>
          </div>
          <div className="w-full flex  justify-center gap-3 p-1">
            <input
              min={0}
              max={255}
              className="w-4/6 outline-none"
              type="range"
              name="blue"
              onChange={(e)=>setBlue(e.target.value)}
              value={blue}
            />
            <div className="flex justify-center items-center gap-3 p-1">
              <span className="text-2xl">B</span>
              <input
                className="outline-none w-20 text-2xl  h-11 border-2 rounded-md bg-transparent px-2 border-blue-950"
                type="number"
                name=""
                value={blue}
                id=""
                readOnly
              />
            </div>
          </div>
            <div 
            
            className="w-full px-3 py-3 flex justify-center items-center ">
              <p className="text-3xl">rgb({red},{green},{blue})</p>
            </div>
            <div style={{backgroundColor:`rgb(${red},${green},${blue})`}} className="w-full px-5 py-5">

            </div>
        </div>
      </div>
    </>
  );
}

export default App;
