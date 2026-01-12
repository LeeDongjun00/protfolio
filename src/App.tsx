// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';

import HeroSection from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

// ✅ Experience.tsx에서 named + default 둘 다 export 해두었지만,
// 여기서는 기존대로 named import 유지합니다.
import { Experience } from './components/sections/Experience';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <HeroSection />
      <Experience />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </ThemeProvider>
  );
}

export default App;
