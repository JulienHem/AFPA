<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $OrderDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $orderDateShipping;

    /**
     * @ORM\Column(type="integer")
     */
    private $orderType;

    /**
     * @ORM\Column(type="integer")
     */
    private $orderShippingCost;


    /**
     * @ORM\ManyToMany(targetEntity=Adress::class, inversedBy="orders")
     */
    private $adress;

    /**
     * @ORM\OneToMany(targetEntity=OrdersDetails::class, mappedBy="orders")
     */
    private $orders;



    public function __construct()
    {
        $this->adress = new ArrayCollection();
        $this->suppliers = new ArrayCollection();
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderDate(): ?\DateTimeInterface
    {
        return $this->OrderDate;
    }

    public function setOrderDate(\DateTimeInterface $OrderDate): self
    {
        $this->OrderDate = $OrderDate;

        return $this;
    }

    public function getOrderDateShipping(): ?\DateTimeInterface
    {
        return $this->orderDateShipping;
    }

    public function setOrderDateShipping(?\DateTimeInterface $orderDateShipping): self
    {
        $this->orderDateShipping = $orderDateShipping;

        return $this;
    }

    public function getOrderType(): ?int
    {
        return $this->orderType;
    }

    public function setOrderType(int $orderType): self
    {
        $this->orderType = $orderType;

        return $this;
    }

    public function getOrderShippingCost(): ?int
    {
        return $this->orderShippingCost;
    }

    public function setOrderShippingCost(int $orderShippingCost): self
    {
        $this->orderShippingCost = $orderShippingCost;

        return $this;
    }

    /**
     * @return Collection|adress[]
     */
    public function getAdress(): Collection
    {
        return $this->adress;
    }

    public function addAdress(adress $adress): self
    {
        if (!$this->adress->contains($adress)) {
            $this->adress[] = $adress;
        }

        return $this;
    }

    public function removeAdress(adress $adress): self
    {
        if ($this->adress->contains($adress)) {
            $this->adress->removeElement($adress);
        }
        return $this;
    }

    /**
     * @return Collection|OrdersDetails[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(OrdersDetails $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setOrders($this);
        }

        return $this;
    }

    public function removeOrder(OrdersDetails $order): self
    {
        if ($this->orders->contains($order)) {
            $this->orders->removeElement($order);
            // set the owning side to null (unless already changed)
            if ($order->getOrders() === $this) {
                $order->setOrders(null);
            }
        }

        return $this;
    }

}
