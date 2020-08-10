<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200805092412 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE order_adress (order_id INT NOT NULL, adress_id INT NOT NULL, INDEX IDX_9F63D76B8D9F6D38 (order_id), INDEX IDX_9F63D76B8486F9AC (adress_id), PRIMARY KEY(order_id, adress_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_suppliers (order_id INT NOT NULL, suppliers_id INT NOT NULL, INDEX IDX_10AFC2A48D9F6D38 (order_id), INDEX IDX_10AFC2A4355AF43 (suppliers_id), PRIMARY KEY(order_id, suppliers_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_adress ADD CONSTRAINT FK_9F63D76B8D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_adress ADD CONSTRAINT FK_9F63D76B8486F9AC FOREIGN KEY (adress_id) REFERENCES adress (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_suppliers ADD CONSTRAINT FK_10AFC2A48D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_suppliers ADD CONSTRAINT FK_10AFC2A4355AF43 FOREIGN KEY (suppliers_id) REFERENCES suppliers (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `order` ADD order_details_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F52993988C0FA77 FOREIGN KEY (order_details_id) REFERENCES orders_details (id)');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F52993988C0FA77 ON `order` (order_details_id)');
        $this->addSql('CREATE INDEX IDX_F5299398A76ED395 ON `order` (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE order_adress');
        $this->addSql('DROP TABLE order_suppliers');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F52993988C0FA77');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398A76ED395');
        $this->addSql('DROP INDEX UNIQ_F52993988C0FA77 ON `order`');
        $this->addSql('DROP INDEX IDX_F5299398A76ED395 ON `order`');
        $this->addSql('ALTER TABLE `order` DROP order_details_id, DROP user_id');
    }
}
