import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import SpellChecker from './pages/spellchecker/SpellChecker';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<SpellChecker />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
