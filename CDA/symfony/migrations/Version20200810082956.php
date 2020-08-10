<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200810082956 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE theme_products (theme_id INT NOT NULL, products_id INT NOT NULL, INDEX IDX_1184482D59027487 (theme_id), INDEX IDX_1184482D6C8A81A9 (products_id), PRIMARY KEY(theme_id, products_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE theme_products ADD CONSTRAINT FK_1184482D59027487 FOREIGN KEY (theme_id) REFERENCES theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE theme_products ADD CONSTRAINT FK_1184482D6C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A59027487');
        $this->addSql('DROP INDEX IDX_B3BA5A5A59027487 ON products');
        $this->addSql('ALTER TABLE products CHANGE theme_id product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A4584665A FOREIGN KEY (product_id) REFERENCES material (id)');
        $this->addSql('CREATE INDEX IDX_B3BA5A5A4584665A ON products (product_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE theme_products');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A4584665A');
        $this->addSql('DROP INDEX IDX_B3BA5A5A4584665A ON products');
        $this->addSql('ALTER TABLE products CHANGE product_id theme_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A59027487 FOREIGN KEY (theme_id) REFERENCES theme (id)');
        $this->addSql('CREATE INDEX IDX_B3BA5A5A59027487 ON products (theme_id)');
    }
}
