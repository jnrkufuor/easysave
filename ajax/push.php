<?php
/**
*/
include_once("adb.php");
/**
*Users  class
*/
class push extends adb{

    /**
     * [[Description]]
     * @return [[Type]] [[Description]]
     */
    function pullMessages()
    {
        return $this->query("Select * from messages");
    }


}


?>




