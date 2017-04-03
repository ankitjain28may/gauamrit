<?php
$res = [
    "status" => False,
    "message" => "Error in sending the mail"
];

if(isset($_POST['submit']))
{
    $error = [];
    if (!isset($_POST['name'])) {
        $error['name'] = "Enter the name";
    }
    if (!isset($_POST['email'])) {
        $error['email'] = "Enter the email";
    }
    if (!isset($_POST['message'])) {
        $error['message'] = "Enter the message";
    }
    if (count($error)) {
        echo json_encode($error);
    }

    $to = $_POST['email'];
    $name = $_POST['name'];
    $subject = "From- support@gauamrit.org";

    $message="You are receiving this email because '".$name."' filled the contact form on gauamrit.org. Here are the details\nName - ".$name."\n Email - ".$email."\n Message - ".$subject;

    if (mail('ankitjain28may77@gmail.com', $subject, $message, 'From: support@gauamrit.org')) {
        $res = [
            "status" => true,
            "message" => "Email has been sent"
        ];
        echo json_encode($res);
    } else {
        echo json_encode($res);
    }

} else {
    echo json_encode($res);
}

?>
