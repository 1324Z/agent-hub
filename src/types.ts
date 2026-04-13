export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string[];
  status: 'verified' | 'pending' | 'unverified';
}

export interface Session {
  id: string;
  title: string;
  time: string;
  agent: string;
  status: 'active' | 'idle' | 'warning';
  participants: string[];
}

export interface AuditLog {
  id: string;
  type: string;
  time: string;
  message: string;
  color: string;
}
