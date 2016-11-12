<?php

$list_files = scandir("../projects/");
foreach ($list_files as $dir_item) {
    if(is_dir("../projects/".$dir_item) && $dir_item != ".." && $dir_item != ".") {
        echo $dir_item;
        if(file_exists("../projects/".$dir_item."/descript.txt")) {
            echo file_get_contents("../projects/".$dir_item."/descript.txt");
        } else {
        }
    }
}
echo "END.";

?>