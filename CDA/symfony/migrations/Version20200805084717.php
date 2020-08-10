<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200805084717 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_material (products_id INT NOT NULL, material_id INT NOT NULL, INDEX IDX_69BF65266C8A81A9 (products_id), INDEX IDX_69BF6526E308AC6F (material_id), PRIMARY KEY(products_id, material_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_format (products_id INT NOT NULL, format_id INT NOT NULL, INDEX IDX_5889F9F56C8A81A9 (products_id), INDEX IDX_5889F9F5D629F605 (format_id), PRIMARY KEY(products_id, format_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_theme (products_id INT NOT NULL, theme_id INT NOT NULL, INDEX IDX_772C19D86C8A81A9 (products_id), INDEX IDX_772C19D859027487 (theme_id), PRIMARY KEY(products_id, theme_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_material ADD CONSTRAINT FK_69BF65266C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_material ADD CONSTRAINT FK_69BF6526E308AC6F FOREIGN KEY (material_id) REFERENCES material (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_format ADD CONSTRAINT FK_5889F9F56C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_format ADD CONSTRAINT FK_5889F9F5D629F605 FOREIGN KEY (format_id) REFERENCES format (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_theme ADD CONSTRAINT FK_772C19D86C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_theme ADD CONSTRAINT FK_772C19D859027487 FOREIGN KEY (theme_id) REFERENCES theme (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE products_material');
        $this->addSql('DROP TABLE products_format');
        $this->addSql('DROP TABLE products_theme');
    }
}
