<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('userTitre', TextType::class, [
                'label' => "Titre de l'utilisateur",
                'attr' => [
                    'placeholder' => '',
                ],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^[A-Za-zéèàçâêûîôäëüïö\_\-\s]+$/',
                        'message' => 'Caratère(s) non valide(s)'
                    ]),
                ]
            ])
            ->add('userRoleId', TextType::class, [
                'label' => "ID du Produit",
                'attr' => [
                    'placeholder' => '',
                ],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^[A-Za-zéèàçâêûîôäëüïö\_\-\s]+$/',
                        'message' => 'Caratère(s) non valide(s)'
                    ]),
                ]
            ])
            ->add('userLastName', TextType::class, [
                'label' => "Nom de l'utilisateur",
                'attr' => [
                    'placeholder' => '',
                ],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^[A-Za-zéèàçâêûîôäëüïö\_\-\s]+$/',
                        'message' => 'Caratère(s) non valide(s)'
                    ]),
                ]
            ])
            ->add('userFirstName', TextType::class, [
                'label' => "Prénom de l'utilisateur",
                'attr' => [
                    'placeholder' => '',
                ],
                'constraints' => [
                    new Regex([
                        'pattern' => '/^[A-Za-zéèàçâêûîôäëüïö\_\-\s]+$/',
                        'message' => 'Caratère(s) non valide(s)'
                    ]),
                ]
            ])
            ->add('userPhone', TextType::class, [
                'label' => "Numéro de téléphone",
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('userBirthday', TextType::class, [
                'label' => "Anniversaire de l'utilisateur",
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('userGender', TextType::class, [
                'label' => "Genre",
                'attr' => [
                    'placeholder' => '',
                ],
            ])
            ->add('adress', TextType::class, [
                'label' => "Adresse",
                'attr' => [
                    'placeholder' => '',
                ],

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
