import { IsNotEmpty } from 'class-validator';
import { roleType } from 'src/models/role/roleType';
import { UserDetail } from '../user.details.entity';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: roleType[];

  @IsNotEmpty()
  details: UserDetail;
}
