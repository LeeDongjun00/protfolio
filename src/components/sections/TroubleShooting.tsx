import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { troubleShootingData } from '../../constants/data';

const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  gap: 16px;
  margin-top: 28px;
`;

const TSCard = styled(Card)`
  padding: 20px 22px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
`;

const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Project = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

const Tag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(49, 130, 246, 0.25);
  background: rgba(49, 130, 246, 0.06);
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const Block = styled.div`
  display: grid;
  gap: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 10px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const Label = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text.heading};
  opacity: 0.9;
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.75;
  opacity: 0.92;
`;

const Insight = styled.div`
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const TroubleShooting: React.FC = () => {
  return (
    <Section id="troubleshooting">
      <SectionTitle $align="center">&lt;Trouble Shooting /&gt;</SectionTitle>

      <Grid variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {troubleShootingData.map((item, idx) => (
          <TSCard as={motion.div} variants={itemVariants} key={`${item.project}-${idx}`} $shadow>
            <TopRow>
              <Project>{item.project}</Project>
              {item.tag ? <Tag>{item.tag}</Tag> : null}
            </TopRow>

            <Title>{item.title}</Title>

            <Block>
              <Row>
                <Label>문제</Label>
                <Text>{item.issue}</Text>
              </Row>
              <Row>
                <Label>원인</Label>
                <Text>{item.cause}</Text>
              </Row>
              <Row>
                <Label>해결</Label>
                <Text>{item.solution}</Text>
              </Row>
              <Row>
                <Label>결과</Label>
                <Text>{item.result}</Text>
              </Row>
            </Block>

            {item.insight ? <Insight>Insight: {item.insight}</Insight> : null}
          </TSCard>
        ))}
      </Grid>
    </Section>
  );
};
