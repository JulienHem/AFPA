<?php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 */
class Products
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @ORM\ManyToOne(targetEntity=Material::class, inversedBy="product")
     * @ORM\ManyToOne(targetEntity=Format::class, inversedBy="product")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $proName;

    /**
     * @ORM\Column(type="integer")
     */
    private $proStockAle;

    /**
     * @ORM\Column(type="integer")
     */
    private $proUnitStockPhy;

    /**
     * @ORM\Column(type="integer")
     */
    private $proUnitOnOrder;

    /**
     * @ORM\Column(type="integer")
     */
    private $proDiscontinued;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $proNote;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $proLib;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $proDescription;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $proUnitPrice;

    /**
     * @ORM\ManyToMany(targetEntity=OrdersDetails::class, inversedBy="products")
     */
    private $orderDetails;

    /**
     * @ORM\ManyToOne(targetEntity=Material::class, inversedBy="products")
     */
    private $material;

    /**
     * @ORM\ManyToOne(targetEntity=format::class, inversedBy="products")
     */
    private $format;


    /**
     * @ORM\ManyToMany(targetEntity=Theme::class, mappedBy="product")
     */
    private $themes;

    /**
     * @ORM\OneToMany(targetEntity=OrdersDetails::class, mappedBy="product")
     */
    private $ordersDetails;

    public function __construct()
    {

        $this->format = new ArrayCollection();
        $this->orderDetails = new ArrayCollection();
        $this->themes = new ArrayCollection();
        $this->ordersDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProName(): ?string
    {
        return $this->proName;
    }

    public function setProName(string $proName): self
    {
        $this->proName = $proName;

        return $this;
    }

    public function getProStockAle(): ?int
    {
        return $this->proStockAle;
    }

    public function setProStockAle(int $proStockAle): self
    {
        $this->proStockAle = $proStockAle;

        return $this;
    }

    public function getProUnitStockPhy(): ?int
    {
        return $this->proUnitStockPhy;
    }

    public function setProUnitStockPhy(int $proUnitStockPhy): self
    {
        $this->proUnitStockPhy = $proUnitStockPhy;

        return $this;
    }

    public function getProUnitOnOrder(): ?int
    {
        return $this->proUnitOnOrder;
    }

    public function setProUnitOnOrder(int $proUnitOnOrder): self
    {
        $this->proUnitOnOrder = $proUnitOnOrder;

        return $this;
    }

    public function getProDiscontinued(): ?int
    {
        return $this->proDiscontinued;
    }

    public function setProDiscontinued(int $proDiscontinued): self
    {
        $this->proDiscontinued = $proDiscontinued;

        return $this;
    }

    public function getProNote(): ?int
    {
        return $this->proNote;
    }

    public function setProNote(?int $proNote): self
    {
        $this->proNote = $proNote;

        return $this;
    }

    public function getProLib(): ?string
    {
        return $this->proLib;
    }

    public function setProLib(string $proLib): self
    {
        $this->proLib = $proLib;

        return $this;
    }

    public function getProDescription(): ?string
    {
        return $this->proDescription;
    }

    public function setProDescription(string $proDescription): self
    {
        $this->proDescription = $proDescription;

        return $this;
    }

    public function getProUnitPrice(): ?int
    {
        return $this->proUnitPrice;
    }

    public function setProUnitPrice(?int $proUnitPrice): self
    {
        $this->proUnitPrice = $proUnitPrice;

        return $this;
    }

    /**
     * @return Collection|Format[]
     */
    public function getFormat(): Collection
    {
        return $this->format;
    }

    public function addFormat(Format $format): self
    {
        if (!$this->format->contains($format)) {
            $this->format[] = $format;
        }

        return $this;
    }

    public function removeFormat(Format $format): self
    {
        if ($this->format->contains($format)) {
            $this->format->removeElement($format);
        }

        return $this;
    }

    /**
     * @return Collection|ordersDetails[]
     */
    public function getOrderDetails(): Collection
    {
        return $this->orderDetails;
    }

    public function addOrderDetail(ordersDetails $orderDetail): self
    {
        if (!$this->orderDetails->contains($orderDetail)) {
            $this->orderDetails[] = $orderDetail;
        }

        return $this;
    }

    public function removeOrderDetail(ordersDetails $orderDetail): self
    {
        if ($this->orderDetails->contains($orderDetail)) {
            $this->orderDetails->removeElement($orderDetail);
        }

        return $this;
    }

    public function getMaterial(): ?material
    {
        return $this->material;
    }

    public function setMaterial(?material $material): self
    {
        $this->material = $material;

        return $this;
    }

    public function setFormat(?format $format): self
    {
        $this->format = $format;

        return $this;
    }


    public function getProducts(): ?Format
    {
        return $this->id;
    }

    public function setProducts(?Format $products): self
    {
        $this->products = $products;

        return $this;
    }

    public function getProduct(): ?Material
    {
        return $this->id;
    }

    public function setProduct(?Material $product): self
    {
        $this->id = $product;

        return $this;
    }

    /**
     * @return Collection|Theme[]
     */
    public function getThemes(): Collection
    {
        return $this->themes;
    }

    public function addTheme(Theme $theme): self
    {
        if (!$this->themes->contains($theme)) {
            $this->themes[] = $theme;
            $theme->addProduct($this);
        }

        return $this;
    }

    public function removeTheme(Theme $theme): self
    {
        if ($this->themes->contains($theme)) {
            $this->themes->removeElement($theme);
            $theme->removeProduct($this);
        }

        return $this;
    }

    /**
     * @return Collection|OrdersDetails[]
     */
    public function getOrdersDetails(): Collection
    {
        return $this->ordersDetails;
    }

    public function addOrdersDetail(OrdersDetails $ordersDetail): self
    {
        if (!$this->ordersDetails->contains($ordersDetail)) {
            $this->ordersDetails[] = $ordersDetail;
            $ordersDetail->setProduct($this);
        }

        return $this;
    }

    public function removeOrdersDetail(OrdersDetails $ordersDetail): self
    {
        if ($this->ordersDetails->contains($ordersDetail)) {
            $this->ordersDetails->removeElement($ordersDetail);
            // set the owning side to null (unless already changed)
            if ($ordersDetail->getProduct() === $this) {
                $ordersDetail->setProduct(null);
            }
        }

        return $this;
    }
}
