import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Note from "./Note";

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index()
  @Column("varchar", { unique: true })
  email: string;

  @Column("varchar")
  password: string;

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];
}

export default User;
