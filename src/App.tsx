import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ShowCases from './views/ShowCases';
//@ts-ignore
import AnimationBoy from './views/AnimationBoy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowCases />} />
        <Route path='/animationboy' element={<AnimationBoy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
