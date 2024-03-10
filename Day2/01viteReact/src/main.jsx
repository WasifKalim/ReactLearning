import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
  return (
    <div>
      <h1>Hello Wasif using inline function</h1>
    </div>
  );
}



const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "React & Wasif"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank' 
  },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).
render(
  <>
    {reactElement}
  </>
);
/*
<>
    <App />
    <MyApp />
    <Chai />
   <reactElement /> 
</> 
*/