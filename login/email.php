<?php
	if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['email']))
	{
		emailFunct();
	}

	function emailFunct()
	{
		$file_path_type = "img/png"; // File Type
		$file_path_name = "businesscard.png"; // this file name will be used at reciever end 
 
		$from ="no-reply@cypressbusinesscard.com"; // E-mail address of sender
		$to = $_POST['email'];                     // E-mail address of reciever
		$subject = "Here is your business card!"; // Subject of email
		$message = "Dear Customer,";
	        $message .= "\r\n\r\n";
    		$message .= "Please find your document attached to this email.";
    		$message .= "\r\n\r\n";
    		$message .= "Thanks,";
    		$message .= "\r\n\r\n";
    		$message .= "The Cypress Team";
    		$message .= "\r\n";
 
		$headers = "From: ".$from; 
		
		//Process png data
		$data = $_POST['png'];
		$data = str_replace('data:image/png;base64,', '', $data);
		$data = str_replace(' ', '+', $data);
		$data = base64_decode($data);
 
		$rand = md5(time());
		$mime_boundary = "==Multipart_Boundary_x{$rand}x"; 
 
		$headers .= "\nMIME-Version: 1.0\n" .
		"Content-Type: multipart/mixed;\n" .
		" boundary=\"{$mime_boundary}\""; 
 
		$message .= "This is a multi-part message in MIME format.\n\n" .
		"--{$mime_boundary}\n" .
		"Content-Type:text/html; charset=\"iso-8859-1\"\n" .
		"Content-Transfer-Encoding: 7bit\n\n" .
		$message .= "\n\n"; 

		$data = chunk_split(base64_encode($data)); 
 
		$message .= "--{$mime_boundary}\n" .
		"Content-Type: {$file_path_type};\n" .
		" name=\"{$file_path_name}\"\n" .
		"Content-Disposition: attachment;\n" .
		" filename=\"{$file_path_name}\"\n" .
		"Content-Transfer-Encoding: base64\n\n" .
		$data .= "\n\n" .
		"--{$mime_boundary}--\n";  
		
		$return = "Email sent to: $to";
		
		if(@mail($to, $subject, $message, $headers)) {
			echo json_encode($return);
 
		} else {
			echo json_encode("Failed to send email.");
		}
	}
?>