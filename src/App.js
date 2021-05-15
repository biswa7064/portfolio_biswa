import { lazy, Suspense } from "react";
import { Education, HeroSection, Skills } from "./components";
const ContactForm = lazy(() => import("./components/ContactForm"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div style={{ minHeight: window.screen.availHeight }}>
        <HeroSection />
        <Education />
        <Skills />
        <ContactForm />
      </div>
    </Suspense>
  );
}

export default App;
