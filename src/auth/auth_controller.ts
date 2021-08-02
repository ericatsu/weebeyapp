import { Response, Request} from "express";
import { getManager } from "typeorm";
import { UserRespository } from "./repositiry/user.repo";

export class AuthController {

    static async createUser(req: Request, res: Response){
        let manager = getManager().getCustomRepository(UserRespository);
        await manager.createUser(req, res);
    }
    static async fetchUser(req: Request, res: Response) {
        let manager = getManager().getCustomRepository(UserRespository);
        await manager.fetchUser(req, res);
    }
    static async deleteUser(req: Request, res: Response) {
        let manager = getManager().getCustomRepository(UserRespository);
        await manager.deleteUser(req, res);
    }
    static async updateUser(req: Request, res: Response) {
        let manager = getManager().getCustomRepository(UserRespository);
        await manager.updateUser(req, res);
    }
}