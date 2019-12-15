<?php
// Start the session
session_start();

if($_POST['str'] === "LOAD") {
	$data = $_SESSION['str'];
	echo json_encode($data);
}
else {
	$_SESSION['str'] = $_POST['str'];
}

?>  
