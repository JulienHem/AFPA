<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * qsg;,dsnh:jsdgsdkjgd
     * @Route("/", name="home")
     */
    public function index()
    {
        /**
         * @Route("/", name="home")
         */
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
