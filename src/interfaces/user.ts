export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  password: string;
  role: string;
  image?: string | null;
}
