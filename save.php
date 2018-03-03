<?php
$post = file_get_contents('php://input',true);
echo 'Starting upload...';
$ar = json_decode($post); //to array from string
$domain = $ar[0]; //root from user to explode url
echo var_export($ar);
$root = 'http://localhost/php_request/'; //host root for deploy url
for($i = 0; $i < count($ar[1]); $i++) 
{
 if(substr($ar[1][$i], 0, strlen($root)) == $root)
 {
  $ar[1][$i] = str_replace($root, $domain, $ar[1][$i]);
  //replace root on domain name
 }
 //remove from link domain name
 $no_domain = str_replace($root, $domain, $ar[1][$i]);
 $no_domain = str_replace($domain, '', $no_domain);
 //get posisiton of last slash for directory 
 $last_slash = strripos($no_domain, '/');
 //creating directory from root folder
 $directory  = '/xampp/htdocs/php_request/uploads/'.substr_replace($no_domain, '', $last_slash); 
//directory to safe file
 if(!is_dir($directory)) //if no exist
  mkdir($directory, 0777, true);
 else
  $content = file_get_contents($ar[1][$i], true); 
  if($content == false) // If script or somethink cannot upload
  {
   $file_error = fopen('/xampp/htdocs/php_request/uploads/error.txt', 'w');
   fwrite($file_error, $ar[1][$i]);
   fclose($file_error);
  }
  else
  {
   $directory .= substr($no_domain,$last_slash);
   $file_write = fopen($directory, 'w');
   fwrite($file_write, $content);
   fclose($file_write);
  }
 echo 'Upload finished';
} 
?>