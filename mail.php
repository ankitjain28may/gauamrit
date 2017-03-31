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
    if (!count($error)) {
        return json_encode($error);
    }

    $to = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['message'];

    $message="Hi Ankit,\n\nThis is a mail from the viewer of your portfolio website with some message.\n\n ".$_POST['message']."\n\nsent by ".$fname.$lname."\n\nEmail address: ".$to;

    if (mail('ankitjain28may77@gmail.com', $subject, $message, 'From: support@gauamrit.org')) {
        $res = [
            "status" => True,
            "message" => "Email has been sent"
        ];
    }
    return json_encode($res);
}
return json_encode($res);

?>