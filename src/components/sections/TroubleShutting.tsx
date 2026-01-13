import styled from 'styled-components';
import type React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { troubleShootingData } from '../../constants/data';

/* =========================
   SECTION
========================= */
const Section = styled.section`
  padding: 90px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 70px 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.7;
`;

/* =========================
   LIST
========================= */
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

/* 한 건(카드) */
const ItemCard = styled(Card)`
  background: ${({ theme }) => theme.colors.gray.card};
  padding: 0;
  overflow: hidden;
`;

const ItemInner = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 0;
  min-height: 320px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

/* 왼쪽 텍스트 */
const TextArea = styled.div`
  padding: 2.2rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.8rem 1.5rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.1rem;
`;

const Badge = styled.span`
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(49, 130, 246, 0.25);
  background: rgba(49, 130, 246, 0.08);
`;

const ItemTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const SectionLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
`;

const LabelText = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 0.95rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.75;
  font-size: 0.98rem;
`;

/* 후기/한줄 인사이트 강조 */
const Quote = styled.div`
  margin-top: 1.4rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(49, 130, 246, 0.18);
  background: rgba(49, 130, 246, 0.06);
  color: ${({ theme }) => theme.colors.text.heading};
  font-weight: 700;
  line-height: 1.7;
`;

/* 오른쪽 이미지(지금은 빈칸) */
const MediaArea = styled.div`
  padding: 1.6rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1.6rem 1.8rem;
  }
`;

const MediaPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  min-height: 260px;
  border-radius: 18px;

  /* “그림/물감” 느낌의 연한 배경 */
  background: linear-gradient(
    180deg,
    rgba(49, 130, 246, 0.10) 0%,
    rgba(255, 255, 255, 0.92) 100%
  );

  border: 1px dashed rgba(49, 130, 246, 0.35);
  display: grid;
  place-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 220px;
  }
`;

const PlaceholderText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.body};
  opacity: 0.9;
  line-height: 1.6;

  b {
    color: ${({ theme }) => theme.colors.text.heading};
  }
`;

/* =========================
   ANIMATION
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* =========================
   COMPONENT
========================= */
export const TroubleShooting: React.FC = () => {
  return (
    <Section id="trouble">
      <Header>
        <Title>&lt;Trouble Shooting /&gt;</Title>
        <Subtitle>실제 구현 과정에서 마주친 문제를 “원인→구조→해결”로 정리했습니다.</Subtitle>
      </Header>

      <List as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {troubleShootingData.map((item, idx) => (
          <ItemCard key={idx} as={motion.div} variants={itemVariants} $shadow>
            <ItemInner>
              {/* LEFT */}
              <TextArea>
                <TopRow>
                  <Badge>{item.tag}</Badge>
                  <ItemTitle>{item.title}</ItemTitle>
                </TopRow>

                <SectionLabel>
                  <Dot />
                  <LabelText>상황</LabelText>
                </SectionLabel>
                <Paragraph>{item.context}</Paragraph>

                <SectionLabel>
                  <Dot />
                  <LabelText>문제</LabelText>
                </SectionLabel>
                <Paragraph>{item.problem}</Paragraph>

                <SectionLabel>
                  <Dot />
                  <LabelText>해결</LabelText>
                </SectionLabel>
                <Paragraph>{item.solution}</Paragraph>

                {item.result && (
                  <>
                    <SectionLabel>
                      <Dot />
                      <LabelText>결과</LabelText>
                    </SectionLabel>
                    <Paragraph>{item.result}</Paragraph>
                  </>
                )}

                {item.insight && <Quote>{item.insight}</Quote>}
              </TextArea>

              {/* RIGHT (이미지 자리) */}
              <MediaArea>
                {/* 지금은 무조건 빈칸(추후 item.image 넣으면 교체 가능) */}
                <MediaPlaceholder>
                  <PlaceholderText>
                    <b>이미지 영역</b>
                    <br />
                    (추후 스크린샷/비교 이미지 넣기)
                  </PlaceholderText>
                </MediaPlaceholder>
              </MediaArea>
            </ItemInner>
          </ItemCard>
        ))}
      </List>
    </Section>
  );
};
