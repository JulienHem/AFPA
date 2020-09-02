<?php

namespace App\Entity;

use App\Repository\SuppliersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SuppliersRepository::class)
 */
class Suppliers
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $suppliCompanyName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $suppliMail;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $suppliPhone;

    /**
     * @ORM\ManyToOne(targetEntity=adress::class, inversedBy="suppliers")
     */
    private $adress;



    public function __construct()
    {
        $this->adress = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSuppliCompanyName(): ?string
    {
        return $this->suppliCompanyName;
    }

    public function setSuppliCompanyName(string $suppliCompanyName): self
    {
        $this->suppliCompanyName = $suppliCompanyName;

        return $this;
    }

    public function getSuppliMail(): ?string
    {
        return $this->suppliMail;
    }

    public function setSuppliMail(string $suppliMail): self
    {
        $this->suppliMail = $suppliMail;

        return $this;
    }

    public function getSuppliPhone(): ?string
    {
        return $this->suppliPhone;
    }

    public function setSuppliPhone(string $suppliPhone): self
    {
        $this->suppliPhone = $suppliPhone;

        return $this;
    }

    public function getAdress(): ?adress
    {
        return $this->adress;
    }

    public function setAdress(?adress $adress): self
    {
        $this->adress = $adress;

        return $this;
    }


}
