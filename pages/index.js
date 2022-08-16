import Footer from '../components/footer';
import Header from '../components/header';
import HomePage from './home';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <HomePage />
        <Footer />
      </main>
    </div>
  );
}
