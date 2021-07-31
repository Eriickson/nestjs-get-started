import {MigrationInterface, QueryRunner} from "typeorm";

export class secondMigration1627665831890 implements MigrationInterface {
    name = 'secondMigration1627665831890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `bookstore`.`user_details` (`id` char(36) NOT NULL, `name` varchar(25) NOT NULL, `lastname` varchar(255) NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bookstore`.`roles` (`id` char(36) NOT NULL, `name` varchar(20) NOT NULL, `description` text NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bookstore`.`user_roles` (`usersId` char(36) NOT NULL, `rolesId` char(36) NOT NULL, INDEX `IDX_99b019339f52c63ae615358738` (`usersId`), INDEX `IDX_13380e7efec83468d73fc37938` (`rolesId`), PRIMARY KEY (`usersId`, `rolesId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `bookstore`.`user_roles` ADD CONSTRAINT `FK_99b019339f52c63ae6153587380` FOREIGN KEY (`usersId`) REFERENCES `bookstore`.`users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `bookstore`.`user_roles` ADD CONSTRAINT `FK_13380e7efec83468d73fc37938e` FOREIGN KEY (`rolesId`) REFERENCES `bookstore`.`roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookstore`.`user_roles` DROP FOREIGN KEY `FK_13380e7efec83468d73fc37938e`");
        await queryRunner.query("ALTER TABLE `bookstore`.`user_roles` DROP FOREIGN KEY `FK_99b019339f52c63ae6153587380`");
        await queryRunner.query("DROP INDEX `IDX_13380e7efec83468d73fc37938` ON `bookstore`.`user_roles`");
        await queryRunner.query("DROP INDEX `IDX_99b019339f52c63ae615358738` ON `bookstore`.`user_roles`");
        await queryRunner.query("DROP TABLE `bookstore`.`user_roles`");
        await queryRunner.query("DROP TABLE `bookstore`.`roles`");
        await queryRunner.query("DROP TABLE `bookstore`.`user_details`");
    }

}
