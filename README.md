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
```

<br>

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm

### 설치

1. **저장소 클론**
   ```bash
   git clone https://github.com/LeeDongjun00/portfolio.git
   cd PortFolio-MINJUN
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

<br>

## 📦 빌드 및 배포

### 빌드 (Build)
프로덕션 빌드를 생성하려면 다음 명령어를 실행합니다. 빌드된 파일은 `dist/` 디렉토리에 생성됩니다.
```bash
npm run build
```

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에 로그인 후 'Add New Project' 클릭
2. GitHub 저장소 연결 및 프로젝트 Import
3. 빌드 설정:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** 클릭

<br>

## 🎨 커스터마이징

### 데이터 수정
모든 텍스트 데이터는 `src/constants/data.ts` 파일에서 중앙 관리됩니다.

#### 자기소개 수정
```typescript
export const introData = {
  headline: '아이디어를 코드로 증명하는 개발자',
  subtext: '구조와 흐름을 이해해 근본적인 해결을 고민합니다.',
  techStack: ['Java', 'Spring Boot', 'React', 'Flutter'],
};
```

#### 프로젝트 추가/수정
```typescript
export const projectsData: Project[] = [
  {
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    thumbnail: '/assets/thumbnail.jpg',
    detailUrl: '/project/detail' // 상세 페이지 경로 (선택)
  },
];
```

### 테마 색상 변경
`src/theme.ts` 파일에서 전체 색상 팔레트를 수정할 수 있습니다.
```typescript
export const theme = {
  colors: {
    primary: '#3182F6',      // 메인 파란색
    background: '#FFFFFF',    // 배경색
    text: {
      heading: '#191F28',     // 제목 색상
      body: '#4E5968',        // 본문 색상
    },
    // ...
  },
};
```

<br>

## 🎯 디자인 시스템

### 색상 (Color Palette)
- **Primary**: `#3182F6` (Main Brand Color)
- **Text Heading**: `#191F28`
- **Text Body**: `#4E5968`
- **Gray Light**: `#F2F4F6` (Card Background)
- **Gray Border**: `#E5E8EB`

### 타이포그래피 (Typography)
- **Font Family**: Pretendard, system-ui, sans-serif
- **Heading**: Bold (700)
- **Body**: Regular (400)

### 레이아웃 (Layout)
- **Max Width**: 1200px (Centered)
- **Breakpoints**:
  - Mobile: 768px
  - Tablet: 1024px

<br>

## 👤 작성자

**이동준 (Lee Dongjun)**
- 📧 **Email**: dongjun032061@gmail.com
- 🐙 **GitHub**: [https://github.com/LeeDongjun00](https://github.com/LeeDongjun00)

---

**Last Update**: 2026. 01.
