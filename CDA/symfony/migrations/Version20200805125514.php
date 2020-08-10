<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200805125514 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BE355AF43');
        $this->addSql('DROP INDEX IDX_5CECC7BE355AF43 ON adress');
        $this->addSql('ALTER TABLE adress DROP suppliers_id');
        $this->addSql('ALTER TABLE suppliers ADD adress_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE suppliers ADD CONSTRAINT FK_AC28B95C8486F9AC FOREIGN KEY (adress_id) REFERENCES adress (id)');
        $this->addSql('CREATE INDEX IDX_AC28B95C8486F9AC ON suppliers (adress_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE adress ADD suppliers_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BE355AF43 FOREIGN KEY (suppliers_id) REFERENCES suppliers (id)');
        $this->addSql('CREATE INDEX IDX_5CECC7BE355AF43 ON adress (suppliers_id)');
        $this->addSql('ALTER TABLE suppliers DROP FOREIGN KEY FK_AC28B95C8486F9AC');
        $this->addSql('DROP INDEX IDX_AC28B95C8486F9AC ON suppliers');
        $this->addSql('ALTER TABLE suppliers DROP adress_id');
    }
}
