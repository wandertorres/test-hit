import { Routes, Route } from 'react-router-dom';
import { Home, Contact } from './pages';
import { Header } from './pages/_layout/Header';

function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/contact' element={ <Contact /> } />
            </Routes>
        </main>
    );
}

export default App;
