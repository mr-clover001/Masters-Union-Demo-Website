import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MainSection from './Component/Sections/Main-Section/MainSection';
import CoursesSection from './Component/Sections/Courses-Section/CourseSection';
import ResidentSection from './Component/Sections/Resident-Section/ResidentSection';
import MastersSection from './Component/Sections/Master-Section/MastersSection';
import NewsSection from './Component/Sections/News-Section/NewsSection';
import ContactSection from './Component/Sections/Contact-Section/ContactSection';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <CoursesSection />
      <ResidentSection />
      <MastersSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
