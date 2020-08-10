<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200810080927 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE products_theme');
        $this->addSql('ALTER TABLE products ADD format_id INT DEFAULT NULL, ADD theme_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5AD629F605 FOREIGN KEY (format_id) REFERENCES format (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A59027487 FOREIGN KEY (theme_id) REFERENCES theme (id)');
        $this->addSql('CREATE INDEX IDX_B3BA5A5AD629F605 ON products (format_id)');
        $this->addSql('CREATE INDEX IDX_B3BA5A5A59027487 ON products (theme_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_theme (products_id INT NOT NULL, theme_id INT NOT NULL, INDEX IDX_772C19D859027487 (theme_id), INDEX IDX_772C19D86C8A81A9 (products_id), PRIMARY KEY(products_id, theme_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE products_theme ADD CONSTRAINT FK_772C19D859027487 FOREIGN KEY (theme_id) REFERENCES theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_theme ADD CONSTRAINT FK_772C19D86C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5AD629F605');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A59027487');
        $this->addSql('DROP INDEX IDX_B3BA5A5AD629F605 ON products');
        $this->addSql('DROP INDEX IDX_B3BA5A5A59027487 ON products');
        $this->addSql('ALTER TABLE products DROP format_id, DROP theme_id');
    }
}
