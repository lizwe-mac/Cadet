import styled from 'styled-components';
import { accent2Colours } from '../../theme/colours';
import { Card } from '../../theme/elements';

export const SkillsReportWrapper = styled.div`
  width: 70%;
  max-width: 1140px;
  margin: auto;
  padding: 20px 0;
`;

export const SkillsReportList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

export const SkillsReportListItem = styled.li`
  padding: 10px 0;
  
`;

export const SkillsReportCard = styled(Card)`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border: solid 3px ${accent2Colours};
`;

