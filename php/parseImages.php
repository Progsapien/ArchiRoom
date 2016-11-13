<?php


$list_files = scandir("../projects/");
foreach ($list_files as $item) {
    if(is_dir("../projects/".$item)) {
        foreach (scandir("../projects/".$item) as $item_project) {
            if(strpos($item_project, ".jpg") || strpos($item_project, ".png")) {
                echo "projects/".$item."/".$item_project."<sep>";
            }
		}
	}
}

?>