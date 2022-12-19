<?
header("Access-Control-Allow-Origin: *");
require_once ("./dbcon.php");
$method = explode("/", $_SERVER['REQUEST_URI']);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");


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
        $delete = $_POST['deleteItems'];
        $row = mysqli_query($connect,"DELETE FROM Cards WHERE ID IN ($delete)");
        echo "Done",$delete;
        break;
    case "upload": 
        $delete = $_POST['deleteItems'];
        $row = mysqli_query($connect,"DELETE FROM Cards WHERE ID IN ($delete)");
        echo "Done",$delete;
        break;
    }   



?>
