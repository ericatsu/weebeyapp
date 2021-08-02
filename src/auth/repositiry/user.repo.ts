import { Request,Response } from "express"
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";

@EntityRepository(User)
export class UserRespository extends Repository<User> {
    //Get user data
    async fetchUser(req: Request, res: Response){
        const {username} = req.body;
        try {
            // Traditional
            // let data = await this.find();
            // res.send(data);
            //------------------CreaterQueryBuilder-----------
            let data = await this.createQueryBuilder("user").select().getMany();
            res.send(data);
        res.send(data);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //Creating new user
    async createUser(req: Request, res: Response) {
        const { username, useremail, userpassword } = req.body;

      try {
          let user = new User();
          user.username = username;
          user.useremail = useremail;
          user.userpassword = userpassword;

          //saving user under respository
          let userData = await this.save(user);
          let userId = await this.createQueryBuilder("user").select("user.id")
          .where("user.email = :query", { query: useremail}).getOne();
          return res.send(userData);
      } catch (error) {
          res.send(error)
      }

    }

    async deleteUser(req: Request, res: Response) {
        const { username } = req.body;

        try {
           let data = await this.createQueryBuilder("user")
           .where("user.username = :query", {
               query: username
           }).delete().execute();

            return res.send(data);
        } catch (error) {
            res.send(error)
        }

    }

    async updateUser(req: Request, res: Response) {
        const { username, useremail, id } = req.body;

        try {
            let data = await this.createQueryBuilder("user").update(User).set({
                username : username,
                useremail : useremail,  
            }).where(
                "id = :id", { id: id}
            ).execute();

            return res.send(data);
        } catch (error) {
            res.send(error)
        }

    }
}