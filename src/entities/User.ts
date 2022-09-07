import { Post } from "./Post";
import {
  Column,
  Entity,
  Unique,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length, IsNotEmpty, IsInt, IsEmail, Min, Max } from "class-validator";

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(2, 20)
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(10000)
  apartment: number;

  @Column()
  @IsNotEmpty()
  password: string;

  @OneToMany(() => Post, (post) => post.user_id)
  posts: Post[];
}
