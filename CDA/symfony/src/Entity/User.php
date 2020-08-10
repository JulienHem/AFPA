<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
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
    private $userTitre;

    /**
     * @ORM\Column(type="integer")
     */
    private $userRoleId;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $userLastName;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $userFirstName;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $userPhone;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $userBirthday;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $userGender;

    /**
     * @ORM\ManyToMany(targetEntity=Adress::class, inversedBy="users")
     */
    private $adress;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    public function __construct()
    {
        $this->adress = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserTitre(): ?string
    {
        return $this->userTitre;
    }

    public function setUserTitre(string $userTitre): self
    {
        $this->userTitre = $userTitre;

        return $this;
    }

    public function getUserRoleId(): ?int
    {
        return $this->userRoleId;
    }

    public function setUserRoleId(int $userRoleId): self
    {
        $this->userRoleId = $userRoleId;

        return $this;
    }

    public function getUserLastName(): ?string
    {
        return $this->userLastName;
    }

    public function setUserLastName(string $userLastName): self
    {
        $this->userLastName = $userLastName;

        return $this;
    }

    public function getUserFirstName(): ?string
    {
        return $this->userFirstName;
    }

    public function setUserFirstName(string $userFirstName): self
    {
        $this->userFirstName = $userFirstName;

        return $this;
    }

    public function getUserPhone(): ?string
    {
        return $this->userPhone;
    }

    public function setUserPhone(string $userPhone): self
    {
        $this->userPhone = $userPhone;

        return $this;
    }

    public function getUserBirthday(): ?\DateTimeInterface
    {
        return $this->userBirthday;
    }

    public function setUserBirthday(?\DateTimeInterface $userBirthday): self
    {
        $this->userBirthday = $userBirthday;

        return $this;
    }

    public function getUserGender(): ?string
    {
        return $this->userGender;
    }

    public function setUsergender(string $userGender): self
    {
        $this->userGender = $userGender;

        return $this;
    }

    public function getSalt()
    {
        return "";
    }

    public function getUsername()
    {
        return $this->getEmail();
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function getRoles()
    {
        if ($this->userRoleId =="1")
            return ["ROLE_ADMIN"];
        if ($this->userRoleId == "2")
            return ["ROLE_CLIENT"];
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

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }


}
