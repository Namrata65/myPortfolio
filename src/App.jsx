import './App.css'
import NavBar from './components/NavBar'
import MainHeader from './components/MainHeader';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import FooterSection from './components/FooterSection';

function App() {

  return (
    <>
      <NavBar />
      <MainHeader />
      <Introduction />
      <Skills/>
      <Services />
      <ContactUs />
      <FooterSection />
    </>
  );
}

export default App
