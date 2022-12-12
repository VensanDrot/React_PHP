<?
$connect = mysqli_connect("Localhost","root","","ScandiWeb");

if ($connect->connect_error) {
	printf("Connection failed");
}
?>