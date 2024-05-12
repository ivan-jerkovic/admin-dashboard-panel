<?php

class Database
{
    private $host = "localhost";
    private $dbName = "main-db";
    private $user = "user";
    private $password = "password";
    private $port = "7432";
    private $connection;

    public function __construct()
    {
        $this->connection = pg_connect("host=$this->host dbname=$this->dbName user=$this->user password=$this->password port=$this->port");
        if (!$this->connection) {
            die("Connection failed!");
        }
    }

    public function query(string $sql)
    {
        return pg_query($this->connection, $sql);
    }

    public function prepare(string $stmtName, string $sql)
    {
        pg_prepare($this->connection, $stmtName, $sql);
    }

    public function execute(string $stmtName, array $params = [])
    {
        return pg_execute($this->connection, $stmtName, $params);
    }

    public function close()
    {
        pg_close($this->connection);
    }
}
