import type React from 'react';
import styled from 'styled-components';
import type React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { introData, whatIDoData, timelineData } from '../../constants/data';

const Section = styled.section`
  padding: 120px 2rem 80px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 100px 1.5rem 60px;
  }
`;

/* 위 기술 스택 아이콘  */
const TechIcon = styled.div<{ $color?: string }>`
  font-size: 48px;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 6rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(49, 130, 246, 0.3);
  border: 4px solid white;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 150px;
    height: 150px;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Headline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtext = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
`;

const TechStackTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    gap: 2rem;
  }
`;

/* =========================
   What I Do (배경 박스 + 흐름 카드)
========================= */

const WhatIDoSection = styled.div`
  margin-bottom: 6rem;
`;

const FlowTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.body};
  text-align: center;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
    margin-bottom: 1.25rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.text.heading};
  font-weight: 700;
`;

/* ✅ 요청: 이 영역 뒤에 “되게 흐린 박스” */
const WhatIDoBackground = styled.div`
  position: relative;
  padding: 3rem 2rem;
  margin-top: 2.25rem;
  border-radius: 24px;

  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);

  backdrop-filter: blur(6px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
    margin-top: 1.75rem;
  }
`;

const WhatIDoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

/* 화살표 */
const FlowArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -28px; /* 카드 밖으로 살짝 침범 */
  transform: translateY(-50%);
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray.border};
  opacity: 0.75;
  pointer-events: none;
  z-index: 5;

  /* 화살표를 원형에 넣기 */
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const WhatIDoItem = styled(motion.div)`
  position: relative;
`;

const WhatIDoCard = styled(Card)<{ $emphasis?: boolean }>`
  position: relative; /* ✅ 화살표 absolute 기준 */
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  /* 중앙(Backend)만 살짝 강조 */
  ${({ $emphasis }) =>
    $emphasis
      ? `
    transform: scale(1.03);
  `
      : ``}
`;

const WhatIDoIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const WhatIDoCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const WhatIDoDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
`;

/* =========================
   Timeline
========================= */

const TimelineSection = styled.div``;

const TimelineTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2.5rem;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: calc(-1.5rem + 10px);
    top: 20px;
    bottom: 3rem;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 0;
    transform: translateX(-50%);
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 20px;
  height: 20px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px rgba(49, 130, 246, 0.3);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid white;
    z-index: 2;
  }
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const TimelineItemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const TimelineItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.7;
  font-size: 0.95rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero">
      <IntroArea>
        <ProfileImageWrapper>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <ProfileImage src="/assets/identification.png" alt="프로필 사진" />
          </motion.div>
        </ProfileImageWrapper>

        <IntroText>
          <Headline>
            {introData.headline.map((line, index) => (
              <span
                key={index}
                style={{
                  display: 'block',
                  marginLeft: index === 1 ? '180px' : '0',
                }}
              >
                {line}
              </span>
            ))}
          </Headline>

          <Subtext
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {introData.subtext}
          </Subtext>

          <TechStackTags
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {introData.techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <TechIcon key={index} $color={tech.color} title={tech.name}>
                  <Icon />
                </TechIcon>
              );
            })}
          </TechStackTags>
        </IntroText>
      </IntroArea>

      <WhatIDoSection>
        <FlowTitle>
          <Highlight>기획부터 구현, 배포와 운영까지</Highlight> 전 과정을 설계하고 구현합니다.
        </FlowTitle>

        <WhatIDoBackground>
          <WhatIDoGrid variants={containerVariants} initial="hidden" animate="visible">
            {whatIDoData.map((item, index) => {
              const Icon = item.icon;
              const isBackend = item.title.toLowerCase() === 'backend';
              const isLast = index === whatIDoData.length - 1;

              return (
                <WhatIDoItem key={index} variants={itemVariants}>
                  <WhatIDoCard $shadow $emphasis={isBackend}>
                    <WhatIDoIcon>
                      <Icon />
                    </WhatIDoIcon>

                    <WhatIDoCardTitle>{item.title}</WhatIDoCardTitle>
                    <WhatIDoDescription>{item.description}</WhatIDoDescription>

                    {!isLast && <FlowArrow>→</FlowArrow>}
                  </WhatIDoCard>
                </WhatIDoItem>
              );
            })}
          </WhatIDoGrid>
        </WhatIDoBackground>
      </WhatIDoSection>
    </Section>
  );
};

export default HeroSection;