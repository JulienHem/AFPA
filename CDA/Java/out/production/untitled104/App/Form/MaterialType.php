<?php

namespace App\Form;

use App\Entity\Material;
use App\Entity\Products;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MaterialType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('materialName', TextType::class, [
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('products', EntityType::class, [
                'class' => Products::class,
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Material::class,
        ]);
    }
}
