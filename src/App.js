import './App.css';
import Topribbon from "./components/topribbon";
import Building from "./components/building";
import News from "./components/news";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Topribbon />
      <Building />
      {/* <Services /> */}
    </div>
  );
}

export default App;
