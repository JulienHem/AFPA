<?php

namespace App\Entity;

use App\Repository\OrdersDetailsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrdersDetailsRepository::class)
 */
class OrdersDetails
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
    private $orderdetailsUnitPrice;

    /**
     * @ORM\Column(type="integer")
     */
    private $orderdetailsQuantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ordersdetailsDiscount;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordersdetailsTva;

    /**
     * @ORM\ManyToMany(targetEntity=Products::class, mappedBy="orderDetails")
     */
    private $products;

    /**
     * @ORM\ManyToOne(targetEntity=Order::class, inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $orders;

    /**
     * @ORM\ManyToOne(targetEntity=products::class, inversedBy="ordersDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;


    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderdetailsUnitPrice(): ?int
    {
        return $this->orderdetailsUnitPrice;
    }

    public function setOrderdetailsUnitPrice(int $orderdetailsUnitPrice): self
    {
        $this->orderdetailsUnitPrice = $orderdetailsUnitPrice;

        return $this;
    }

    public function getOrderdetailsQuantity(): ?int
    {
        return $this->orderdetailsQuantity;
    }

    public function setOrderdetailsQuantity(int $orderdetailsQuantity): self
    {
        $this->orderdetailsQuantity = $orderdetailsQuantity;

        return $this;
    }

    public function getOrdersdetailsDiscount(): ?int
    {
        return $this->ordersdetailsDiscount;
    }

    public function setOrdersdetailsDiscount(int $ordersdetailsDiscount): self
    {
        $this->ordersdetailsDiscount = $ordersdetailsDiscount;

        return $this;
    }

    public function getOrdersdetailsTva(): ?int
    {
        return $this->ordersdetailsTva;
    }

    public function setOrdersdetailsTva(int $ordersdetailsTva): self
    {
        $this->ordersdetailsTva = $ordersdetailsTva;

        return $this;
    }

    /**
     * @return Collection|Products[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Products $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->addOrderDetail($this);
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            $product->removeOrderDetail($this);
        }

        return $this;
    }

    public function getOrders(): ?Order
    {
        return $this->orders;
    }

    public function setOrders(?Order $orders): self
    {
        $this->orders = $orders;

        return $this;
    }

    public function getProduct(): ?products
    {
        return $this->product;
    }

    public function setProduct(?products $product): self
    {
        $this->product = $product;

        return $this;
    }
}
