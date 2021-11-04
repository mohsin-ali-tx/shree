import "./App.css";

import img1 from "./images/loading.gif";

function App() {
  return (
    <div className="loader_bg">
      <div className="loader">
        <img src={img1} alt=""></img>
      </div>
    </div>
  );
}

export default App;
