// src/components/sections/Hero.tsx
import styled from 'styled-components';
import type React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  SiSpringboot,
  SiReact,
  SiFlutter,
  SiOracle,
  SiAmazonaws,
} from 'react-icons/si';

/* =========================
   SECTION
========================= */
const Section = styled.section`
  padding: 140px 2rem 100px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 110px 1.5rem 80px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

/* =========================
   LEFT
========================= */
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const Role = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #f97316; /* 포인트 오렌지 */
`;

const TechRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const TechIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Slogan = styled.p`
  margin-top: 1.2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.6;
`;

/* =========================
   ACTION
========================= */
const ActionRow = styled.div`
  margin-top: 1.8rem;
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(49, 130, 246, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(49, 130, 246, 0.45);
  }
`;

/* =========================
   RIGHT
========================= */
const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileFrame = styled.div`
  width: 240px;
  height: 300px;
  border-radius: 12px;
  background: #fff;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  display: grid;
  place-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`;

/* =========================
   COMPONENT
========================= */
export const HeroSection: React.FC = () => {
  return (
    <Section id="hero">
      <HeroGrid>
        {/* LEFT */}
        <Left as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Name>Lee Dongjun</Name>
          <Role>Full-stack Developer</Role>

          <TechRow>
            <TechIcon title="Spring Boot">
              <SiSpringboot />
            </TechIcon>
            <TechIcon title="React">
              <SiReact />
            </TechIcon>
            <TechIcon title="Flutter">
              <SiFlutter />
            </TechIcon>
            <TechIcon title="Oracle">
              <SiOracle />
            </TechIcon>
            <TechIcon title="AWS">
              <SiAmazonaws />
            </TechIcon>
          </TechRow>

          <Slogan>
            “아이디어를 코드로 증명하고,<br />
            서비스로 완성하는 개발자입니다”
          </Slogan>

          <ActionRow>
            <GithubButton
              href="https://github.com/wantraiseapomeranian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </GithubButton>
          </ActionRow>
        </Left>

        {/* RIGHT */}
        <Right as={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <ProfileFrame>
            <ProfileImage src="/assets/identification.png" alt="프로필 사진" />
          </ProfileFrame>
        </Right>
      </HeroGrid>
    </Section>
  );
};
