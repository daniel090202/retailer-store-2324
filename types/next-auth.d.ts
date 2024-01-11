import { User as UserDTO } from "@/models/dto";
import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    user: UserDTO;
  }

  interface User extends DefaultUser {
    statusCode: number;
    data: UserDTO;
    message: string;
    serverTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    statusCode: number;
    data: UserDTO;
    message: string;
    serverTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
