<?php

require "server/src/models/DatabaseModel.php";

$db = new Database();

$db->query("DROP TABLE IF EXISTS T_Colored_Cars");
$db->query("DROP TABLE IF EXISTS T_Person");

$personTableSql = "CREATE TABLE T_Person(
    id SERIAL PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    permissions text[]
);";

$db->query($personTableSql);

$personDataSql = "INSERT INTO T_Person (first_name, last_name, email, permissions) VALUES
    ('John', 'Doe', 'john.doe@email.com', ARRAY ['Manage Colored Cars']),
    ('Jane', 'Doe', 'jane.doe@email.com', null)";

$db->query($personDataSql);

$coloredCarsTableSql = "CREATE TABLE T_Colored_Cars(
    id SERIAL PRIMARY KEY,
    color TEXT NOT NULL,
    amount INT NOT NULL,
    date DATE NOT NULL
)";

$db->query($coloredCarsTableSql);

for ($i = 1; $i <= 31; $i++) {
    $randomAmounts = [];
    for ($j = 0; $j < 4; $j++) {
        array_push($randomAmounts, rand(1, 50));
    }

    $coloredCarsDataSql = "";
    if ($i < 10) {
        $coloredCarsDataSql = "INSERT INTO T_Colored_Cars (color, amount, date) VALUES
    ('red', $randomAmounts[0], '2024-05-0$i'),
    ('blue', $randomAmounts[1], '2024-05-0$i'),
    ('green', $randomAmounts[2], '2024-05-0$i'),
    ('yellow', $randomAmounts[3], '2024-05-0$i')";
    } else {
        $coloredCarsDataSql = "INSERT INTO T_Colored_Cars (color, amount, date) VALUES
    ('red', $randomAmounts[0], '2024-05-$i'),
    ('blue', $randomAmounts[1], '2024-05-$i'),
    ('green', $randomAmounts[2], '2024-05-$i'),
    ('yellow', $randomAmounts[3], '2024-05-$i')";
    }

    $db->query($coloredCarsDataSql);
}

echo "Database seeded successfully!";
