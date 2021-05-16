import { lazy, Suspense } from "react";
import { Education, Footer, Header, HeroSection, Skills } from "./components";
const ContactForm = lazy(() => import("./components/ContactForm"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div style={{ minHeight: window.screen.availHeight }}>
        <Header />
        <HeroSection />
        <Education />
        <Skills />
        <ContactForm />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
