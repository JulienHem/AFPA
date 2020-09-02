<?php

namespace App\Entity;

use App\Repository\MaterialRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MaterialRepository::class)
 */
class Material
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
    private $materialName;

    /**
     * @ORM\OneToMany(targetEntity=Products::class, mappedBy="material")
     */
    private $products;

    /**
     * @ORM\OneToMany(targetEntity=products::class, mappedBy="product")
     */
    private $product;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->product = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMaterialName(): ?string
    {
        return $this->materialName;
    }

    public function setMaterialName(string $materialName): self
    {
        $this->materialName = $materialName;

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
            $product->setMaterial($this);
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getMaterial() === $this) {
                $product->setMaterial(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|products[]
     */
    public function getProduct(): Collection
    {
        return $this->product;
    }

}
