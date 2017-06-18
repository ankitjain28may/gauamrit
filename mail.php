<?php
$res = [
    "status" => False,
    "message" => "Error in sending the mail"
];

if(isset($_POST['submit']) && $_POST['submit'] != 0)
{
    $error = [];
    if (empty($_POST['name'])) {
        $error['name'] = "Enter the name";
    }
    if (empty($_POST['email'])) {
        $error['email'] = "Enter the email";
    }
    if (empty($_POST['message'])) {
        $error['message'] = "Enter the message";
    }
    if (count($error)) {
        echo json_encode($error);
    }

    $to = $_POST['email'];
    $name = $_POST['name'];
    $subject = "From- info@gauamrit.org";
    $text = $_POST['message'];

    $message="You are receiving this email because '".$name."' filled the contact form on gauamrit.org. Here are the details\nName - ".$name."\nEmail - ".$to."\nMessage - ".$text;

    if (mail('ankitjain28may77@gmail.com', $subject, $message, 'From: info@gauamrit.org')) {
        $res = [
            "status" => True,
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
