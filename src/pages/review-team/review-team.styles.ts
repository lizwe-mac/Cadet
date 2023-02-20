import styled from 'styled-components';
import { colourString } from '../../components/helpers';
import { ThemeColours } from '../../theme/colours';
import { Card } from '../../theme/elements';

export const ReviewTeamWrapper = styled.div`
  width: 90%;
  max-width: 1140px;
  margin: auto;
  padding: 20px 0;
`;

export const ReviewTeamList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

export const ReviewTeamListItem = styled.li`
  padding: 10px 0;
`;

export const ReviewListMemberCard = styled(Card)`
  padding: 10px 15px;
  display: grid;
  align-items: center;
  grid-template-columns: 70px 1fr;
`;

export const ReviewListMemberCardIcon = styled.figure<{ colour: ThemeColours }>`
  display: block;
  padding: 0;
  margin: 0;
  height: 70px;
  overflow: hidden;
  border-radius: 50px;
  border: solid 3px ${props => colourString(props.colour)};

  img {
  }
`;

export const ReviewListMemberCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

