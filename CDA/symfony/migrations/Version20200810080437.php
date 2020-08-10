<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200810080437 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE products_format');
        $this->addSql('DROP TABLE products_material');
        $this->addSql('ALTER TABLE products ADD material_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5AE308AC6F FOREIGN KEY (material_id) REFERENCES material (id)');
        $this->addSql('CREATE INDEX IDX_B3BA5A5AE308AC6F ON products (material_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_format (products_id INT NOT NULL, format_id INT NOT NULL, INDEX IDX_5889F9F5D629F605 (format_id), INDEX IDX_5889F9F56C8A81A9 (products_id), PRIMARY KEY(products_id, format_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE products_material (products_id INT NOT NULL, material_id INT NOT NULL, INDEX IDX_69BF6526E308AC6F (material_id), INDEX IDX_69BF65266C8A81A9 (products_id), PRIMARY KEY(products_id, material_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE products_format ADD CONSTRAINT FK_5889F9F56C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_format ADD CONSTRAINT FK_5889F9F5D629F605 FOREIGN KEY (format_id) REFERENCES format (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_material ADD CONSTRAINT FK_69BF65266C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_material ADD CONSTRAINT FK_69BF6526E308AC6F FOREIGN KEY (material_id) REFERENCES material (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5AE308AC6F');
        $this->addSql('DROP INDEX IDX_B3BA5A5AE308AC6F ON products');
        $this->addSql('ALTER TABLE products DROP material_id');
    }
}
