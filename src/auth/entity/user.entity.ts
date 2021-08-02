import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("user")
export class User{

    @PrimaryGeneratedColumn("increment")
    id!: string;

    //user name column
    @Column({
        type : "varchar",
        nullable : true,
        unique : false
    })
    username!: string;

    //user email column
    @Column({
        type: "varchar",
        nullable: true,
        unique: true
    })
    useremail!: string;

    //user password column
    @Column({
        type: "varchar",
        nullable: true,
        unique: true
    })
    userpassword!: string;
}