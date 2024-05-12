<?php

require_once "server/src/models/DatabaseModel.php";

class PersonModel
{
    private $db;

    public function __construct(Database $database)
    {
        $this->db = $database;
    }

    public function get()
    {
        $stmtName = "getPersons";
        $sql = "SELECT id, first_name, last_name, email FROM T_Person";
        $this->db->prepare($stmtName, $sql);

        $queryResult = $this->db->execute($stmtName);
        $resultArray = $queryResult ? pg_fetch_all($queryResult) : [];

        $data = [];
        foreach ($resultArray as $row) {
            array_push($data, [
                "id" => $row["id"],
                "firstName" => $row["first_name"],
                "lastName" => $row["last_name"],
                "email" => $row["email"],
            ]);
        }

        return $data;
    }

    public function getById(int $id)
    {
        $stmtName = "getPersonById";
        $sql = "SELECT * FROM T_Person WHERE id = $1";
        $this->db->prepare($stmtName, $sql);

        $queryResult = $this->db->execute($stmtName, [$id]);
        $resultObject = pg_fetch_assoc($queryResult);

        $data = [];
        if ($resultObject) {
            $data["id"] = $resultObject["id"];
            $data["firstName"] = $resultObject["first_name"];
            $data["lastName"] = $resultObject["last_name"];
            $data["email"] = $resultObject["email"];
            $data["permissions"] = explode(",", trim(str_replace("\"", "", $resultObject["permissions"]), "{}"));
        }

        //echo json_encode($resultObject, JSON_NUMERIC_CHECK);

        return $data;
    }
}
