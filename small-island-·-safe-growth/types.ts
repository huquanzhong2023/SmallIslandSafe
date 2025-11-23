export interface NavItem {
  label: string;
  path: string;
}

export interface EmergencyContact {
  number: string;
  description: string;
  type: 'emergency' | 'support' | 'legal';
}

export enum UserRole {
  PARENT = 'parent',
  TEACHER = 'teacher',
  FRIEND = 'friend'
}