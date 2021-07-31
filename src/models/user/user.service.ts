import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { userRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userRepository)
    private readonly _userRepository: userRepository,
    private readonly _mapperService: MapperService,
  ) {}

  async get(id: string): Promise<UserDto> {
    if (!id) {
      throw new BadRequestException('Id must be sent');
    }

    const user = await this._userRepository.findOne(id, {
      where: { status: true },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return this._mapperService.map<User, UserDto>(user, new UserDto());
  }

  async getAll(): Promise<UserDto> {
    const users = await this._userRepository.find({
      where: { status: true },
    });

    if (!users) {
      throw new NotFoundException();
    }

    return this._mapperService.mapCollection<User, UserDto>(
      users,
      new UserDto(),
    );
  }

  async create(user: User): Promise<UserDto> {
    const userSaved = await this._userRepository.save(user);

    return this._mapperService.map<User, UserDto>(userSaved, new UserDto());
  }

  async update(id: number, user: User): Promise<User> {}
}
