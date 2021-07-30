import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

export const databaseProvider = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'mysql',
        host: config.get('HOST'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
        migrations: [join(process.cwd(), './migrations/*{.ts,.js}')],
      };
    },
  }),
];
