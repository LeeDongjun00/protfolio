import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

//연결 페이지 임포트
import { MyWorkMode } from './Flutter'; 
import { SpringProject } from './Spring'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <main>
                  <HeroSection />
                  <Education />
                  <AboutSection />
                  <SkillsSection />
                  <TroubleShooting />
                  <OtherExperience />
                </main>
              </>
            } 
          />

          {/* 상세 페이지 */}
          <Route path="/project/mode" element={<MyWorkMode />} />
          
          <Route path="/project/spring" element={<SpringProject />} /> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;