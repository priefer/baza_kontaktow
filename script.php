<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "kontakty";

if (isset($_GET['action'])) {
    $_GET['action']();
}
if (isset($_POST['action'])) {
    $_POST['action'](json_decode($_POST['data']));
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
function addNewContact($data)
{
    global $server, $user, $pass, $db;
    $link = mysqli_connect($server, $user, $pass, $db);
    $result = mysqli_query($link, "INSERT INTO tbl_kontakty VALUES (NULL, '$data[0]', '$data[1]', '$data[2]', '$data[3]', '$data[4]', '$data[5]', '$data[6]', '$data[7]')");
    if ($link->connect_errno) {
        echo "Nie udało się dodać kontaktu";
        exit();
    }
    mysqli_close($link);

}

?>