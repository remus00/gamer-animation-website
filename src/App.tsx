import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

const App = () => {
    return (
        <main className="relative no-scrollbar min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
        </main>
    );
};

/* 1.09 */

export default App;
