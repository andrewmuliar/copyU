<?php
$post = file_get_contents('php://input',true);
$ar = json_decode($post); //to array from string
$domain = $ar[0]; //root from user to explode url
$root = 'http://localhost/php_request/'; //host root for deploy url
echo var_export($ar, true);
echo 'Array item = '.$ar[1][0].' end ';
for($i = 0; $i < count($ar); $i++) 
{
 /*if(substr($ar[1][$i], 0, strlen($root)) == $root)
 {
  $ar[1][$i] = str_replace($root, '', $ar[1][$i]);
  echo ' Replacing '.$ar[1][$i];
  //deleting our $root from directory
 }*/
 //remove from link domain name
 $ar[1][$i] = str_replace('http://localhost/php_request/', $domain, $ar[1][$i]);
 $no_domain = str_replace($domain, '', $no_domain);
 //get posisiton of last slash for directory 
 $last_slash = strripos($no_domain, '/');
 //creating directory from root folder
 $directory  = '/xampp/htdocs/php_request/uploads/'.substr_replace($no_domain, '', $last_slash); 
//directory to safe file
 if(!is_dir($directory)) //if no exist
  mkdir($directory, 2, true);
 else
  echo " dir =  ".$directory;
  $content = file_get_contents($ar[1][$i], true); //Tut podvog
  if($content == false) // If script or somethink cannot upload
  {
   $file_error = fopen('/xampp/htdocs/php_request/uploads/error.txt', 'w');
   fwrite($file_error, $ar[1][$i]);
   fclose($file_error);
  }
  else
  {
   $full_path = $directory.'/';
   $file_write = fopen($full_path, 'w');
   fwrite($file_write, $content);
   fclose($file_write);
  }
} 
 //write files
?>