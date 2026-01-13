import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Experience } from './components/sections/Experience';
import { TroubleShooting } from './components/sections/TroubleShutting';
 
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <Experience />
      <AboutSection />
      <SkillsSection />
      <TroubleShooting />
      <ProjectsSection />
    </ThemeProvider>
  );
}

export default App;
