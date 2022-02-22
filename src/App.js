import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import HorizontalDataMian from './Component/HorizontalData/HorizontalDataMian';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verticalMode" element={<Home />} />
          <Route path="/horizontalMode" element={<HorizontalDataMian></HorizontalDataMian>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
