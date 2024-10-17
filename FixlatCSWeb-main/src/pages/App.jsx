import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContextView from './ContextView';

function App() {
  return (
      <div>
        <Routes>
          {/* Define your routes here */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/quienes-somos' element={<ContextView/>}/>
          {/*
            <Route path='/admin/*' element={<Admin />} />
            */}
        </Routes>
      </div>
  );
}

export default App;