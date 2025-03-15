import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
