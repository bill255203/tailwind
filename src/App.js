import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scene1 from './scene1.js';
import Scene2 from './scene2.js';
import Scene3 from './scene3.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Scene1 />} />
        <Route path='/2' element={<Scene2 />} />
        <Route path='/3' element={<Scene3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
