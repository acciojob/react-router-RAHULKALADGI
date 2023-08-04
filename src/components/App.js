import React from "react";
import './../styles/App.css';


const App =()=> {

return (
  <div>
    <ul>
      <li>
      <a href="/" >Home</a>
      </li>
      <li>
      <a href="/about" >About</a>
      </li>
    </ul>
    {
      document.URL.endsWith("about") ? <About/> : <Home/>
    }
    
  </div>
)

}

const Home = ()=> {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    </div>
  )
}
const About = ()=> {
  return (
    <div>
      <h2>About</h2>
      <p>This is the sample React Router program.</p>
    </div>
  )
}


export default App
