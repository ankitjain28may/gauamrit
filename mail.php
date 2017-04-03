<?php
$res = [
    "status" => False,
    "message" => "Error in sending the mail"
];

if(isset($_POST['mail']))
{
    $mail = json_decode($_POST['mail']);
    $error = [];
    if (!isset($mail['name'])) {
        $error['name'] = "Enter the name";
    }
    if (!isset($mail['email'])) {
        $error['email'] = "Enter the email";
    }
    if (!isset($mail['message'])) {
        $error['message'] = "Enter the message";
    }
    if (!count($error)) {
        return json_encode($error);
    }

    $to = $mail['email'];
    $name = $mail['name'];
    $subject = $mail['message'];

    $message="Hi Ankit,\n\nThis is a mail from the viewer of your portfolio website with some message.\n\n ".$subject."\n\nsent by ".$name."\n\nEmail address: ".$to;

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