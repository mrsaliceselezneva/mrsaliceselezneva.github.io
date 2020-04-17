<!DOCTYPE html>
<meta charset = "utf-8">

<?php
//error_reporting(E_ALL);

//require 'app/header.php';
//require 'app/footer.php';
?>
<form action = "" method = "post">
    матрица отношений <textarea required = 'true'  cols = '20' rows = '10' name = 'mas'></textarea><br> 
    элементы первого множества <textarea required = 'true'  cols = '20' rows = '5' name = 'mas1'></textarea><br> 
    элементы второго множества <textarea required = 'true'  cols = '20' rows = '5' name = 'mas2'></textarea><br> 
    <input type= 'submit' value = 'start' name= 'start'>
</form>

<?php
$start = $_POST['start'];

if(($start) != null){
    $vmas = explode("\n", $_POST['mas']);
    $mas1 = explode(" ", $_POST['mas1']);
    $mas2 = explode(" ", $_POST['mas2']);
    
    $n = count($vmas);
    $mas = array();
    
    if($vmas != null){
 
        $pr = true;
        $v = 0;
        //из mas делаю матрицу
        foreach($vmas as $i){
            //добавляю новый массив в матрицу
            $mas[] = array();
            trim($i, " \t.");
            $i = str_replace(' ', '', $i);
            for($j = 0; $j < strlen($i); ++$j){
                //заполняю массив и проверяю на то, что там только 1 и 0
                if($i[$j] === '0' or $i[$j] === '1')
                    $mas[$v][] = $i[$j];
            }
            
            //сверяю размер строки с количеством строк
            if (count($mas[$v]) !== $n){
                $pr = false;
            }
            ++$v;
        }
        
        if($n !== count($mas1) || $n !== count($mas2))
            $pr = false;
        
        //вывожу матрицу
        if ($pr){
            echo "<br><b>Ваша матрица отношений: </b><br>";
            for($i = 0; $i < $n; ++$i){
                for($j = 0; $j < $n; ++$j){
                    echo $mas[$i][$j];
                }
                echo '<br>';
            }
        }
        else{
            echo 'error';
        }
        
        //происходит подсчёт количества 1 в каждой строке
        
        if($pr){
            $cnt = 0;
            $pr = true;
            for($i = 0; $i < $n; ++$i){
                $cnt = 0;
                for($j = 0; $j < $n; ++$j){
                    $cnt += $mas[$i][$j];
                }
                if($cnt > 1){
                    $pr = false;
                }
            }

            if($pr){
                echo "<b>это отношение - функция</b><br>";
            }
            else{
                echo "<b>это отношение - не функция</b><br>";
            }
            
            echo '<b>первое множество:</b> ';
             for($i = 0; $i < $n; ++$i){
                 echo $mas1[$i]." ";
             }
             echo '<br>';
             
             echo '<b>второе множество:</b> ';
             for($i = 0; $i < $n; ++$i){
                 echo $mas2[$i]." ";
             }
             echo '<br>';
        }
    }
}

?>

</body>
</html>

