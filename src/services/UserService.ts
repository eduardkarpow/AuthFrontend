import $api from "../http";
import { AxiosResponse } from "axios";
import { Iuser } from "../models/Iuser";

export default class UserService{
    static async fetchUsers(): Promise<AxiosResponse<Iuser[]>> {
        return $api.get<Iuser[]>('/users');
    }
}