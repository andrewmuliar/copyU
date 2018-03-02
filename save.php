<?php
$post = file_get_contents('php://input',true);
$domain = 'https://iqoption.com/land/binary-options-demo/en/';
$root = 'http://localhost/php_request/';
$dom_count = strlen($domain);
$ar = json_decode($post); //to array from string
for($i = 0; $i < count($ar); $i++)
{
 echo 'result of strpos = '.strpos($ar[$i],"http://localhost/php_request/");
 if(substr($ar[$i], 0, strlen($root)) == $root)
 {
  $ar[$i] = str_replace($root, $domain, $ar[$i]);
  //deleting our root from directory
 }
 //remove from link domain name
 $no_domain = str_replace('http://localhost/php_request/', $domain, $ar[$i]);
 $no_domain = str_replace($domain, '', $no_domain);
 //get posisiton of last slash for directory 
 $last_slash = strripos($no_domain, '/');
 //creating directory from root folder
 $directory  = '/xampp/htdocs/php_request/uploads/'.substr_replace($no_domain, '', $last_slash);
 echo 'DIRECTORY = '.$directory;
 if(!is_dir($directory)) //if no exist
  mkdir($directory, 2, true);
 else
  echo $directory;
  $content = file_get_contents($ar[$i], true);
  if($content == false) // If script or somethink cannot upload
  {
   $file_error = fopen('/xampp/htdocs/php_request/uploads/error.txt', 'w');
   fwrite($file_error, $ar[$i]);
   fclose($file_error);
  }
  else
  {
   $full_path = $directory.strrchr($no_domain, '/');
   $file_write = fopen($full_path, 'w');
   fwrite($file_write, $content);
   fclose($file_write);
  }
} 
 //write files
?>