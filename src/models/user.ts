export interface UserCookieInfo {
  firstName: string;
  lastName: string;
}

export interface User extends UserCookieInfo {
  preferredName?: string;
  jobTitle?: string;
  slug: string;
  profileImage?: string;
}

