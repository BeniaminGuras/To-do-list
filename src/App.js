import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Container>
    </main>
  );
};

export default App;