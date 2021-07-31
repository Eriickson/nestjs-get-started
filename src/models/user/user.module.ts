import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { userRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([userRepository]), SharedModule],
})
export class UserModule {}
