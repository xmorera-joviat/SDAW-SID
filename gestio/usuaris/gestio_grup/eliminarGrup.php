<?php
$base ="../../../";
include $base.'includes/session.h';
include $base.'includes/connect.h';

	$query = "DELETE FROM grups WHERE grup_id=";
	$query = $query."'".$_POST['grup']."'";
	//echo $query;
	$result = mysqli_real_query ($mysqli,$query);

	header('Location: ../gestioUsuaris.php#Quadrat6');
	
	mysqli_close($mysqli);
?>