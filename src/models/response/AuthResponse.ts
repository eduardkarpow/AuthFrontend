import { Iuser } from "../Iuser";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    user: Iuser
}