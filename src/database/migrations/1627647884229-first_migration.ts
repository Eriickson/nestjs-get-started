import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1627647884229 implements MigrationInterface {
    name = 'firstMigration1627647884229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `bookstore`.`users` (`id` char(36) NOT NULL, `username` varchar(25) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `bookstore`.`users`");
        await queryRunner.query("DROP TABLE `bookstore`.`users`");
    }

}
