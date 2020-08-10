<?php

namespace App\Form;

use App\Entity\Format;
use App\Entity\Material;
use App\Entity\OrdersDetails;
use App\Entity\Products;
use App\Entity\Theme;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;

class ProductsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('proName', TextType::class, [
                'label' => 'Nom du produit',
                'attr' => [
                    'placeholder' => 'Produit',
                ],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^[A-Za-zéèàçâêûîôäëüïö\_\-\s]+$/',
                        'message' => 'Caratère(s) non valide(s)'
                    ]),
                ]
            ])
            ->add('proStockAle', TextType::class, [
                'label' => 'Alerte Stock',
                'attr' => [
                    'placeholder' => 'Alerte',
                ],
            ])
            ->add('proUnitStockPhy', TextType::class, [
                'label' => 'Stock Physique',
                'attr' => [
                    'placeholder' => 'Alerte',
                ],
            ])
            ->add('proUnitOnOrder', TextType::class, [
                'label' => 'Unité en commande',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('proDiscontinued', TextType::class, [
                'label' => 'Discontinued',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('proNote', TextType::class, [
                'label' => 'Note du produit',
                'attr' => [
                    'placeholder' => 'Libellé',
                ],
            ])
            ->add('proLib', TextType::class, [
                'label' => 'Libellé',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('proDescription', TextType::class, [
                'label' => 'Description',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('proUnitPrice', TextType::class, [
                'label' => 'Prix Unitaire',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('material', EntityType::class, [
                'class' => Material::class,
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('format', EntityType::class, [
                'class' => Format::class,
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('theme', EntityType::class, [
                'class' => Theme::class,
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('orderDetails', EntityType::class, [
                'class' => OrdersDetails::class,
                'label' => 'Nom du fournisseur',
                'attr' => [
                    'placeholder' => '',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Products::class,
        ]);
    }
}
