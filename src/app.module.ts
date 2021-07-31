import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './models/user/user.module';
import { RoleModule } from './models/role/role.module';
import { UserService } from './models/user/user.service';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}
