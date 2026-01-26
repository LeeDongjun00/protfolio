import type React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // ▼ 라우터 이동 훅 추가

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

// ▼ [NEW] 상단 강조 문구 스타일
const CoreFeatureText = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb; /* 파란색 강조 */
  margin-bottom: 0.5rem;
  display: block;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

// ▼ 왕관 아이콘 스타일 (PM 배지용)
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
  background: #f8fafc;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const SpringProject: React.FC = () => {
  const navigate = useNavigate(); // 라우터 훅 사용

  const handleGoBack = () => {
    navigate('/'); // 메인 페이지(App.js의 path="/")로 이동
  };

  return (
    <Wrapper>
      <HeaderControl>
        <BackButton onClick={handleGoBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          이전으로 돌아가기
        </BackButton>
      </HeaderControl>

      <TitleArea>
        {/* ▼ 요청하신 문구 추가 */}
        <CoreFeatureText>이 부분은 프로젝트에서 제가 구현한 핵심 부분입니다.</CoreFeatureText>
        
        <TitleRow>
          {/* 스프링 로고 제거됨 */}
          
          <MainTitle>여행 서비스 플랫폼 I'M READY</MainTitle>

          {/* PM 배지 (왕관) */}
          <RoleBadge>
            <CrownIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path 
                fill="#F59E0B" 
                d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z"
              />
            </CrownIconSvg>
            PM
          </RoleBadge>
        </TitleRow>
      </TitleArea>

      {/* 1. API 설계 */}
      <Section>
        <SectionTitle>1. 대용량 데이터 처리를 위한 온디맨드 API 설계</SectionTitle>
        <Text>
          한국관광공사 Tour API의 방대한 데이터를 모두 DB에 적재하는 것은 비효율적이라 판단했습니다.
          <br /><br />
          이를 해결하기 위해 <strong>콘텐츠 식별자(CONTENT_ID)와 필수 메타데이터만 로컬 DB에 저장</strong>하여 검색 속도를 높이고,
          상세 정보가 필요한 시점에만 외부 API를 실시간 호출하는 <strong>온디맨드 방식</strong>으로 아키텍처를 재설계했습니다.
          이로써 데이터 최신성을 유지하면서도 서버 스토리지 부하를 최소화했습니다.
        </Text>
      </Section>

      {/* 2. 테마 UI */}
      <Section>
        <SectionTitle>2. 직관적인 여행 테마 및 일정 입력 UI</SectionTitle>
        <Text>
          사용자가 선호하는 다양한 <strong>여행 테마(가족, 힐링, 가성비 등)를 복수 선택</strong>하고, <strong>여행 지역, 일정, 인원, 총 예산</strong>을 직관적인 UI를 통해 손쉽게 입력할 수 있도록 구현했습니다.
          <br /><br />
          이 단계에서 수집된 구체적인 여행 조건들은 후속 단계인 '테마별 가중치 및 예산 배분'과 '맞춤형 코스 추천'을 위한 <strong>핵심 입력 데이터(Input Data)</strong>로 활용됩니다.
        </Text>

        <ImageBox>
          <img src="/assets/theme.gif" alt="여행 테마 및 일정 설정 UI" />
        </ImageBox>
      </Section>

      {/* 3. 가중치 로직 */}
      <Section>
        <SectionTitle>3. 테마 가중치 및 예산 비중 기반 추천 로직</SectionTitle>
        <Text>
          단순 필터링을 넘어 사용자의 취향을 정밀하게 반영하기 위해 <strong>가중치 기반 점수 계산 시스템</strong>을 구현했습니다.
          <br /><br />
          사용자가 설정한 <strong>여행 테마(힐링, 맛집 등)와 카테고리별 예산 비중(숙박 40%, 식당 30% 등)</strong>을 파라미터화하여 서버로 전달하고,
          이 값을 기준으로 각 여행지(POI)에 우선순위 점수를 부여해 개인화된 코스를 자동 생성합니다.
        </Text>
        
        <ImageBox>
          <img src="/assets/pie.gif" alt="예산 비중 설정 및 가중치 조절" />
        </ImageBox>
      </Section>

      {/* 4. 지도 시각화 */}
      <Section>
        <SectionTitle>4. Kakao Map API 기반 경로 시각화 및 UX 최적화</SectionTitle>
        <Text>
          생성된 여행 코스의 현실성을 검증할 수 있도록 <strong>Kakao Map API를 활용한 경로 시각화 기능</strong>을 개발했습니다.
          <br /><br />
          추천된 장소들의 위/경도 좌표를 기반으로 <strong>차량 이동 경로(Polyline)</strong>를 지도에 그리고,
          총 이동 거리와 예상 소요 시간을 실시간으로 산출하여 사용자에게 직관적인 동선 정보를 제공합니다.
          또한, 드래그 앤 드롭으로 일정을 수정하면 즉시 경로가 재계산되도록 구현했습니다.
        </Text>

        <ImageBox>
          <img src="/assets/schedule_checkCar.png" alt="여행 경로 지도 시각화" />
        </ImageBox>
      </Section>

      {/* 5. 예약/결제 */}
      <Section>
        <SectionTitle>5. 실제 예약 및 결제 프로세스 통합</SectionTitle>
        <Text>
          단순 여행 계획에서 끝나는 것이 아니라, 실제 구매로 이어지는 <strong>원스톱 서비스 흐름</strong>을 완성했습니다.
          <br /><br />
          숙소 상세 페이지에서 객실 재고를 실시간으로 확인하고, 투숙 인원과 날짜에 따른 유효성 검사(Validation) 후
          <strong>PortOne API를 연동하여 결제까지 이어지는 전체 트랜잭션</strong>을 안정적으로 구현했습니다.
        </Text>

        <ImageBox>
          <img src="/assets/reservation_acc.png" alt="숙소 상세 예약 및 결제" />
        </ImageBox>
      </Section>

    </Wrapper>
  );
};