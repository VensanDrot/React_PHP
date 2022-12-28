<?
require_once ("./dbcon.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");

$method = explode("/", $_SERVER['REQUEST_URI']);
switch ($method[1]) {
    case "read":
        $result=array();
         $row = mysqli_query($connect,"SELECT * FROM `ScandiWeb`");
         while($data = mysqli_fetch_assoc($row)) {
            array_push($result,$data);
         }
         echo json_encode($result);
        break;
    case "delete": 
        $delete = $_POST['deleteElements'];
        $row = mysqli_query($connect,"DELETE FROM ScandiWeb WHERE ID IN ($delete)");
        echo  $delete;
        break;
    case "newcard": 
        $json = $_POST["body"];
        $data = json_decode($json);
        $sku = trim(htmlspecialchars(strip_tags($data->sku)));
        $name = trim(htmlspecialchars(strip_tags($data->name)));
        $price = trim(htmlspecialchars(strip_tags($data->price)));
        $type = trim(htmlspecialchars(strip_tags($data->type)));
        $atribute = trim(htmlspecialchars(strip_tags($data->atribute)));   
        if (!empty($sku) && !empty($name) && !empty($price) && !empty($type) && !empty($atribute)) {     
        $insert = mysqli_query($connect,"INSERT INTO `ScandiWeb`(`SKU`, `Name`, `Price`, `PSAttribute`, `PType`) VALUES ('$sku','$name','$price','$atribute','$type')");
        echo  "Success";
        }
        else {
            echo $sku . $name . $price.$type.$atribute;
        }
        break;
    case "check": 
        $SKU = $_POST['SKU'];
        $row = mysqli_query($connect,"SELECT ID FROM ScandiWeb WHERE SKU = '$SKU'");
        $data = mysqli_fetch_assoc($row);
        echo json_encode($data);
        break;
    }   


?>
