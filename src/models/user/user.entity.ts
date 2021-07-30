import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { UserDetail } from './user.details.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'bool', default: true })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @OneToOne(() => UserDetail, { cascade: true, nullable: false, eager: true })
  @JoinTable({ name: 'detail_id' })
  details: UserDetail;
}
