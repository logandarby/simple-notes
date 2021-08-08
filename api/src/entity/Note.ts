import {
  BaseEntity,
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity()
class Note extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index()
  @Column("text")
  title: string;

  @Index()
  @Column("text")
  contents: string;

  @ManyToOne(() => User, (user) => user.notes)
  user: User;
}

export default Note;
