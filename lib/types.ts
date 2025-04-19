import type { users } from "@/prisma/generated/prisma-client-js";

//Layouts
export type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

//Pages

//API Response Types
export type ActionResponse<T = unknown> = {
  data: T | null;
  hasError: boolean;
  errorMessage: string;
  status?: "success" | "error" | "pending";
  statusCode?: number; 
};

//Models
export type User = users;
export type Users = User[];