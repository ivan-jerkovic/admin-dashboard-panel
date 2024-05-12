<?php

require "server/src/models/DatabaseModel.php";
require "server/src/models/PersonModel.php";
require "server/src/models/ColoredCarsModel.php";
require "server/src/controllers/PersonController.php";
require "server/src/controllers/ColoredCarsController.php";

header("Content-type: application/json; charset=UTF-8");

$db = new Database();

$personModel = new PersonModel($db);
$personController = new PersonController($personModel);

$coloredCarsModel = new ColoredCarsModel($db);
$coloredCarsController = new ColoredCarsController($coloredCarsModel);

$urlParts = explode("/", $_SERVER["REQUEST_URI"]);

if ($urlParts[2] === "persons") {
    $personController->processRequest($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"]);
} else if ($urlParts[2] === "colored-cars") {
    $coloredCarsController->processRequest($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"]);
} else {
    http_response_code(404);
    exit;
}
