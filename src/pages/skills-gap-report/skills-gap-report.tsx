import React from 'react';
import { Donut } from '../../components/donut/donut.chart';
import { DonutSlice } from '../../components/donut/donut.slice';
import { useState, useEffect } from 'react';
import { useAppActions, useAppState } from '../../overmind';
import { SkillReport } from '../../models/skill-report';
import { filteredGraphColours, accent2Colours } from '../../theme/colours';
import { Page } from '../../theme/page';
import { SkillsReportWrapper, SkillsReportList, SkillsReportListItem, SkillsReportCard } from './skills-gape-report.styles';
import * as typography from '../../theme/typography';

function SkillsGapReport(): JSX.Element {
  const [skillsReport, setSkillReport] = useState<SkillReport>();

  const { user } = useAppState();
  const actions = useAppActions();

  useEffect(() => {
    actions.getSkillsGapReport().then(report => {
      setSkillReport(report);
    });
  }, []);

  const showDonutSlices = (skills: any): JSX.Element => {
    return (
      skills.map((skill: any, index: number) => (
        <DonutSlice key={skill.id} value={skill.amount} colour={filteredGraphColours[index % filteredGraphColours.length]} label={skill.name}/>
      ))
    );
  };

  return (
    <Page>
      <SkillsReportWrapper>
        <typography.Heading1>Skills gap report</typography.Heading1>
        <typography.Heading4>Here is the breakdown of your skills </typography.Heading4>
        <SkillsReportList>
          {skillsReport?.list.map((skills, index) => (
            <SkillsReportListItem key={index}>
              <SkillsReportCard>
                <Donut showTotal={true} label={skills[0]}>
                  {showDonutSlices(skills[1])}
                </Donut>
              </SkillsReportCard>
            </SkillsReportListItem>
          ))}
        </SkillsReportList>
      </SkillsReportWrapper>
    </Page>
  );
}

export default SkillsGapReport;

// {skillsReport?.list.map(skills => {
//     return(
//     <Donut label={skills[0]}>
//       {
//         skills?[1].map(skill => {
//             return (
//                 <DonutSlice value={50} label="slice" colour="accent-2"/>
//             )
//           });
//       }

//     </Donut>;
//   })}