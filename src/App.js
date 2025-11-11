import Header from './components/Header';
import NewsletterPodcast from "./components/NewsletterPodcast";
import RelatedContent from "./components/RelatedContent";
import HeroSection from "./components/HeroSection";
import ChartSection from "./components/ChartSection";
import Footer from './components/Footer';


export default function App() 
  
  {
    return (
    <>
      <Header />
      <HeroSection />
      <ChartSection />
      <RelatedContent />
      <NewsletterPodcast />
      <Footer />
    </>
  );
  }

