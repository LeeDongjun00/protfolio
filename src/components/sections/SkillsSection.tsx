// SkillsSection.tsx
import type React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { ProgressBar } from '../common/ProgressBar';
import { SectionTitle } from '../common/SectionTitle';

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaExchangeAlt,
  FaDatabase,
  FaJs,
} from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si';

/* ================= styles (기존 유지) ================= */
const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SkillCategory = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div<{ $color?: string }>`
  font-size: 2rem;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillNameAndPercentage = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const SkillPercentage = styled.span<{ $color?: string }>`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  margin-top: 0.5rem;
`;

/* ================= animation (기존 유지) ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

/* ================= types ================= */
type SkillItem = {
  name: string;
  icon: React.ComponentType<any>;
  percentage: number;
  color?: string;
  description: string; // \n 허용
};

type SkillCategoryType = {
  title: string;
  skills: SkillItem[];
};

/* ================= data (기존 + 요청 추가만) ================= */
const skillsData: SkillCategoryType[] = [
  {
    title: 'Backend & Database',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        percentage: 85,
        color: '#f89820',
        description:
          '객체지향(OOP) 기반 서버 프로그래밍\n웹 애플리케이션 로직 구현 경험',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        percentage: 85,
        color: '#6db33f',
        description:
          'Spring 기반 서버 애플리케이션 개발\nMVC 구조를 활용한 웹 애플리케이션 설계',
      },
      {
        name: 'Oracle SQL / MySQL',
        icon: FaDatabase,
        percentage: 80,
        color: '#f80000',
        description:
          'Oracle, MySQL 관계형 DB 연동\nSQL 작성 및 CRUD 중심 데이터 처리',
      },
      {
        name: 'Ajax / Fetch / Axios',
        icon: FaExchangeAlt,
        percentage: 85,
        color: '#7c3aed',
        description: '비동기 통신을 활용한 클라이언트–서버 데이터 연동',
      },
    ],
  },
  {
    title: 'Frontend & Web',
    skills: [
      {
        name: 'HTML / CSS / JavaScript',
        icon: FaReact,
        percentage: 80,
        color: '#111827',
        description:
          '웹 표준 기반 UI 구현\nJavaScript를 활용한 동적 화면 처리',
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        percentage: 80,
        color: '#f7df1e',
        description: 'JavaScript를 활용한 동적 화면 처리',
      },
      {
        name: 'React',
        icon: FaReact,
        percentage: 75,
        color: '#61dafb',
        description:
          '컴포넌트 기반 SPA 개발\n상태 관리와 화면 단위 구성 경험',
      },
      {
        name: 'Node.js',
        icon: FaNodeJs,
        percentage: 65,
        color: '#3c873a',
        description: '개발 환경 설정 및 간단한 서버 구성 경험',
      },
    ],
  },
  {
    title: 'Server & Cloud',
    skills: [
      {
        name: 'Linux',
        icon: FaLinux,
        percentage: 70,
        color: '#111827',
        description: '리눅스 환경에서 서버 접근 및 기본 명령어 사용',
      },
      {
        name: 'AWS',
        icon: FaAws,
        percentage: 80,
        color: '#ff9900',
        description:
          'EC2, RDS, S3 기반 서버 구축\n프로젝트 배포 경험',
      },
      {
        name: 'SSH / FTP',
        icon: FaExchangeAlt,
        percentage: 75,
        color: '#0ea5e9',
        description: '원격 서버 접속 및 파일 전송 경험',
      },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      {
        name: 'Flutter',
        icon: SiFlutter,
        percentage: 75,
        color: '#02569b',
        description:
          'Dart 언어 기반 Flutter 앱 개발\n단일 코드베이스로 Android / iOS 크로스플랫폼 앱 구현\n위젯 기반 UI 설계 및 상태 관리',
      },
    ],
  },
  {
    title: 'Collaboration & DevOps',
    skills: [
      {
        name: 'Git',
        icon: FaGitAlt,
        percentage: 85,
        color: '#f05032',
        description:
          'Git을 활용한 버전 관리\n개인 및 팀 프로젝트 협업 경험',
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        percentage: 85,
        color: '#181717',
        description:
          'GitHub 기반 원격 저장소 관리\n개인 및 팀 프로젝트 협업 경험',
      },
    ],
  },
];

/* 줄바꿈 처리 (CSS 안 건드림) */
const renderDescription = (text: string) =>
  text.split('\n').map((line, idx, arr) => (
    <Fragment key={idx}>
      {line}
      {idx !== arr.length - 1 && <br />}
    </Fragment>
  ));

/* ================= component ================= */
export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <SectionTitle $align="center">&lt;Skills /&gt;</SectionTitle>

      <SkillsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((category, categoryIndex) => (
          <SkillCategory key={categoryIndex} variants={categoryVariants}>
            <CategoryTitle>{category.title}</CategoryTitle>

            <SkillsGrid>
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                const skillColor = skill.color;

                return (
                  <SkillCard
                    key={skillIndex}
                    $shadow
                    as={motion.div}
                    variants={skillCardVariants}
                  >
                    <SkillHeader>
                      <SkillIcon $color={skillColor}>
                        <Icon />
                      </SkillIcon>
                      <SkillNameAndPercentage>
                        <SkillName>{skill.name}</SkillName>
                        <SkillPercentage $color={skillColor}>
                          {skill.percentage}%
                        </SkillPercentage>
                      </SkillNameAndPercentage>
                    </SkillHeader>

                    <ProgressBar
                      percentage={skill.percentage}
                      $color={skillColor}
                    />
                    <SkillDescription>
                      {renderDescription(skill.description)}
                    </SkillDescription>
                  </SkillCard>
                );
              })}
            </SkillsGrid>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </Section>
  );
};
