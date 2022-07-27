import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowCases from './views/ShowCases';
//@ts-ignore
import AnimationBoy from './views/AnimationBoy';
//@ts-ignore
import SwordMan from './views/SwordMan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowCases />} />
        <Route path='/animationboy' element={<AnimationBoy />} />
        <Route path='/swordman' element={<SwordMan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
