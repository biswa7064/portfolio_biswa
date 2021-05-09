import { Suspense } from "react";
import { Education, HeroSection, Skills } from "./components";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div style={{ minHeight: "100vh" }}>
        <HeroSection />
        <Education />
        <Skills />
      </div>
    </Suspense>
  );
}

export default App;
