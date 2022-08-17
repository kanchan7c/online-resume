import HomePage from './home';
import Projects from './projects';
import Skills from './skills';
import Experience from './experience';
import Contact from './contact';
import About from './about';

export default function Home() {
  return (
    <>
      <div>
        <main>
          <HomePage />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}
