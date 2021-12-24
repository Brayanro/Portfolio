import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';


const Index = () => {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </Layout>
    </>
  )
}

export default Index