import { Context } from '../..';
import { mockFetch } from '../base';
import mockLogin from './json/mock-login.json';
import mockMembersToReview from './json/mock-team-review.json';
import mockSkillReport from './json/mock-skill-report.json';
import { SkillReport } from '../../../models/skill-report';

export async function login(context: Context): Promise<typeof mockLogin> {
  await mockFetch('/api/user/login');
  context.state.user = mockLogin;
  return mockLogin;
}

export async function getMembersToReview(): Promise<typeof mockMembersToReview> {
  await mockFetch('/api/analysis/team-review');
  return mockMembersToReview;
}

export async function getSkillsGapReport(): Promise<SkillReport> {
  await mockFetch('/api/analytics/skills-report');
  return mockSkillReport as any;
}

