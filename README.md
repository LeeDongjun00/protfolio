# Portfolio Website

개인 포트폴리오 웹사이트입니다. React와 TypeScript를 기반으로 제작된 모던하고 반응형인 Single Page Application(SPA)입니다.

## 🧷 링크
👉 **Live Demo:** (https://portfoliodongjun.s3.ap-northeast-2.amazonaws.com/index.html)


## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [빌드 및 배포](#-빌드-및-배포)
- [커스터마이징](#-커스터마이징)
- [섹션 설명](#-섹션-설명)
- [디자인 시스템](#-디자인-시스템)
- [작성자](#-작성자)

<br>

## 🎯 프로젝트 소개

이 포트폴리오 웹사이트는 개발자의 기술 스택, 프로젝트 경험, 교육 이력 등을 체계적으로 보여주는 개인 포트폴리오입니다.

> **핵심 철학**: "데이터의 흐름을 꿰뚫고, 견고한 서비스 아키텍처를 설계합니다"

- ✨ **모던하고 깔끔한 UI/UX 디자인**
- 📱 **완전 반응형 웹 디자인** (Mobile, Tablet, Desktop)
- 🎬 **부드러운 스크롤 애니메이션 및 인터랙션**
- ⚡ **Single Page Application (SPA) 구조**

<br>

## 🛠 기술 스택

### Core
- **React 19.2.3** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.2.4** - 빠른 빌드 도구 및 개발 서버

### Styling
- **styled-components 6.1.19** - CSS-in-JS 스타일링
- **Pretendard Font** - 한글 최적화 폰트

### Animation & Icons
- **framer-motion 12.23.26** - 부드러운 애니메이션
- **react-icons 5.5.0** - 아이콘 라이브러리

### Development
- **@vitejs/plugin-react** - Vite React 플러그인
- **TypeScript** - 정적 타입 검사

<br>

## ✨ 주요 기능

### 1. 헤더 (Header)
- 스크롤 시 상단 고정 (Sticky Header)
- 부드러운 스크롤 네비게이션
- 반응형 모바일 메뉴 (Hamburger Menu)

### 2. 히어로 섹션 (Hero Section)
- 프로필 이미지 및 자기소개
- Tech Stack 태그 표시
- "What I Do" 카드 그리드 (Frontend, Backend, DevOps)
- Education & Experience 타임라인

### 3. About 섹션
- 개발 철학 명언 (Quote)
- Core Values 카드 (3개)
- 코드 에디터 스타일의 개인 정보 표시

### 4. Skills 섹션
- 기술 스택 카테고리별 분류
  - Backend & Database
  - Frontend & Mobile
  - Collaboration & DevOps
- 각 스킬별 진행률 표시 (Progress Bar)
- 프레임워크 공식 브랜드 색상 적용

### 5. Projects 섹션
- **Featured Projects** (주요 프로젝트)
  - 썸네일 이미지, 프로젝트 설명, 기술 스택 태그
  - GitHub 링크 (Frontend/Backend 분리 지원)
  - 상세 리뷰 페이지 연결 지원 (My Part - PM/핵심기능)
- **Other Experience** (기타 경험)
  - 프로젝트 요약 및 하이라이트 (DB 설계, 하드웨어 모델링 등)
  - 기술 스택 표시 및 GitHub 링크

<br>

## 📁 프로젝트 구조

```bash
PortFolio-MINJUN/
├── public/
│   └── assets/
│       ├── favicon.png
│       ├── minjun_profile.jpg
│       └── (project_images...)
├── src/
│   ├── components/
│   │   ├── common/          # 재사용 가능한 공통 컴포넌트 (Button, Card, ProgressBar)
│   │   ├── Header.tsx       # 전역 헤더
│   │   └── sections/        # 섹션별 컴포넌트 (Hero, About, Projects, Skills)
│   ├── constants/
│   │   └── data.ts          # 모든 텍스트 데이터 및 설정 관리
│   ├── styles/
│   │   └── GlobalStyle.ts   # 전역 스타일
│   ├── types/
│   │   └── styled.d.ts      # styled-components 타입 정의
│   ├── App.tsx              # 메인 앱 컴포넌트 (Router 설정)
│   ├── main.tsx             # 엔트리 포인트
│   └── theme.ts             # 테마 설정 (색상, 폰트, 레이아웃)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
