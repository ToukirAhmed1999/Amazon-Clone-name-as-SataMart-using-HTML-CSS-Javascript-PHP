<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registry</title>
    <style>
        table{
            border-collapse: collapse;
            width:100%;
            color: #eb4034;
            font-family: monospace;
            font-size: 25px;
            text-align: left;
        }
        th{
            background-color: #eb4034;
            color: white;
        }

        tr:nth-child(even) {background-color: #d3f2af;}
        tr:nth-child(odd) {background-color: #9ad853;}

    </style>
</head>
<body>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Phone or email</th>
                <th>Password</th>
            </tr>
            <?php
            $conn = mysqli_connect("localhost", "root", "", "satamart");
            $sql = "SELECT * FROM customer_info";
            $result = $conn->query($sql);

            if($result->num_rows>0){
                while($row = $result->fetch_assoc())
                {
                    echo"<tr><td>" . $row["name"] . "</td><td>" . $row["number"] . "</td><td>" . $row["password"] . "</td></tr>";
                }
            }
            else{
                echo"No data found";
            }
            $conn->close();
            
            ?>
        </table>
    </div>
</body>
</html>