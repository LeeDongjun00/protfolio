import type React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// ▼ 전체 레이아웃
const Wrapper = styled.section`
  padding: 80px 20px 120px;
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  color: #333;

  @media (max-width: 768px) {
    padding: 40px 20px 80px;
  }
`;

// ▼ 상단 뒤로가기 버튼
const HeaderControl = styled.div`
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  transition: color 0.2s;

  &:hover {
    color: #111;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

// ▼ 타이틀 영역
const TitleArea = styled.div`
  margin-bottom: 5rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 2rem;
`;

// ▼ 상단 강조 문구
const CoreFeatureText = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
  display: block;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

// ▼ MODE 프로젝트용 아이콘
const ModeIconSvg = styled.svg`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 3px rgba(139, 92, 246, 0.3));
`;

// ▼ 왕관 아이콘
const CrownIconSvg = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  transform: translateY(-1px);
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// ▼ PM 역할 배지
const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 1rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid #bfdbfe;
  transform: translateY(2px);
  gap: 2px;
`;

// ▼ 본문 섹션 스타일
const Section = styled.article`
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 28px;
    background-color: #3b82f6;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4b5563;
  white-space: pre-line;
  word-break: keep-all;
  margin-bottom: 1.5rem;
  padding-left: 18px;

  strong {
    color: #111;
    font-weight: 600;
    background: linear-gradient(180deg, rgba(255,255,255,0) 60%, #e0e7ff 60%);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 0;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 720px; /* 최대 너비 제한으로 너무 커지는 것 방지 */
  margin: 1.5rem auto 0; /* 상단 여백 및 좌우 중앙 정렬 */
  background: #f8fafc;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: auto;
    max-height: 600px; /* 세로로 너무 긴 이미지 방지 */
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
`;

const Placeholder = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
`;

export const MyWorkMode: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <Wrapper>
      <Title>MODE (Flutter 전자옷장 어플리케이션)</Title>

      <TitleArea>
        <CoreFeatureText>이 부분은 프로젝트에서 제가 구현한 핵심 부분입니다.</CoreFeatureText>
        
        <TitleRow>          
          <MainTitle>일정기반 코디관리 모바일 어플 MODE</MainTitle>
        </TitleRow>
      </TitleArea>

      {/* 1. 캘린더 구조 */}
      <Section>
        <SectionTitle>1. 캘린더 및 스케줄 데이터 구조 설계</SectionTitle>
        <Text>
          일정 등록 시점에 <strong>schedule과 calendar 데이터를 함께 생성하는 구조</strong>로 설계했습니다.
          <br /><br />
          calendar 데이터에는 <strong>imageURL과 inDiary(기본 false)</strong> 같은 표시용 필드를 별도로 두어,
          캘린더 화면에서 “해당 날짜에 일정이 있는지, 어떤 썸네일을 보여줄지”를 빠르게 렌더링할 수 있게 최적화했습니다.
          또한, Calendar → Add 화면 이동 시 선택한 날짜를 extra로 전달하여 등록 화면에서 날짜가 자동 세팅되도록 UX 흐름을 개선했습니다.
        </Text>

        <ImageBox>
          <img src="/assets/calendar.jpg" alt="캘린더 스케줄 구조" />
        </ImageBox>
      </Section>

      {/* 2. 수정 및 룩북 교체 */}
      <Section>
        <SectionTitle>2. 일정 수정 및 룩북 교체 유연성 확보</SectionTitle>
        <Text>
          이미 일정이 존재하는 날짜를 선택하면 버튼이 ‘일정 수정’으로 변경되도록 하고,
          Add 화면 진입 시 기존 데이터(목적지, 텍스트, 코디 프리뷰)를 자동으로 채워주어 즉시 편집이 가능하도록 구현했습니다.
          <br /><br />
          특히 수정 모드에서는 코디 변경 방식을 <strong>(1) 옷장 재조합으로 수정, (2) 만들어둔 룩북으로 교체</strong> 두 가지로 확장했습니다.
          어떤 경로로 진입하든 유연하게 대처할 수 있도록 버튼을 직관적으로 배치하여 사용성을 높였습니다.
        </Text>

        <ImageBox>
          <img src="/assets/schedule_add.jpg" alt="일정 수정 및 룩북 교체" />
        </ImageBox>
      </Section>

      {/* 3. 옷장 연동 */}
      <Section>
        <SectionTitle>3. 옷장 연동 및 일정 등록 플로우 최적화</SectionTitle>
        <Text>
          ‘일정 추가’ 단계에서 <strong>옷장 선택 → 조합(캔버스 편집) → 일정 등록 완료</strong>까지 사용자가 끊김 없이 하나의 흐름으로 작업을 마칠 수 있도록 플로우를 구성했습니다.
          <br /><br />
          데이터 전달 과정에서 꼬임이 없도록, <strong>Wardrobe 화면은 선택된 데이터(clothesIds, imageUrls)만 반환(pop)</strong>하고,
          이를 받은 Add 화면에서 최종적으로 Combine 화면을 호출(push)하는 구조로 설계하여 화면 전환과 상태 관리를 명확히 했습니다.
        </Text>

        <ImageBox>
          <img src="/assets/clothes_add.jpg" alt="옷장 연동 및 등록 플로우" />
        </ImageBox>
      </Section>

      {/* 4. 캔버스 캡처/트러블슈팅 */}
      <Section>
        <SectionTitle>4. 캔버스 캡처 기능 트러블슈팅 (편집 UI 제거)</SectionTitle>
        <Text>
          코디 조합 캔버스를 이미지로 저장할 때, 선택된 옷의 <strong>보라색 테두리나 삭제 버튼 같은 편집 UI까지 함께 캡처되는 문제</strong>가 있었습니다.
          <br /><br />
          이를 해결하기 위해 <strong>‘캡처 순간에만 UI를 숨기는 상태(isCapturing)’</strong>를 별도로 두어,
          캡처 시작 시 UI를 숨기고 → 저장 완료 후 즉시 복원하는 방식으로 결과물 이미지를 깔끔하게 만들었습니다.
          추가로 캔버스 배경을 흰색으로 고정하여 룩북이나 프리뷰에서 이미지가 투명하게 깨지는 현상을 방지했습니다.
        </Text>

        <ImageBox>
          <img src="/assets/combine_guide.jpg" alt="캔버스 캡처 트러블슈팅" />
        </ImageBox>
      </Section>

    </Wrapper>
  );
};