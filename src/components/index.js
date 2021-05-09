import HeroSection from "./HeroSection";
import Education from "./Education";
import { lazy } from "react";
const Skills = lazy(() => import("./Skills"));

export { HeroSection, Education, Skills };
