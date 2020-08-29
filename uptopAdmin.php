<?php include "db.php"; ?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <title>upTop</title>
  </head>
<style>
.sidebar{
    background-color: whitesmoke;
    border: 1px solid black;
    border-radius: 9px;
    padding-top:6px;
}

.nav-link {
    display: block;
    padding: .5rem 1rem;
    border-bottom: 1px solid grey !important;
    width:102%;
    color:black;
}

.nav-pills .nav-link {
    border-radius: 0rem !important; 
}

.custom-container{
    margin-left:2.3rem;
    margin-right:2.3rem;
}

@media only screen and (max-width: 600px) {
    .custom-container{
    margin-left:1.3rem;
    margin-right:1.3rem;
}
}
</style>
  <body>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand text-red" href="#">
    <img src="img/logo-trimmed.png" width="130" height="40" class="d-inline-block align-top" alt="" loading="lazy">
    Admin
  </a>
</nav>
    <div class="mt-4 custom-container">
        <center><h1>User Enquiries</h1></center>
    <br>
<div class="row">
  <div class="col-md-3 sidebar">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<?php
$res = $conn->query("SELECT DISTINCT Course FROM userenquiry ORDER BY Course");
$i=1;
$flag=0;
if (mysqli_num_rows($res) > 0) {
    while ($row = mysqli_fetch_assoc($res)) {
        if ($flag==0) {
            echo '<a class="nav-link active" id="v-pills-course-'.$i.'-tab" data-toggle="pill" href="#v-pills-course-'.$i.'" role="tab" aria-controls="v-pills-settings" aria-selected="true">'.$row["Course"].'</a>';
            $flag=1;
        }
        else{
            echo '<a class="nav-link" id="v-pills-course-'.$i.'-tab" data-toggle="pill" href="#v-pills-course-'.$i.'" role="tab" aria-controls="v-pills-settings" aria-selected="false">'.$row["Course"].'</a>';
        }
        //echo '<hr class="divider">';
    $i = $i+1;
    }
}
?>
 </div>
  </div>
  <div class="col-md-9">
    <div class="tab-content" id="v-pills-tabContent">
<?php
    $res = $conn->query("SELECT DISTINCT Course FROM userenquiry order by Course");
    $flag=0;
    $i=0;
    if (mysqli_num_rows($res) > 0) {
        // output data of each row
        while ($row = mysqli_fetch_assoc($res)) {
            $i = $i +1;
            if ($flag==0) {
                echo '<div class="tab-pane fade show active" id="v-pills-course-'.$i.'" role="tabpanel" aria-labelledby="v-pills-course-'.$i.'-tab">';
                $flag = 1;
            }
            else{
                echo '<div class="tab-pane fade show " id="v-pills-course-'.$i.'" role="tabpanel" aria-labelledby="v-pills-course-'.$i.'-tab">';
            }

            echo '<input style="width:20rem;" onkeyup="search(this.id)" class="my-3 form-control" type="text" placeholder="Search..." id="course-search-'.$i.'">';
            $sql = "SELECT * FROM userenquiry Where Course='".$row['Course']."' ORDER BY Date desc";
            $res2 = $conn->query($sql);
            echo $conn->error;
            echo '<div class="row" id="course-search-'.$i.'-deck">';
            if (mysqli_num_rows($res2) > 0) {
                while ($row2 = mysqli_fetch_assoc($res2)) {
                    echo'<div class="col-md-6 course-search-'.$i.'-card">
                          <div class="card shadow mt-4">
                            <div class="card-header">
                                <h3>'.$row2['Course'].'</h3>
                            </div>
                            <div class="card-body p-4 row">
                                <div class="col-md-5">
                                    <p><b>'.$row2['Name'].'</b></p>
                                    <p style="color:grey">'.$row2['Designation'].'</p>
                                    <br>
                                    <i>'.$row2['Date'].'</i>
                                </div>
                                <div class="col-md-7">
                                    <i class="fas fa-envelope"></i> &nbsp;'.$row2['Email'].'<br>
                                    <i class="mt-4 fas fa-phone"></i> &nbsp;'.$row2['Phone'].'<br>
                                    <i class="mt-4 fas fa-building"></i> &nbsp;'.$row2['City'].'
                                </div>
                            </div>
                          </div><!--card-->
                        </div>';
                }
            }
            echo '</div>';
            echo '</div>';
        }
    }

        ?>
  </div>
  </div>
</div><!--row-->
<center>
    <form method="POST" action="excel.php">
    <input type="hidden" name="token" value="uptopAdmin1234"> 
    <button type="submit" class="mt-5 btn btn-success btn-lg">Download Data</button>
</form>
</center>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<script>
function search(iid) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(iid);
    filter = input.value.toUpperCase();
    ul = document.getElementById(iid+"-deck");
    li = ul.getElementsByClassName(iid+"-card");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("card")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function downloadData()
{
    $.post("excel.php", {token:"uptopAdmin1234"}, function(status, data){
        alert(data);
        alert(status);
    });
}
</script>

</body>
</html>