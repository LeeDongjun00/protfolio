import type React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaAws, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiOracle } from 'react-icons/si';
import { introData, aboutData } from '../../constants/data';

/* =========================
   LAYOUT
========================= */

const Section = styled.section`
  padding: 120px 2rem 80px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const HeroCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 28px;
  padding: 44px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

/* =========================
   TEXT
========================= */

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Role = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #f97316;
`;

const Slogan = styled.div`
  margin-top: 14px;
  font-size: 1.3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const SubText = styled.p`
  font-size: 1.02rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.body};
  opacity: 0.9;
`;

/* =========================
   ICONS
========================= */

const TechRow = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 10px;

  svg {
    font-size: 30px;
  }
`;

/* =========================
   PROFILE
========================= */

const PhotoFrame = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(59, 130, 246, 0.4);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GithubButton = styled.a`
  width: 250px;
  padding: 12px 0;
  border-radius: 12px;
  background: #3b82f6;
  color: #fff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;

  &:hover {
    background: #2563eb;
  }
`;

/* =========================
   CONTACT (CARD OUTSIDE)
========================= */

const ContactBar = styled(motion.div)`
  margin-top: 22px;
  display: flex;
  gap: 28px;
  padding-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.body};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* =========================
   COMPONENT
========================= */

export const HeroSection: React.FC = () => {
  const githubUrl = aboutData.information.notion;

  return (
    <Section id="hero">
      <HeroCard
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Left>
          <Name>Lee Dongjun</Name>
          <Role>Full-stack Developer</Role>

          <Slogan>
            “아이디어를 코드로 증명하고, 서비스로 완성하는 개발자입니다.”
          </Slogan>

          <SubText>{introData.subtext}</SubText>

          <TechRow>
            <SiSpringboot color="#6DB33F" />
            <FaReact color="#61DAFB" />
            <SiFlutter color="#02569B" />
            <SiOracle color="#F80000" />
            <FaAws color="#FF9900" />
          </TechRow>
        </Left>

        <Right>
          <PhotoFrame>
            <img src="/assets/identification.png" alt="profile" />
          </PhotoFrame>

          <GithubButton href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </GithubButton>
        </Right>
      </HeroCard>

      {/* 연락처 - 카드 바깥 */}
      <ContactBar
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <ContactItem>
          <FaEnvelope />
          {/* 여기에 이메일 입력 */}
          dongjun032061@gmail.com
        </ContactItem>

        <ContactItem>
          <FaPhoneAlt />
          {/* 여기에 전화번호 입력 */}
          010-8951-0249
        </ContactItem>
      </ContactBar>
    </Section>
  );
};
