import type React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 120px 2rem 80px;
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const Section = styled.div`
  margin-bottom: 4.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.7;
  white-space: pre-line;
  margin-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 360px;
  background: #f3f4f6;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
`;

// ▼ [수정됨] 이름 변경 (MyWorkReady -> SpringProject) 및 export const 적용
export const SpringProject: React.FC = () => {
  return (
    <Wrapper>
      <Title>준비완료(아임레디) – 내가 구현한 부분</Title>

      {/* 1 */}
      <Section>
        <SectionTitle>1. TOUR API 연동 방식 설계</SectionTitle>
        <Text>
          여행 추천 기능을 구현하면서 외부 TOUR API 데이터를 전부 DB에 적재할지,
          필요한 순간에만 호출할지 구조적인 고민이 있었습니다.

          응답 데이터가 방대해 포트폴리오 규모에 비해 과하다고 판단했고,
          콘텐츠를 식별할 수 있는 최소 정보(CONTENT_ID, CONTENT_TYPE_ID)만 DB에 저장한 뒤
          상세 정보는 필요할 때 API 호출로 가져오는 온디맨드 방식으로 설계를 변경했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/ready_1.png" alt="TOUR API 설계" /> */}
          <Placeholder>ready_1 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 2 */}
      <Section>
        <SectionTitle>2. 코스 생성 파라미터 설계</SectionTitle>
        <Text>
          “코스 생성하기”에서 사용자가 선택한 값(테마, 지역, 인원, 예산, 카테고리별 금액)을
          명확한 파라미터로 정리해 전달하도록 구성했습니다.

          프론트에서는 선택값을 일관된 형태로 묶어 보내고,
          서버에서는 이 조건을 기준으로 후보 여행지를 필터링하고 추천 결과를 만드는 흐름으로 설계했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/ready_2.png" alt="코스 생성 파라미터" /> */}
          <Placeholder>ready_2 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 3 */}
      <Section>
        <SectionTitle>3. 지도 기반 UI/필터 흐름(사용자 경험)</SectionTitle>
        <Text>
          여행 서비스 특성상 사용자가 위치 중심으로 탐색할 수 있어야 한다고 보고,
          지도 기반 UI에서 지역 선택 및 카테고리 필터 흐름을 우선으로 구성했습니다.

          “사용자가 어떤 순서로 선택하는 게 자연스러운지”를 기준으로
          화면 구성과 데이터 흐름을 맞추는 데 집중했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/ready_3.png" alt="지도/필터 UI" /> */}
          <Placeholder>ready_3 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 4 */}
      <Section>
        <SectionTitle>4. 데이터 정합성 관점의 설계 경험</SectionTitle>
        <Text>
          회원 탈퇴 등 데이터 변경 상황에서
          여행 코스/피드/연관 데이터의 처리 기준을 고민했습니다.

          단순히 남겨두는 방식이 아니라,
          서비스 관점에서 의미 없는 데이터는 함께 정리될 수 있도록
          삭제 정책 및 관계 설계를 고려하는 경험을 쌓았습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/ready_4.png" alt="데이터 정합성/삭제 정책" /> */}
          <Placeholder>ready_4 이미지 영역</Placeholder>
        </ImageBox>
      </Section>
    </Wrapper>
  );
};