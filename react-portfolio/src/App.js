import './App.scss';
import { Sidebar} from './components/Sidebar';
import { Banner} from './components/Banner';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className= "App">
      <Sidebar/>
      <Banner/>
    </div>
  );
}

export default App;
