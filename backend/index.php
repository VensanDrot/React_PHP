<?
header("Access-Control-Allow-Origin: *");
require_once ("./dbcon.php");

$result=array();

$row = mysqli_query($connect,"SELECT * FROM `Cards`");

while($data = mysqli_fetch_assoc($row)) {
   array_push($result,$data);
}
echo json_encode($result);
?>
