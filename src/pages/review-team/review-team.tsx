import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../../models/user';
import { useAppActions, useAppState } from '../../overmind';
import { BottomFooter, Page } from '../../theme/page';
import { ReviewListMemberCard, ReviewListMemberCardContent, ReviewListMemberCardIcon, ReviewTeamList, ReviewTeamListItem, ReviewTeamWrapper } from './review-team.styles';
import * as typography from '../../theme/typography';
import { filteredGraphColours, accent2Colours } from '../../theme/colours';

export function ReviewTeamPage(): JSX.Element {
  const { user } = useAppState();
  const actions = useAppActions();

  const [teamMembers, setTeamMembers] = useState<User[]>();

  useEffect(() => {
    actions.getMembersToReview().then(members => {
      setTeamMembers(members);
    });
  }, []);

  if (!user) return <Navigate to={'/account/login'} />;

  if (!teamMembers) return <>loading</>;

  return (
    <Page>
      <ReviewTeamWrapper>
        <typography.Heading1>Review your team</typography.Heading1>
        <typography.Heading4>These are the members of your team. Please make sure </typography.Heading4>

        <ReviewTeamList>
          {teamMembers?.map((member, index) => {
            const colour = filteredGraphColours[index % filteredGraphColours.length];

            return (
              <ReviewTeamListItem key={member.slug}>
                <ReviewListMemberCard>
                  <ReviewListMemberCardIcon colour={colour}>
                    <img src={member.profileImage} alt={member.lastName} />
                  </ReviewListMemberCardIcon>

                  <ReviewListMemberCardContent>
                    <typography.Heading5>
                      {member.firstName} {member.lastName}
                    </typography.Heading5>
                    <typography.Caption1 colour={accent2Colours[0]}>
                      {member.jobTitle}
                    </typography.Caption1>
                  </ReviewListMemberCardContent>
                </ReviewListMemberCard>
              </ReviewTeamListItem>
            );
          })}
        </ReviewTeamList>
      </ReviewTeamWrapper>

      <BottomFooter>
        <a href='/analysis/skills-gap-report' className="button">Continue</a>
      </BottomFooter>
    </Page>
  );
}

