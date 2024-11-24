import { About } from './components/About';
import { Hero } from './components/Hero';

const App = () => {
    return (
        <main className="relative no-scrollbar min-h-screen w-screen overflow-x-hidden">
            <Hero />
            <About />
        </main>
    );
};

/* 1.09 */

export default App;
