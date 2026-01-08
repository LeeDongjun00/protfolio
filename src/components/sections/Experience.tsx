// src/components/sections/Experience.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { SectionTitle } from '../common/SectionTitle';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import { timelineData, projectsData, featuredProjectsDescription } from '../../constants/data';

/**
 * ✅ 목적: 타임라인 + 프로젝트를 "한 흐름"으로 보여주는 섹션
 * - timelineData 각 항목 아래에 projectsData 카드(썸네일+설명+태그+깃허브) 끼워 넣기
 * - 매핑은 EXPERIENCE_PROJECT_MAP만 바꾸면 됨
 */
const EXPERIENCE_PROJECT_MAP: Record<number, number[]> = {
  0: [0],
  1: [1],
  // 필요하면 계속 추가
};

const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const Description = styled(motion.p)`
  text-align: center;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
  max-width: 860px;
  margin: 0 auto 3.5rem;
  opacity: 0.85;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.98rem;
    margin-bottom: 3rem;
  }
`;

const TimelineWrap = styled.div`
  position: relative;
  padding-left: 52px;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 18px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 16px;
  }
`;

const Item = styled(motion.div)`
  position: relative;
  padding-bottom: 38px;

  &:last-child {
    padding-bottom: 0;
  }
`;

const Point = styled.div`
  position: absolute;
  left: 8px;
  top: 6px;
  width: 20px;
  height: 20px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px rgba(49, 130, 246, 0.12);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 6px;
  }
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TimelineCard = styled(Card)`
  padding: 18px 22px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 18px;
  }
`;

const Date = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 6px;
  line-height: 1.35;
`;

const Body = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.7;
  opacity: 0.9;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const MiniLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(49, 130, 246, 0.25);
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(49, 130, 246, 0.06);
`;

const ProjectInline = styled.div``;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0;
  min-height: 280px;
  position: relative;
  overflow: visible;
  border-radius: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const ProjectThumb = styled.div`
  position: relative;
  min-height: 260px;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #1e6fe8 100%
  );
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.16);
  margin-left: -12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    min-height: 220px;
  }
`;

const ProjectGlass = styled.div`
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  margin-left: -18px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: -16px;
  }
`;

const ProjectName = styled.h4`
  margin: 0 0 8px;
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.25;
`;

const ProjectDesc = styled.p`
  margin: 0 0 12px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.body};
  opacity: 0.9;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(49, 130, 246, 0.25);
  background: rgba(49, 130, 246, 0.06);
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <SectionTitle $align="center">Education & Experience</SectionTitle>

      <Description
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {featuredProjectsDescription}
      </Description>

      <TimelineWrap
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <VerticalLine />

        {timelineData.map((t, idx) => {
          const projectIndexes = EXPERIENCE_PROJECT_MAP[idx] || [];
          const relatedProjects = projectIndexes
            .map((pi) => projectsData[pi])
            .filter(Boolean);

          return (
            <Item key={idx} variants={itemVariants}>
              <Point />

              <ContentStack>
                <TimelineCard $shadow>
                  <Date>{t.date}</Date>
                  <Title>{t.title}</Title>
                  <Body>{t.description}</Body>

                  {relatedProjects.length > 0 && (
                    <LabelRow>
                      <MiniLabel>
                        <HiArrowUpRight /> PROJECT
                      </MiniLabel>
                    </LabelRow>
                  )}
                </TimelineCard>

                {relatedProjects.map((p, pIdx) => (
                  <ProjectInline key={`${idx}-${pIdx}`}>
                    <ProjectCard>
                      <ProjectThumb>
                        {p.thumbnail ? (
                          <img src={p.thumbnail} alt={p.title} />
                        ) : null}
                      </ProjectThumb>

                      <ProjectGlass>
                        <ProjectName>{p.title}</ProjectName>
                        <ProjectDesc>{p.description}</ProjectDesc>

                        <TagRow>
                          {p.tags?.map((tag, ti) => (
                            <Tag key={ti}>#{tag}</Tag>
                          ))}
                        </TagRow>

                        <Actions>
                          {Array.isArray(p.githubUrl) ? (
                            p.githubUrl.map((url, ui) => (
                              <LinkButton
                                key={ui}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                $variant="primary"
                              >
                                <FaGithub /> {ui === 0 ? 'Backend' : 'Frontend'}
                              </LinkButton>
                            ))
                          ) : p.githubUrl ? (
                            <LinkButton
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              $variant="primary"
                            >
                              <FaGithub /> GitHub
                            </LinkButton>
                          ) : null}
                        </Actions>
                      </ProjectGlass>
                    </ProjectCard>
                  </ProjectInline>
                ))}
              </ContentStack>
            </Item>
          );
        })}
      </TimelineWrap>
    </Section>
  );
};
