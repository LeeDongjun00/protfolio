import type React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import { BsPatchCheckFill } from 'react-icons/bs';
import {
  otherExperienceData,
  otherExperienceDescription,
} from '../../constants/data';

/* =========================
   SECTION
========================= */
const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

/* =========================
   OTHER EXPERIENCE
========================= */
const OtherExperienceSection = styled.div`
  margin-top: 2rem;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 4rem;
  opacity: 0.8;
`;

const OtherExperienceTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const OtherExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  overflow: hidden;
`;

const OtherExperienceCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e5e8eb;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray.light};
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: calc(2rem - 3px);
  }
`;

const OtherExperienceIcon = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.65;
`;

const OtherExperienceHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OtherExperienceCardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const OtherExperienceSummary = styled.p`
  font-size: 0.92rem;
  opacity: 0.9;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.body};
`;

const OtherExperienceHighlights = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
`;

const OtherExperienceHighlight = styled.li`
  font-size: 0.86rem;
  opacity: 0.78;
  padding-left: 1rem;
  position: relative;
  color: ${({ theme }) => theme.colors.text.body};

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const OtherExperienceTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const OtherExperienceTech = styled.span`
  font-size: 0.75rem;
  padding: 0.32rem 0.62rem;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
`;

const OtherExperienceActions = styled.div`
  margin-left: auto;
`;

/* =========================
   CERTIFICATIONS
========================= */
const CertSection = styled.div`
  margin-top: 3.2rem;
`;

const CertTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin: 0 0 1.8rem;
  text-align: center;
`;

const CertWrap = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: ${({ theme }) => theme.colors.gray.light};
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.06);
  padding: 22px;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled(motion.div)`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(49, 130, 246, 0.16);
  padding: 14px 14px;
  display: flex;
  gap: 10px;
  align-items: flex-start;

  &:hover {
    border-color: rgba(49, 130, 246, 0.35);
    box-shadow: 0 10px 26px rgba(49, 130, 246, 0.12);
  }
`;

const CertIcon = styled.div`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 1px;

  svg {
    font-size: 18px;
  }
`;

const CertText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CertName = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 0.95rem;
`;

const CertMeta = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text.body};
  opacity: 0.8;
`;

/* =========================
   ANIMATION
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* =========================
   DATA (자격증)
   - 필요하면 여기만 수정하면 됨
========================= */
const certifications = [
  { name: '정보처리기사', meta: '필기 합격' },
  { name: '리눅스마스터 2급', meta: '' },
  { name: 'SQLD', meta: '' },
  { name: 'ADSP', meta: '' },
];

/* =========================
   COMPONENT
========================= */
export const OtherExperience: React.FC = () => {
  return (
    <Section id="projects">
      <OtherExperienceSection>
        <OtherExperienceTitle>&lt;Other Experience /&gt;</OtherExperienceTitle>

        <SectionDescription
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {otherExperienceDescription}
        </SectionDescription>

        <OtherExperienceGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {otherExperienceData.map((experience, index) => (
            <OtherExperienceCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              onClick={() => {
                if (experience.githubUrl) {
                  window.open(experience.githubUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <OtherExperienceIcon>
                <HiArrowUpRight />
              </OtherExperienceIcon>

              <OtherExperienceHeader>
                <OtherExperienceCardTitle>{experience.title}</OtherExperienceCardTitle>
                <OtherExperienceSummary>{experience.summary}</OtherExperienceSummary>

                {experience.highlights && (
                  <OtherExperienceHighlights>
                    {experience.highlights.map((h, i) => (
                      <OtherExperienceHighlight key={i}>{h}</OtherExperienceHighlight>
                    ))}
                  </OtherExperienceHighlights>
                )}

                <OtherExperienceTechStack>
                  {experience.techStack.map((tech, i) => (
                    <OtherExperienceTech key={i}>{tech}</OtherExperienceTech>
                  ))}
                </OtherExperienceTechStack>
              </OtherExperienceHeader>

              {experience.githubUrl && (
                <OtherExperienceActions onClick={(e) => e.stopPropagation()}>
                  <LinkButton
                    href={experience.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="outline"
                    $size="small"
                  >
                    <FaGithub /> GitHub
                  </LinkButton>
                </OtherExperienceActions>
              )}
            </OtherExperienceCard>
          ))}
        </OtherExperienceGrid>
      </OtherExperienceSection>

      <CertSection>
        <CertTitle>&lt;Certifications /&gt;</CertTitle>

        <CertWrap>
          <CertGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {certifications.map((c, idx) => (
              <CertCard key={idx} variants={itemVariants}>
                <CertIcon>
                  <BsPatchCheckFill />
                </CertIcon>

                <CertText>
                  <CertName>{c.name}</CertName>
                  {c.meta ? <CertMeta>{c.meta}</CertMeta> : <CertMeta>&nbsp;</CertMeta>}
                </CertText>
              </CertCard>
            ))}
          </CertGrid>
        </CertWrap>
      </CertSection>
    </Section>
  );
};
