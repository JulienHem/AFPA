<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200805090802 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_orders_details (products_id INT NOT NULL, orders_details_id INT NOT NULL, INDEX IDX_DDBC89566C8A81A9 (products_id), INDEX IDX_DDBC8956DED81EA5 (orders_details_id), PRIMARY KEY(products_id, orders_details_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_orders_details ADD CONSTRAINT FK_DDBC89566C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_orders_details ADD CONSTRAINT FK_DDBC8956DED81EA5 FOREIGN KEY (orders_details_id) REFERENCES orders_details (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE products_orders_details');
    }
}
