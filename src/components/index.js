import HeroSection from "./HeroSection";
import Education from "./Education";
import { lazy } from "react";
const Skills = lazy(() => import("./Skills"));
const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));

export { HeroSection, Education, Skills, Footer, Header };
