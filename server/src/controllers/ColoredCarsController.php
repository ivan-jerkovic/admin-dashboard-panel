<?php

class ColoredCarsController
{
    public function __construct(private ColoredCarsModel $model)
    {
    }

    public function processRequest(string $method, string $url)
    {
        if ($method === "GET") {
            $date = $_GET["date"];

            if (!$date) {
                http_response_code(422);
                echo json_encode(["message" => "Date required!"]);
                return;
            }

            preg_match("/\d{4}\-\d{2}\-\d{2}/", $date, $matches);
            if ($matches === []) {
                http_response_code(422);
                echo json_encode(["message" => "Date must be in YYYY-MM-DD format!"]);
                return;
            }

            $coloredCars = $this->model->getByDate($date);

            echo json_encode([
                "message" => "Colored cars retrieved successfully!",
                "payload" => $coloredCars
            ], JSON_NUMERIC_CHECK);
        } else {
            http_response_code(405);
            header("Allow: GET");
        }
    }
}
