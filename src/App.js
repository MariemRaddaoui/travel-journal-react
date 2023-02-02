import './App.css';
import Country from './components/Country';
import Navbar from './components/Navbar';
import Data from './Data';

function App() {
    const contries= Data.map( (item)=>
        ( <Country
          key={item.id}
          item={item} />
          )
        )
  return (
    <div className="App">
      <Navbar/>
      {contries}
    </div>
  );
}

export default App;
