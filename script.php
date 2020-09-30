<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "kontakty";

if (isset($_GET['action'])) {
    $_GET['action']();
}

function display()
{
    global $server, $user, $pass, $db;
    $link = mysqli_connect($server, $user, $pass, $db);
    $result = mysqli_query($link, "SELECT * FROM tbl_kontakty");
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        $row = mysqli_fetch_array($result, MYSQLI_NUM);
        echo "<tr>";
        foreach ($row as $key => $value) {
            if ($key == 0) {
                echo '<td scope="row" id="' . $value . '"style="display: none;">';
                echo $value;
                echo "</td>";
            } else {
                echo "<td>";
                echo $value;
                echo "</td>";
            }
        }
        echo "</tr>";
    }
    mysqli_close($link);

}


?>