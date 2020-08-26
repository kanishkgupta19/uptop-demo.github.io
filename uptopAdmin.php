<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <title>upTop</title>
  </head>
  <body>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand text-red" href="#">
    <img src="img/logo-trimmed.png" width="130" height="40" class="d-inline-block align-top" alt="" loading="lazy">
    Admin
  </a>
</nav>
    <div class="container">
        <center><h1>User Enquiries</h1></center>
    <br>
<div class="row">
<?php
    include "db.php";
    $res = $conn->query("SELECT * FROM userenquiry order by Date desc");
    if (mysqli_num_rows($res) > 0) {
        // output data of each row
        while ($row = mysqli_fetch_assoc($res)) {
            echo ' <div class="col-md-6">
          <div class="card shadow mt-4">
              <div class="card-header">
              <h3>'.$row['Course'].'</h3>
              </div>
              <div class="card-body p-4 row">
                  <div class="col-md-6">
                      <p><b>'.$row['Name'].'</b></p>
                      <p style="color:grey">'.$row['Designation'].'</p>
                      <br>
                      <i>'.$row['Date'].'</i>
                  </div>
                  <div class="col-md-6">
                      <i class="mt-4 fas fa-envelope"></i> &nbsp;'.$row['Email'].'<br>
                      <i class="mt-4 fas fa-phone"></i> &nbsp;'.$row['Phone'].'<br>
                      <i class="mt-4 fas fa-building"></i> &nbsp;'.$row['City'].'
                  </div>
              </div>
          </div><!--card-->
      </div>';
        }
    }

        ?>
        </div>
        
        
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>