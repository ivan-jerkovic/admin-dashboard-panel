<?php

class PersonController
{
    public function __construct(private PersonModel $model)
    {
    }

    public function processRequest(string $method, string $url)
    {
        $urlParts = explode("/", $url);
        $id = $urlParts[3];

        if ($method === "GET") {
            if ($id) {
                $person = $this->model->getById($id);

                if (!$person) {
                    http_response_code(404);
                    echo json_encode(["message" => "Person not found!"]);
                    return;
                }

                echo json_encode([
                    "message" => "Person retrieved successfully!",
                    "payload" => $person
                ], JSON_NUMERIC_CHECK);
            } else {
                $persons = $this->model->get();

                echo json_encode([
                    "message" => "Persons retrieved successfully!",
                    "payload" => $persons
                ], JSON_NUMERIC_CHECK);
            }
        } else {
            http_response_code(405);
            header("Allow: GET");
        }
    }
}
