<?php

require_once "server/src/models/DatabaseModel.php";

class ColoredCarsModel
{
    private $db;

    public function __construct(Database $database)
    {
        $this->db = $database;
    }

    public function getByDate(string $date)
    {
        $stmtName = "getColoredCarsByDate";
        $sql = "SELECT color, amount FROM T_Colored_Cars WHERE date = $1";
        $this->db->prepare($stmtName, $sql);

        $queryResult = $this->db->execute($stmtName, [$date]);
        $data = $queryResult ? pg_fetch_all($queryResult) : [];

        //echo json_encode($data, JSON_NUMERIC_CHECK);

        return $data;
    }
}
