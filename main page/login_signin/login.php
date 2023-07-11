<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <main>
    <div class="logo">
            <p>Echo</p>
        </div>
        <div class="container">
            <div class="form_section">
                <p class="form_name">login</p>
                <form action="/" method="post" class="form_forlogin">
                    <section>
                        <label for="Name" class="lab">Name</label>
                        <br>
                        <input type="text" id="name" name="Name" placeholder="Enter your Name" required>
                    </section>
                    <section>
                        <label for="Email" class="lab">Email</label>
                        <br>
                        <input type="email" id="Email" name="Email" placeholder="Enter your email" required>
                    </section>
                    <section>
                        <label for="Password" class="lab" required>Password</label>
                        <br>
                        <input type="password" id="Password" name="password" placeholder="Enter password" required>
                    </section>
                    <section>
                        <label for="Confirm_password" class="lab">Confirm password</label>
                        <br>
                        <input type="password" id="Confirm_password" name="password" placeholder="Re-enter password" required>
                    </section>
                    <button name="button" class="buutton_form">Continue</button>
                </form>
            </div>
            <div class="image_section">
                <img src="46929.jpg" alt="An image">
            </div>
            
                <!-- PHP section-->
                        <!-- <?php
                if(isset($_POST['button'])){
                    require 'db/phptest.php';

                    $getname=$_POST['name'];
                    $getmail=$_POST['email'];
                    $getpass=$_POST['password'];
                    $conpass=$_POST['conpass'];
                    $hash=password_hash($getpass, PASSWORD_DEFAULT);

                    $sql="select email from credentials where email = '$getmail'";
                    $sqlres=mysqli_query($connect,$sql);
                    $rowcount=mysqli_num_rows($sqlres);

                    if($rowcount != 0){
                        echo"This email is already has an account.Try using another one";
                    }
                    if($getpass != $conpass){
                        echo"confirm your password properly";
                    }
                    if(($rowcount ==0) && ($getpass == $conpass)){
                        echo"You have succesfully Signed up.";
                        $gotologin = "<a href ='login1.php'>Log in</a>";
                        echo $gotologin;

                        $sql = "insert into credentials (name, email, password) values ('$getname', '$getmail','$hash')";
                        $sqlres=mysqli_query($connect, $sql);
                    }

                }
            ?> -->
        </div>
    </main>
</body>
</html>