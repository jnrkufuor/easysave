<?php
include_once('users.php');
$obj = new users();
if ($_REQUEST['cmd']!=null)
{
    $cmd=$_REQUEST['cmd'];
    if($cmd==1)
    {   
        
        $result=$obj->pullMessages();
        $num=$obj->fetch();
        if($num==null){
            echo '{"message":"false"}';
        }
        else
        {
            $ob = new users();
          
            $result=$ob->pullMessages();
            header('Content-Type:application/json');
            while($one=$ob->fetch())
            { 
                $array[]=$one;  
            }
            echo json_encode($array);
        }
    }
   

}
?>