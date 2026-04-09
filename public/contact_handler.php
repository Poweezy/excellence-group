<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect post data
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $company = strip_tags(trim($_POST["company"] ?? ''));
    $subject = strip_tags(trim($_POST["subject"] ?? 'General Inquiry'));
    $message = trim($_POST["message"] ?? '');

    // Check required fields
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(array("error" => "Oops! There was a problem with your submission. Please complete the form and try again."));
        exit;
    }

    // Recipient email address
    $recipient = "info@excellencegroup.co.sz";

    // Email subject
    $email_subject = "New Contact from $name: $subject";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    if (!empty($company)) {
        $email_content .= "Company: $company\n";
    }
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    $boundary = md5(time());
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // If there is an attachment
    if(isset($_FILES['attachment']) && $_FILES['attachment']['error'] == UPLOAD_ERR_OK){
        $file_tmp_name = $_FILES['attachment']['tmp_name'];
        $file_name = $_FILES['attachment']['name'];
        $file_size = $_FILES['attachment']['size'];
        $file_type = $_FILES['attachment']['type'];
        
        // Read file contents
        $handle = fopen($file_tmp_name, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));

        // Format headers for attachment
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";

        // Construct body with attachment
        $body = "--".$boundary."\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body .= $email_content;
        $body .= "\r\n";
        $body .= "--".$boundary."\r\n";
        $body .= "Content-Type: $file_type; name=\"".$file_name."\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"".$file_name."\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $encoded_content;
        $body .= "\r\n--".$boundary."--";

    } else {
        // No attachment
        $body = $email_content;
    }

    // Send the email.
    if (mail($recipient, $email_subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Thank You! Your message has been sent."));
    } else {
        http_response_code(500);
        echo json_encode(array("error" => "Oops! Something went wrong and we couldn't send your message."));
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(array("error" => "There was a problem with your submission, please try again."));
}
?>
