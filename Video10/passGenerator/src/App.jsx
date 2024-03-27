import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)


  // for optimized by taking the dependencies in cache
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#$%^&*()_+=[]~`";

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random()* str.length + 1)
        pass += str.charAt(char);
    }
    setPassword(pass);
    // dependencies of useCallback by caching it in cherchar
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Copying to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // use to show effect to client
    // passwordRef.current?.setSelectionRange(0, 33); // hightlight the text range
    window.navigator.clipboard.writeText(password);
  }, [password])

  // inme koi bhi dependencies m cherchar ho to run krdo
  useEffect(()=> {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shoadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className=" text-white text-center my-3 ">Password Generator</h1>

        {/* password field and btn */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name=""
            value={password}
            className="outline w-full py-1 px-3"
            placeholder="password"
            readOnly
            id=""
            // use to take reference using useRef hook
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4">
          {/* scroll-bar */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              name=""
              id=""
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> length: {length}</label>
          </div>
            
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
