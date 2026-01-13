// data.ts
import type React from 'react';

import {
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaLightbulb,
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaUsers,
  FaBolt,
  FaProjectDiagram,
} from 'react-icons/fa';

import {
  SiSpringboot,
  SiJavascript,
  SiKubernetes,
  SiGit,
  SiOracle,
  SiSwagger,
  SiAxios,
  SiFlutter,
  SiMysql,
} from 'react-icons/si';

/* =========================
   TYPES
========================= */
/* react-icons 컴포넌트도 허용 */
export type IconLike = string | React.ComponentType<any>;

export interface TechStack {
  name: string;
  icon: IconLike;
  color?: string;
}

export interface WhatIDo {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  percentage: number;
  description: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | string[];
  thumbnail?: string;
}

export interface OtherExperience {
  title: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
}

/* ✅ What I'm Good At 타입 추가 */
export interface Strength {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}

/* ✅ TroubleShooting 타입 추가 */
export interface TroubleShootingItem {
  project: string;
  title: string;
  tag?: string;
  issue: string;
  cause: string;
  solution: string;
  result: string;
  insight?: string;
}

/* =========================
   INTRO
========================= */
export const introData = {
  headline: ['" 아이디어를 코드로 증명하는 개발자 "', '이동준입니다'],
  subtext:
    '구조와 흐름을 이해해 근본적인 해결을 고민합니다. 문제의 원인을 먼저 파악하고, 현재뿐 아니라 이후의 확장과 사용자 경험까지 연결되는 설계를 지향합니다.',
  techStack: [
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Oracle', icon: SiOracle, color: '#F80000' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ],
};

/* =========================
   WHAT I DO
========================= */
export const whatIDoData: WhatIDo[] = [
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    description:
      '사용자 흐름과 인터랙션을 중심으로 화면 상태와 동작을 설계하며, 실제 사용성을 기준으로 UX를 구현합니다.',
  },
  {
    title: 'Backend',
    icon: FaDatabase,
    description:
      '프론트 요구사항을 고려해 데이터 모델과 API를 설계하며, 확장 가능한 서버 구조를 지향합니다.',
  },
  {
    title: 'DevOps',
    icon: FaCloud,
    description:
      'AWS EC2·RDS 기반의 서비스 배포·운영 인프라를 구축하여 서비스의 안정성과 운영 효율을 확보합니다.',
  },
];

/* =========================
   TIMELINE
========================= */
export const timelineData: TimelineItem[] = [
  {
    date: '2025.12 - 2026.01',
    title: 'Flutter 팀 프로젝트(패션관리 앱)',
    description:
      'Flutter와 Firebase를 활용하여 계층 분리를 고려한 구조로 앱을 개발하고, Firestore 기반 데이터 모델링과 상태 흐름 제어를 통해 일정,룩북,옷장 기능을 구현하였습니다.',
  },
  {
    date: '2025.11 - 2025.12',
    title: 'React 개인 프로젝트(취미 SNS)',
    description:
      'React와 Node.js(Express), MySQL을 활용하여 RESTful 아키텍처 기반의 SNS 서비스를 개발하고, 피드·댓글·팔로우·알림 기능과 사용자 행동 로그를 반영한 랭킹 및 추천 로직을 구현하였습니다..',
  },
  {
    date: '2025.10 - 2025.11',
    title: 'Spring 팀 프로젝트(여행 계획 웹사이트)',
    description:
      'Spring Boot와 JSP를 활용한 MVC 아키텍처 기반의 여행 플랫폼을 개발하여, 사용자 입력 중심의 여행 일정 생성 로직과 Oracle DB 연동을 통한 예약·데이터 관리 흐름을 구현하였습니다.',
  },
  {
    date: '2025.07 - 2025.12',
    title: 'MSA기반 플러터(Dart)활용 자바(JAVA)프론트엔드 백엔드 풀스택 웹(앱)개발 과정 수료',
    description:
      'Java/Spring 생태계 전반, React 기반의 웹 개발 기술을 학습하고 여러 번의 팀 프로젝트를 통해 협업 능력 및 소통 능력를 길렀습니다.',
  },
  {
    date: '2025.04 - 2025.12',
    title: 'TDB_Server(캡스톤)',
    description:
      "'TDB_Server'는 NestJS 프레임워크를 사용하고 TypeScript로 작성된 백엔드 프로젝트입니다. React Native 모바일 앱과 라즈베리파이 하드웨어 클라이언트를 모두 지원합니다. 해당 프로젝트는 Gemini_CLI와 cursor를 활용하여 제작되었습니다.",
  },
  {
    date: '2024.10 - 2024.12',
    title: 'CRP_Server(캡스톤)',
    description:
      "'CRP_Server'는 ExpressJS 프레임워크를 사용하고 JavaScript로 작성된 백엔드 프로젝트입니다. RESTful API를 구현해 백엔드의 기초를 구현했습니다.",
  },
];

/* =========================
   PROJECTS
========================= */
export const projectsData: Project[] = [
  {
    title: '전자 옷장 및 일정에 맞는 코디 앱(MODE)',
    thumbnail: '/assets/project_flutter.png',
    description:
      'Flutter와 Firebase를 활용하여 계층 분리를 고려한 구조로 앱을 개발하고, Firestore 기반 데이터 모델링과 상태 흐름 제어를 통해 일정,룩북,옷장 기능을 구현하였습니다.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth', 'Firebase Storage'],
    githubUrl: ['https://github.com/yeseul1008/FlutterTeamProject.git'],
  },
  {
    title: '취미 기반 SNS 웹사이트(HobbyWave)',
    thumbnail: '/assets/project_react.png',
    description:
      'React와 Node.js(Express), MySQL을 활용하여 RESTful 아키텍처 기반의 SNS 서비스를 개발하고, 피드·댓글·팔로우·알림 기능과 사용자 행동 로그를 반영한 랭킹 및 추천 로직을 구현하였습니다.',
    tags: ['React', 'Node.js', 'Express', 'REST API', 'MySQL', 'JWT', 'AWS'],
    githubUrl: 'https://github.com/LeeDongjun00/kidultSNS.git',
  },
  {
    title: '여행 플랫폼(아임레디)',
    thumbnail: '/assets/project_spring.png',
    description:
      'Spring Boot와 JSP를 활용한 MVC 아키텍처 기반의 여행 플랫폼을 개발하여 사용자 입력 중심의 여행 일정 생성 로직과 Oracle DB 연동 흐름을 구현하였습니다.',
    tags: ['Spring Boot', 'JSP', 'MyBatis', 'Oracle SQL', 'MVC Pattern', 'Kakao Map API'],
    githubUrl: 'https://github.com/LeeDongjun00/Spring_TeamProject.git',
  },
];

export const featuredProjectsDescription =
  '주요 프로젝트들을 통해 다양한 기술 스택과 문제 해결 경험을 쌓았습니다.';

export const otherExperienceDescription =
  '성장하기 위해 다양한 경험을 쌓고 노력합니다.';

export const otherExperienceData: OtherExperience[] = [
  {
    title: 'TDB_Server(캡스톤)',
    summary: 'IoT 하드웨어와 모바일 앱을 연결하는 하이브리드 아키텍처 기반의 NestJS 백엔드 서버',
    highlights: [
      'React Native 앱과 Raspberry Pi 하드웨어 클라이언트 간의 실시간 데이터 동기화 처리',
      'Gemini CLI 및 AI 도구(Cursor)를 활용한 워크플로우 최적화 및 빠른 기능 구현',
      '타입 안정성을 위한 TypeScript 도입 및 RESTful API 설계',
      'MySQL 데이터베이스를 활용한 약물 관리 및 사용자 데이터 처리 시스템 구축',
    ],
    techStack: ['NestJS', 'TypeScript', 'RESTful API', 'MySQL', 'Raspberry Pi', 'Gemini CLI', 'cursor'],
    githubUrl: 'https://github.com/wantraiseapomeranian/TDB_Server.git',
  },
  {
    title: 'CRP_Server(캡스톤)',
    summary: 'ExpressJS 기반의 확장 가능한 RESTful API 서버 및 WebSocket 실시간 통신 구현',
    highlights: [
      'Express.js 프레임워크를 활용한 모듈화된 백엔드 아키텍처 설계',
      'RESTful API 설계 원칙을 준수한 엔드포인트 구현 및 문서화',
      'WebSocket을 통한 실시간 양방향 통신 기능 구현',
      'MySQL 데이터베이스 설계 및 쿼리 최적화를 통한 성능 개선',
    ],
    techStack: ['ExpressJS', 'JavaScript', 'REST API', 'WebSocket', 'MySQL'],
    githubUrl: 'https://github.com/wantraiseapomeranian/CRP_Server.git',
  },
];

/* =========================
   CORE VALUES
========================= */
export const coreValuesData: CoreValue[] = [
  {
    title: '기능보다 흐름을 먼저 고민합니다',
    icon: FaDatabase,
    description: '단일 기능 구현에 그치지 않고, 사용자 흐름과 데이터 이동을 함께 고려하며 설계합니다.',
  },
  {
    title: '동작하는 결과물로 증명합니다',
    icon: FaLaptopCode,
    description: '아이디어에 그치지 않고, 구현·수정·개선까지 완성되는 결과물을 만드는 데 집중합니다.',
  },
  {
    title: '문제를 구조적으로 이해합니다',
    icon: FaLightbulb,
    description: '오류를 단순히 해결하는 데서 멈추지 않고, 원인을 분석해 반복을 줄이는 방향을 고민합니다.',
  },
];

/* =========================
   WHAT I'M GOOD AT
========================= */
export const strengthsData: Strength[] = [
  {
    title: '협업 능력',
    icon: FaUsers,
    description:
      '팀 프로젝트에서 의견이 갈릴 때 각자의 의도와 우선순위를 정리해 공통된 방향으로 조율합니다. 기술적 근거를 바탕으로 원활한 협업을 만들어갑니다.',
  },
  {
    title: '학습 및 실행력',
    icon: FaBolt,
    description:
      '프로젝트에 필요한 기술이 생기면 빠르게 학습해 실제 기능 구현에 바로 적용합니다. 배움이 결과로 이어지는 과정을 중요하게 생각합니다.',
  },
  {
    title: '구조적 사고',
    icon: FaProjectDiagram,
    description:
      '기능이 늘어나더라도 구조가 복잡해지지 않도록 역할과 흐름을 나누어 전체 구조를 정리합니다. 유지보수와 확장을 고려한 설계를 지향합니다.',
  },
];

/* =========================
   ABOUT
========================= */
export const aboutData = {
  quote: '데이터 흐름을 이해하고, 안정적인 서비스를 구현하는 개발자입니다',
  information: {
    name: '이동준',
    education: '경동대학교 컴퓨터공학과',
    contact: 'dongjun032061@gmail.com',
    notion: 'https://github.com/LeeDongjun00',
  },
};

/* =========================
   SKILLS
========================= */
export const skillsData: SkillCategory[] = [
  {
    title: 'Backend & Database',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        percentage: 85,
        description: '객체지향 프로그래밍과 디자인 패턴을 활용한 백엔드 개발',
        color: '#ED8B00',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        percentage: 85,
        description: 'RESTful API 개발 및 서버 구조 설계',
        color: '#6DB33F',
      },
      {
        name: 'Oracle SQL',
        icon: SiOracle,
        percentage: 80,
        description: '데이터베이스 설계 및 쿼리 최적화',
        color: '#F80000',
      },
      {
        name: 'Swagger UI',
        icon: SiSwagger,
        percentage: 70,
        description: 'RESTful API 문서화 및 테스트 도구',
        color: '#85EA2D',
      },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      {
        name: 'React',
        icon: FaReact,
        percentage: 75,
        description: '컴포넌트 기반 UI 개발 및 상태 관리',
        color: '#61DAFB',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        percentage: 80,
        description: 'ES6+ 문법을 활용한 모던 자바스크립트 개발',
        color: '#F7DF1E',
      },
      {
        name: 'Axios',
        icon: SiAxios,
        percentage: 90,
        description: 'HTTP 클라이언트 라이브러리를 활용한 API 통신',
        color: '#5A29E4',
      },
    ],
  },
  {
    title: 'Collaboration & DevOps',
    skills: [
      {
        name: 'Docker',
        icon: FaDocker,
        percentage: 50,
        description: '컨테이너 기반 애플리케이션 배포 및 관리',
        color: '#2496ED',
      },
      {
        name: 'Kubernetes',
        icon: SiKubernetes,
        percentage: 50,
        description: '컨테이너 오케스트레이션 및 클러스터 관리',
        color: '#326CE5',
      },
      {
        name: 'AWS',
        icon: FaAws,
        percentage: 80,
        description: '클라우드 인프라 구축 및 관리',
        color: '#FF9900',
      },
      {
        name: 'Git',
        icon: SiGit,
        percentage: 85,
        description: '버전 관리 및 협업 워크플로우',
        color: '#F05032',
      },
    ],
  },
];

/* =========================
   TROUBLE SHOOTING
========================= */
export const troubleShootingData: TroubleShootingItem[] = [
  {
    project: 'MODE (코디 다이어리)',
    title: '캡처 이미지에 편집 UI가 함께 저장되는 문제',
    tag: 'Flutter / RepaintBoundary',
    issue:
      '코디 결과 이미지를 저장했는데, 테두리/삭제 버튼 등 편집용 UI가 결과 이미지에 그대로 포함되는 문제가 발생했습니다.',
    cause:
      '캡처는 특정 UI만 선택적으로 가져오는 것이 아니라, 해당 시점에 렌더링된 위젯 트리 전체를 이미지로 생성합니다. 편집 UI와 결과물이 같은 렌더링 트리에 있었던 것이 핵심 원인이었습니다.',
    solution:
      '캡처 순간에만 편집 UI를 렌더 트리에서 제외하도록 상태를 분리했습니다. 캡처 시작 시 편집 UI를 숨기고 → 캡처 완료 후 다시 복원하는 흐름으로 설계했습니다.',
    result:
      '저장 이미지에는 코디 결과만 깔끔하게 남았고, 이후 룩북/일정 프리뷰 등 동일 패턴 기능에 재사용할 수 있는 해결 방식으로 확장했습니다.',
    insight: 'UX는 디자인 문제가 아니라, 개발자가 매 순간 내리는 판단의 기준이라는 걸 체감했습니다.',
  },
  {
    project: '준비완료 (여행 추천/코스)',
    title: 'TOUR API 데이터를 DB에 전부 적재할지 판단 이슈',
    tag: 'Tour API / On-demand',
    issue:
      '숙박/관광/식당 데이터가 방대해, API 응답을 그대로 DB에 적재하면 관리/성능 측면에서 비효율이 예상되었습니다.',
    cause:
      '포트폴리오 규모에서 “전체 적재”는 과하고, 실시간 조회 가능한 외부 API는 DB가 아니라 “필요할 때 조회”하는 전략이 더 적절했습니다.',
    solution:
      'CONTENT_ID, CONTENT_TYPE_ID 같은 최소 식별자만 DB에 저장하고, 상세 정보는 필요 시 TOUR API를 호출하는 온디맨드 구조로 변경했습니다.',
    result:
      'DB 용량/관리 부담을 줄이고, 추천 로직은 가중치 계산과 속성 관리에 집중할 수 있도록 역할을 분리했습니다.',
    insight:
      '기능 구현을 넘어, 외부 API와 DB의 역할을 분리해 프로젝트에 맞는 데이터 전략을 고민하는 시야를 갖게 됐습니다.',
  },
  {
    project: '준비완료 (여행 추천/코스)',
    title: '회원 탈퇴 시 리뷰/기록 데이터 처리 전략',
    tag: 'Data Integrity / Privacy',
    issue:
      '회원 탈퇴 시 유저 정보를 삭제하면 리뷰까지 사라져 서비스 신뢰도가 떨어지고, 반대로 유지하면 개인정보/정합성 문제가 생길 수 있었습니다.',
    cause:
      '연관 데이터(리뷰)는 서비스 가치 데이터이고, 사용자 식별 정보는 개인정보이므로 동일한 삭제 전략을 적용하면 문제가 발생합니다.',
    solution:
      '회원 엔티티는 논리 삭제(탈퇴 상태 전환)로 처리하고, 식별 가능한 정보(계정/닉네임 등)는 마스킹했습니다. 리뷰는 익명화된 상태로 유지했습니다.',
    result:
      '서비스 정보는 유지하면서도 개인정보/정합성 이슈를 줄였고, 이후 프로젝트에서도 “삭제/유지/익명화” 판단 기준을 갖게 됐습니다.',
    insight: '엔티티 삭제는 연관 데이터의 성격에 따라 전략을 분리해야 한다는 기준을 정립했습니다.',
  },
];
