// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';

import HeroSection from './components/sections/HeroSection';
import { Education } from './components/sections/Education';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { TroubleShooting } from './components/sections/TroubleShooting';
import { OtherExperience } from './components/sections/OtherExperienceSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <HeroSection />
      <Education />
      <AboutSection />
      <SkillsSection />
      <TroubleShooting />
      <OtherExperience />
    </ThemeProvider>
  );
}

export default App;
