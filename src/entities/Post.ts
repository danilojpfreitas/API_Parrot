import { User } from './User';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text"})
    content: string

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name: 'user_id'})
    user_id: User
}