import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

// const heading = React.createElement("h1",{},"namaste react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//  const HeadingJsx = () => (<h1 id = "heading" className = "head" tabIndex = "5">Namaste React by using jsx..</h1>)

//  const element = <h2>This is a react element...</h2>

//  //React functional Component
//  const HeadingComponent = () => {
//     return (
//         <div>
//             <HeadingJsx/>
//     <h1>Namaste React functionala component ak..</h1>
//     {element}
//     </div>
// )
//  }





const Applayout = () =>{
    return ( 
    <div className = "app">
      <Header/>
      <Body/>
    </div>)
}
 const root = ReactDOM.createRoot(document.getElementById("root")); 
 root.render(<Applayout/>);
 