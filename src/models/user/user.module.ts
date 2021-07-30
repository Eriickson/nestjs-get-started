import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([userRepository])],
})
export class UserModule {}
