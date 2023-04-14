import './App.scss';
import { Sidebar } from './components/Sidebar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className= "App">
      <Sidebar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
