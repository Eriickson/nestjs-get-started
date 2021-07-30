import { join } from 'path';
import * as fs from 'fs';
import { parse } from 'dotenv';

type Envs =
  | 'PORT'
  | 'HOST'
  | 'DB_USERNAME'
  | 'DB_PASSWORD'
  | 'DB_NAME'
  | 'DB_PORT';

export class ConfigService {
  private readonly envConfig: Record<Envs, string>;
  constructor() {
    const isDev = process.env.NODE_ENV !== 'production';

    if (isDev) {
      const envPath = join(process.cwd(), './.env');
      const existPath = fs.existsSync(envPath);

      if (!existPath) {
        console.log('.env file does not Exist');
        return;
      }

      this.envConfig = parse(fs.readFileSync(envPath));
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
        HOST: process.env.HOST,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
        DB_PORT: process.env.DB_PORT,
      };
    }
  }

  get(key: Envs): string {
    return this.envConfig[key];
  }
}
