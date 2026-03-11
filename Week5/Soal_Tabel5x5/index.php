<!DOCTYPE html>
<html>
<head>
<title>Tabel 5x5</title>

<style>
body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
    font-family:Arial;
}

table{
    border-collapse:collapse;
}

td{
    width:70px;
    height:70px;
    text-align:center;
    border:2px solid black;
    background:white;
    font-weight:bold;
}

/* warna muncul saat hover */
.baris1:hover{ background:red; }
.baris2:hover{ background:yellow; }
.baris3:hover{ background:green; color:white;}
.baris4:hover{ background:blue; color:white;}
.baris5:hover{ background:brown; color:white;}

</style>

</head>
<body>

<table>
<?php
for($i=1;$i<=5;$i++){
    echo "<tr>";
    for($j=1;$j<=5;$j++){
        echo "<td class='baris$i'>$i,$j</td>";
    }
    echo "</tr>";
}
?>
</table>
</body>
</html>