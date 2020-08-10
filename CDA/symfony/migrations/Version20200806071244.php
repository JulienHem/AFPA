<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200806071244 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F52993988C0FA77');
        $this->addSql('DROP INDEX UNIQ_F52993988C0FA77 ON `order`');
        $this->addSql('ALTER TABLE `order` DROP order_details_id');
        $this->addSql('ALTER TABLE orders_details ADD orders_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE orders_details ADD CONSTRAINT FK_835379F1CFFE9AD6 FOREIGN KEY (orders_id) REFERENCES `order` (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_835379F1CFFE9AD6 ON orders_details (orders_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `order` ADD order_details_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F52993988C0FA77 FOREIGN KEY (order_details_id) REFERENCES orders_details (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F52993988C0FA77 ON `order` (order_details_id)');
        $this->addSql('ALTER TABLE orders_details DROP FOREIGN KEY FK_835379F1CFFE9AD6');
        $this->addSql('DROP INDEX UNIQ_835379F1CFFE9AD6 ON orders_details');
        $this->addSql('ALTER TABLE orders_details DROP orders_id');
    }
}
