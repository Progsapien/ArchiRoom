<?php

// Сканим папку с проектами
echo "[";
foreach (scandir("../projects/") as $projects_dir) {
    // Если папка проекта содержит descript.json, открываем его и добавляем свойство pictures, path
    if(is_dir("../projects/".$projects_dir) && file_exists("../projects/".$projects_dir."/descript.json")) {
        echo "{".file_get_contents("../projects/".$projects_dir."/descript.json").', "path": "projects/'.$projects_dir.'",
        "pictures": "[';
        foreach (scandir("../projects/".$projects_dir) as $project_item) {
            if(strpos($project_item, ".jpg") || strpos($project_item, ".png")) {
                echo $project_item.",";
            }
        }
        echo 'null]"},';
    }
}
echo "null]";
?>