<?php

namespace App\Controller;

use App\Entity\Format;
use App\Form\FormatType;
use App\Repository\FormatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/format")
 */
class FormatController extends AbstractController
{
    /**
     * @Route("/", name="format_index", methods={"GET"})
     */
    public function index(FormatRepository $formatRepository): Response
    {
        return $this->render('format/index.html.twig', [
            'formats' => $formatRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="format_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $format = new Format();
        $form = $this->createForm(FormatType::class, $format);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($format);
            $entityManager->flush();

            return $this->redirectToRoute('format_index');
        }

        return $this->render('format/new.html.twig', [
            'format' => $format,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="format_show", methods={"GET"})
     */
    public function show(Format $format): Response
    {
        return $this->render('format/show.html.twig', [
            'format' => $format,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="format_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Format $format): Response
    {
        $form = $this->createForm(FormatType::class, $format);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('format_index');
        }

        return $this->render('format/edit.html.twig', [
            'format' => $format,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="format_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Format $format): Response
    {
        if ($this->isCsrfTokenValid('delete'.$format->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($format);
            $entityManager->flush();
        }

        return $this->redirectToRoute('format_index');
    }
}
