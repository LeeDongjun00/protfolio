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

// ▼ 여기가 변경된 부분입니다! (export default를 없애고 export const 사용)
export const MyWorkMode: React.FC = () => {
  return (
    <Wrapper>
      <Title>MODE (Flutter 코디 다이어리) – 내가 구현한 부분</Title>

      {/* 1 */}
      <Section>
        <SectionTitle>1. 캘린더 + 스케줄 등록 구조</SectionTitle>
        <Text>
          일정 등록 시점에 schedule과 calendar 데이터를 함께 생성하는 구조로 설계했습니다.
          calendar에는 imageURL과 inDiary(기본 false) 같은 표시용 필드를 두어
          캘린더 화면에서 “해당 날짜에 일정이 있는지/어떤 이미지인지”를 빠르게 렌더링할 수 있게 했습니다.

          Calendar → Add 이동 시 선택 날짜를 extra로 전달하여 Add에서 선택 날짜가 자동 세팅되도록 흐름을 만들었습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/mode_1.png" alt="캘린더 스케줄 구조" /> */}
          <Placeholder>mode_1 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 2 */}
      <Section>
        <SectionTitle>2. 일정 등록 플로우(옷장 → 조합 → 등록)</SectionTitle>
        <Text>
          ‘일정 추가’에서 옷장 선택 → 조합(캔버스 편집) → 일정 등록 완료까지
          사용자가 한 흐름으로 끝낼 수 있도록 플로우를 구성했습니다.

          Wardrobe는 pop({'{clothesIds,imageUrls}'})만 반환하고,
          Add에서 받아 Combine을 1회 push하도록 설계해
          화면 전환과 상태 전달이 꼬이지 않게 정리했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/mode_2.png" alt="옷장-조합-등록 플로우" /> */}
          <Placeholder>mode_2 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 3 */}
      <Section>
        <SectionTitle>3. 캔버스 캡처 트러블슈팅(편집 UI 제거)</SectionTitle>
        <Text>
          캔버스를 이미지로 저장할 때, 보라색 테두리/삭제 버튼 등 편집 UI까지 함께 캡처되는 문제가 있었습니다.

          해결을 위해 ‘캡처 순간에만 UI를 숨기는 상태’를 별도로 두고,
          캡처 완료 후 즉시 원복하는 방식으로 저장 이미지를 깔끔하게 만들었습니다.
          또한 캔버스 배경을 흰색으로 바꿔 룩북/프리뷰 이미지 품질을 개선했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/mode_3.png" alt="캔버스 캡처 트러블슈팅" /> */}
          <Placeholder>mode_3 이미지 영역</Placeholder>
        </ImageBox>
      </Section>

      {/* 4 */}
      <Section>
        <SectionTitle>4. 일정 수정 기능 확장(옷장 재조합 / 룩북 교체)</SectionTitle>
        <Text>
          해당 날짜에 일정이 있으면 CalendarPage 버튼을 ‘일정 수정’으로 변경하고,
          Add 화면에서 기존 데이터(목적지/텍스트/프리뷰)를 그대로 채워 편집 가능하도록 구현했습니다.

          edit 모드에서 코디 수정 경로를 2가지로 확장했습니다:
          (1) 옷장 재조합으로 코디 수정, (2) 룩북으로 교체.
          진입 경로와 상관없이 두 방식 모두 가능하도록 버튼을 나란히 배치해 사용성을 개선했습니다.
        </Text>

        <ImageBox>
          {/* <Image src="/images/mode_4.png" alt="일정 수정/룩북 교체" /> */}
          <Placeholder>mode_4 이미지 영역</Placeholder>
        </ImageBox>
      </Section>
    </Wrapper>
  );
};