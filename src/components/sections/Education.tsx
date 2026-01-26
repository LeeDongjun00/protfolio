import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { SectionTitle } from '../common/SectionTitle';
import { timelineData, projectsData, featuredProjectsDescription } from '../../constants/data';

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

const pulse = keyframes`
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.15); opacity: 0.65; }
  100% { transform: scale(1); opacity: 1; }
`;

const TopPoint = styled.div`
  position: absolute;
  left: 9px;
  top: -15px;
  width: 20px;
  height: 20px;
  z-index: 3;
  animation: ${pulse} 1.2s ease-in-out infinite;

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

const Item = styled(motion.div)`
  position: relative;
  padding-bottom: 70px;

  &:last-child {
    padding-bottom: 0;
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

const ProjectInline = styled.div``;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 0;
  min-height: 340px;

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
  min-height: 320px;

  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1e6fe8 100%);
  
  margin-left: -12px;
  
  border: 2px solid #374151;
  box-shadow: 0 4px 25px ${({ theme }) => theme.colors.primary}40;

  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.primary}80;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    min-height: 240px;
  }
`;

const ProjectGlass = styled.div`
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px) saturate(180%);
  
  border: 2px solid ${({ theme }) => theme.colors.primary};

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
  justify-content: center;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Education: React.FC = () => {
  const navigate = useNavigate(); // 👈 [추가됨] 페이지 이동 함수

  return (
    <Section id="education">
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
        <TopPoint />

        {timelineData.map((t, idx) => {
          const p = projectsData[idx];

          return (
            <Item key={`${t.date}-${idx}`} variants={itemVariants}>
              <ContentStack>
                <TimelineCard $shadow>
                  <Date>{t.date}</Date>
                  <Title>{t.title}</Title>
                  <Body>{t.description}</Body>
                </TimelineCard>

                {p ? (
                  <ProjectInline>
                    <ProjectCard>
                      <ProjectThumb>
                        {p.thumbnail ? <img src={p.thumbnail} alt={p.title} /> : null}
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
                          {/* 1. 깃허브 버튼 */}
                          {Array.isArray(p.githubUrl) ? (
                            p.githubUrl.map((url, ui) => (
                              <LinkButton
                                key={ui}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                $variant="primary"
                              >
                                <FaGithub /> GitHub
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

                          {/* 2. 상세 리뷰 버튼 */}
                          {p.detailUrl && (
                            <LinkButton
                              href={p.detailUrl} 
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault(); 
                                navigate(p.detailUrl!); 
                              }}
                              $variant="outline"
                            >
                              <FaBookOpen /> My Contribution
                            </LinkButton>
                          )}
                        </Actions>
                      </ProjectGlass>
                    </ProjectCard>
                  </ProjectInline>
                ) : null}
              </ContentStack>
            </Item>
          );
        })}
      </TimelineWrap>
    </Section>
  );
};