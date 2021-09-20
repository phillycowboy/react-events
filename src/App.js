// import logo from './logo.svg';
// import AnnoyingForm from './AnnoyingForm';
import './App.css';
// import CopyDemo from './CopyDemo';
import WiseSquare from './WiseSquare';
import WiseSquareWithProps from './WiseSquareWithProps';

function App() {
  return (
    <div className="App">
        <h1>React Events!</h1>
        <h3>Hover Over Me and Look in Your Dev Tools</h3>
        <WiseSquare />
        <WiseSquareWithProps />
        {/* <AnnoyingForm /> */}
        {/* <CopyDemo /> */}
    </div>
  );
}

export default App;
