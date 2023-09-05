import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import TeamDetails from './TeamDetails';

function App() {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<Players />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/:teamId' element={<TeamDetails />} />
      </Routes>
    </main>
  );
}

export default App;
