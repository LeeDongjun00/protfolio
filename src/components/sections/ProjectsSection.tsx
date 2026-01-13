import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { SectionTitle } from '../common/SectionTitle';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import {
  otherExperienceData,
  otherExperienceDescription,
  // projectsData,
  // featuredProjectsDescription,
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
   ❌ FEATURED PROJECTS (주석 처리)
========================= */
// const FeaturedProjectsSection = styled.div`
//   margin-bottom: 8rem;
// `;

// const FeaturedProjectsGrid = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `;

// const ProjectCard = styled.div`
//   ...
// `;

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
  opacity: 0.6;
`;

const OtherExperienceHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OtherExperienceCardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const OtherExperienceSummary = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
`;

const OtherExperienceHighlights = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
`;

const OtherExperienceHighlight = styled.li`
  font-size: 0.85rem;
  opacity: 0.75;
  padding-left: 1rem;
  position: relative;

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
  padding: 0.3rem 0.6rem;
  border: 1px solid #e5e8eb;
  border-radius: 6px;
`;

const OtherExperienceActions = styled.div`
  margin-left: auto;
`;

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
export const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects">
      {/* ❌ Featured Projects 전체 주석 처리 */}
      {/*
      <FeaturedProjectsSection>
        ...
      </FeaturedProjectsSection>
      */}

      {/* ✅ Other Experience만 유지 */}
      <OtherExperienceSection>
        <OtherExperienceTitle>Other Experience</OtherExperienceTitle>

        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                <OtherExperienceCardTitle>
                  {experience.title}
                </OtherExperienceCardTitle>

                <OtherExperienceSummary>
                  {experience.summary}
                </OtherExperienceSummary>

                {experience.highlights && (
                  <OtherExperienceHighlights>
                    {experience.highlights.map((h, i) => (
                      <OtherExperienceHighlight key={i}>
                        {h}
                      </OtherExperienceHighlight>
                    ))}
                  </OtherExperienceHighlights>
                )}

                <OtherExperienceTechStack>
                  {experience.techStack.map((tech, i) => (
                    <OtherExperienceTech key={i}>
                      {tech}
                    </OtherExperienceTech>
                  ))}
                </OtherExperienceTechStack>
              </OtherExperienceHeader>

              {experience.githubUrl && (
                <OtherExperienceActions
                  onClick={(e) => e.stopPropagation()}
                >
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
    </Section>
  );
};
