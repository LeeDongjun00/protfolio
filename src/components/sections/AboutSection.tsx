// src/components/sections/About.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { coreValuesData, aboutData, strengthsData, whatIDoData } from '../../constants/data';

/* =========================
   SECTION
========================= */
const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const QuoteSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const QuoteMark = styled.span`
  display: none;
`;

/* ✅ 물감(브러시) 하이라이트 */
const BrushHighlight = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.15em 0.35em;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: -0.15em;
    right: -0.15em;
    top: 50%;
    transform: translateY(-50%) rotate(-2deg);
    height: 1.25em;
    border-radius: 999px;
    z-index: -1;
    background:
      radial-gradient(120% 120% at 10% 50%, rgba(49, 130, 246, 0.22) 0%, rgba(49, 130, 246, 0.12) 55%, rgba(49, 130, 246, 0.08) 100%),
      linear-gradient(90deg, rgba(49, 130, 246, 0.10), rgba(49, 130, 246, 0.18), rgba(49, 130, 246, 0.10));
    filter: blur(0.2px);
  }

  &::after {
    content: '';
    position: absolute;
    left: -0.25em;
    right: -0.25em;
    top: 50%;
    transform: translateY(-50%) rotate(1.5deg);
    height: 1.1em;
    border-radius: 999px;
    z-index: -2;
    background: rgba(49, 130, 246, 0.08);
  }
`;

const QuoteText = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.35;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

/* =========================
   SECTION TITLE
========================= */
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

/* =========================
   WHAT I DO (Hero → About 이동)
========================= */
const WhatIDoSection = styled.div`
  margin-bottom: 6rem;
`;

const FlowTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.body};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.text.heading};
  font-weight: 700;
`;

const WhatIDoBackground = styled.div`
  position: relative;
  padding: 3rem 2rem;
  margin-top: 1.5rem;
  border-radius: 24px;

  background: linear-gradient(
    180deg,
    rgba(49, 130, 246, 0.08) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );

  border: 1px solid rgba(49, 130, 246, 0.22);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(6px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const WhatIDoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FlowArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -28px;
  transform: translateY(-50%);
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray.border};
  opacity: 0.75;
  pointer-events: none;

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
  position: relative;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: #ffffff;
  border: 1px solid rgba(49, 130, 246, 0.18);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);

  ${({ $emphasis }) =>
    $emphasis &&
    `
      transform: scale(1.03);
      border-color: rgba(49, 130, 246, 0.35);
      box-shadow: 0 14px 30px rgba(49, 130, 246, 0.15);
    `}
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
   HOW I WORK (세로)
========================= */
const HowIWorkSection = styled.div`
  margin-bottom: 6rem;
`;

const HowIWorkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 920px;
  margin: 0 auto;
`;

const HowIWorkCard = styled(Card)`
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.6rem 1.8rem;
  background: ${({ theme }) => theme.colors.gray.card};
`;

const HowIWorkIcon = styled.div`
  flex: 0 0 auto;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.15rem;
`;

const HowIWorkIndex = styled.div`
  font-family: 'Fira Code', 'Consolas', monospace;
  font-weight: 800;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  margin-bottom: 0.35rem;
`;

const HowIWorkTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const HowIWorkDesc = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
`;

/* =========================
   WHAT I'M GOOD AT (가로)
========================= */
const StrengthsSection = styled.div`
  margin-bottom: 6rem;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const StrengthCard = styled(Card)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  padding: 2rem 1.8rem;
  background: ${({ theme }) => theme.colors.gray.card};
`;

const StrengthIcon = styled.div`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.2rem;
`;

const StrengthTitle = styled.h3`
  font-size: 1.45rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const StrengthDesc = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
`;

/* =========================
   JSON / CONFIG CARD (내 소개카드)
========================= */
const InformationSection = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const JsonCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

const JsonHeader = styled.div`
  padding: 0.9rem 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const JsonTitle = styled.div`
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.body};
  opacity: 0.85;
`;

const Badge = styled.span`
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(49, 130, 246, 0.25);
  background: rgba(49, 130, 246, 0.08);
`;

const JsonBody = styled.div`
  padding: 1.4rem 1.5rem;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.92rem;
  line-height: 1.85;
  color: #111827;
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.2rem 1.1rem;
    font-size: 0.88rem;
  }
`;

const Line = styled.div`
  white-space: pre;
`;

const Key = styled.span`
  color: #0f766e;
  font-weight: 700;
`;

const JsonString = styled.span`
  color: #1d4ed8;
`;

const Punc = styled.span`
  color: #6b7280;
`;

/* =========================
   ANIMATION
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* =========================
   COMPONENT
========================= */
export const AboutSection: React.FC = () => {
  const info = aboutData.information;

  return (
    <Section id="about">
      <QuoteSection>
        <QuoteMark>"</QuoteMark>

        <QuoteText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BrushHighlight>
            데이터 흐름을 이해하고,<br /> 안정적인 서비스를 구현하는 개발자입니다
          </BrushHighlight>
        </QuoteText>
      </QuoteSection>

      <WhatIDoSection>
        <FlowTitle>
          <Highlight>기획부터 구현, 배포와 운영까지</Highlight> 전 과정을 설계하고 구현합니다.
        </FlowTitle>

        <WhatIDoBackground>
          <WhatIDoGrid variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
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

      <HowIWorkSection>
        <SectionTitle>&lt;How I Work /&gt;</SectionTitle>

        <HowIWorkList
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreValuesData.map((value, index) => {
            const Icon = value.icon;
            return (
              <HowIWorkCard key={index} as={motion.div} variants={itemVariants}>
                <HowIWorkIcon>
                  <Icon />
                </HowIWorkIcon>

                <div>
                  <HowIWorkIndex>{`${index + 1}`.padStart(2, '0')}</HowIWorkIndex>
                  <HowIWorkTitle>{value.title}</HowIWorkTitle>
                  <HowIWorkDesc>{value.description}</HowIWorkDesc>
                </div>
              </HowIWorkCard>
            );
          })}
        </HowIWorkList>
      </HowIWorkSection>

      <StrengthsSection>
        <SectionTitle>&lt; What I’m Good At /&gt;</SectionTitle>

        <StrengthsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {strengthsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <StrengthCard key={index} as={motion.div} variants={itemVariants}>
                <StrengthIcon>
                  <Icon />
                </StrengthIcon>
                <StrengthTitle>{item.title}</StrengthTitle>
                <StrengthDesc>{item.description}</StrengthDesc>
              </StrengthCard>
            );
          })}
        </StrengthsGrid>
      </StrengthsSection>

      {/* ✅ 내 소개 카드(JSON / Config) */}
      <InformationSection
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <JsonCard>
          <JsonHeader>
            <JsonTitle>profile.config.json</JsonTitle>
            <Badge>CONFIG</Badge>
          </JsonHeader>

          <JsonBody>
            <Line>
              <Punc>{'{'}</Punc>
            </Line>

            <Line>
              {'  '}
              <Punc>"</Punc>
              <Key>name</Key>
              <Punc>"</Punc>
              <Punc>: </Punc>
              <JsonString>"{info.name}"</JsonString>
              <Punc>,</Punc>
            </Line>

            <Line>
              {'  '}
              <Punc>"</Punc>
              <Key>education</Key>
              <Punc>"</Punc>
              <Punc>: </Punc>
              <JsonString>"{info.education}"</JsonString>
              <Punc>,</Punc>
            </Line>

            <Line>
              {'  '}
              <Punc>"</Punc>
              <Key>contact</Key>
              <Punc>"</Punc>
              <Punc>: </Punc>
              <JsonString>"{info.contact}"</JsonString>
              <Punc>,</Punc>
            </Line>

            <Line>
              {'  '}
              <Punc>"</Punc>
              <Key>github</Key>
              <Punc>"</Punc>
              <Punc>: </Punc>
              <JsonString>"{info.notion}"</JsonString>
            </Line>

            <Line>
              <Punc>{'}'}</Punc>
            </Line>
          </JsonBody>
        </JsonCard>
      </InformationSection>
    </Section>
  );
};
