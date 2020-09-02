<?php

namespace App\Entity;

use App\Repository\AdressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AdressRepository::class)
 */
class Adress
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $adressType;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $adressCountry;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $adressDistrict;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $adressPostalCode;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $adressCity;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $adressNumStreet;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $AdressStreet;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $adressComplement;

    /**
     * @ORM\ManyToMany(targetEntity=Order::class, mappedBy="adress")
     */
    private $orders;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="adress")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity=Suppliers::class, mappedBy="adress")
     */
    private $suppliers;



    public function __construct()
    {
        $this->orders = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->suppliers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdressType(): ?int
    {
        return $this->adressType;
    }

    public function setAdressType(int $adressType): self
    {
        $this->adressType = $adressType;

        return $this;
    }

    public function getAdressCountry(): ?string
    {
        return $this->adressCountry;
    }

    public function setAdressCountry(string $adressCountry): self
    {
        $this->adressCountry = $adressCountry;

        return $this;
    }

    public function getAdressDistrict(): ?string
    {
        return $this->adressDistrict;
    }

    public function setAdressDistrict(string $adressDistrict): self
    {
        $this->adressDistrict = $adressDistrict;

        return $this;
    }

    public function getAdressPostalCode(): ?string
    {
        return $this->adressPostalCode;
    }

    public function setAdressPostalCode(string $adressPostalCode): self
    {
        $this->adressPostalCode = $adressPostalCode;

        return $this;
    }

    public function getAdressCity(): ?string
    {
        return $this->adressCity;
    }

    public function setAdressCity(string $adressCity): self
    {
        $this->adressCity = $adressCity;

        return $this;
    }

    public function getAdressNumStreet(): ?string
    {
        return $this->adressNumStreet;
    }

    public function setAdressNumStreet(string $adressNumStreet): self
    {
        $this->adressNumStreet = $adressNumStreet;

        return $this;
    }

    public function getAdressStreet(): ?string
    {
        return $this->AdressStreet;
    }

    public function setAdressStreet(string $AdressStreet): self
    {
        $this->AdressStreet = $AdressStreet;

        return $this;
    }

    public function getAdressComplement(): ?string
    {
        return $this->adressComplement;
    }

    public function setAdressComplement(?string $adressComplement): self
    {
        $this->adressComplement = $adressComplement;

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->addAdress($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->contains($order)) {
            $this->orders->removeElement($order);
            $order->removeAdress($this);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addAdress($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            $user->removeAdress($this);
        }

        return $this;
    }

    /**
     * @return Collection|Suppliers[]
     */
    public function getSuppliers(): Collection
    {
        return $this->suppliers;
    }

    public function addSupplier(Suppliers $supplier): self
    {
        if (!$this->suppliers->contains($supplier)) {
            $this->suppliers[] = $supplier;
            $supplier->setAdress($this);
        }

        return $this;
    }

    public function removeSupplier(Suppliers $supplier): self
    {
        if ($this->suppliers->contains($supplier)) {
            $this->suppliers->removeElement($supplier);
            // set the owning side to null (unless already changed)
            if ($supplier->getAdress() === $this) {
                $supplier->setAdress(null);
            }
        }

        return $this;
    }

}
