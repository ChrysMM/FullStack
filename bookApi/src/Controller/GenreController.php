<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Genre;
use App\Repository\GenreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/genre")
 */ 

class GenreController extends AbstractController
{
    /**
     * @Route( "",name="genre_list", methods={"GET","HEAD"})
     */
    public function list(GenreRepository $repository)
    {
        $genres = $repository->findAll();
        // $genre = $this->getDoctrine()->getRepository(Genre::class)->find($id);
        return $this->json($genres);
    }
    /**
     * @Route(" ", name="genre=create", methods={"POST"})
     */
    public function create(Request $request, SerializerInterface $serializer)
    {
        $data = $request->getContent();
        if(!empty($data)){$genre = $serializer->deserialize($data, Genre::class, 'json');
//TODO vérifier que l'entité deserializée  corresponde bien à l'entity Genre
            $em = $this->getDoctrine()->getManager();
            $em->persist($genre);
            $em->flush();
    
            return $this->json($genre, 201);
        } else {
            return $this->json(
                [
                    'error_bad_request' => 'Bad request, check if the parameters match a Genre ressource'
                ],
                400
            );
        }
        
    }
    /**
     * @Route("/{id}", name="genre_view", methods={"GET", "HEAD"})
     */
    public function view($id, GenreRepository $repository)
    {
        $genre = $repository ->find($id);
        if ($genre) {
            return $this->json($genre);
        } else {

            return $this->json(
                [
                    'error_not_found' => sprintf("Genre %d not found", $id)
                ],
                404
            );
        }
    }
    /**
     * @Route( "/{id}", name="genre_update", methods={"PUT"})
     */
    public function update($id, Request $request, SerializerInterface $serializer)

    {
        $genre = $this->getDoctrine()->getRepository(Genre::class)->find($id);
        if ($genre) {
            $data  = $request->getContent();
            $serializer->deserialize($data, Genre::class, 'json', [
                'object_to_populate' => $genre
                ]);
            $this->getDoctrine()->getManager()->flush();
            return $this->json($genre);
        } else {

            return $this->json(
                [
                    'error_not_found' => sprintf("Genre %d not found", $id)
                ],
                404
            );
        }
    }

    /**
     * @Route("/{id}", name="genre_delete", methods={"DELETE"})
     */
    public function delete($id)
    {
        $genre = $this->getDoctrine()->getRepository(Genre::class)->find($id);
        if ($genre) {

            $em = $this->getDoctrine()->getManager();
            $em->remove($genre);
            $em->flush();

            return $this->json(
                [
                    "success" => sprintf("Genre %d:%s successfully deleted", $id, $genre->getName())
                ]
            );
        } else {
            return $this->json(
                [
                    "error_not_found" => sprintf("Genre %d was not found", $id)
                ],
                404
            );
        }
    }
}
