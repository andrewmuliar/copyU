<?php
$website = 'https://iqoption.com/land/binary-options-demo/en/';
$content = file_get_contents($website);
echo var_export($content,true);
$file_name = 'uploads/php.html';
$file_write = fopen($file_name, 'w');
fwrite($file_write, $content);
$len = strlen($content);
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
//Saving site to files
function saveData(dataFile)
{
 console.log("dataFile = "+dataFile)
 var stringData = JSON.stringify(dataFile)
 $.ajax({
  url: "save.php",
  data: stringData,
  type: 'POST',
  success:function(data) 
  {
   console.log(data)
  } 
 })
}


//Getting img, script sources | link[href]
function getWhatYouNeed(tagName)
{
 var list = []
 var tags = document.getElementsByTagName(tagName)
 for (i = 0; i < tags.length; i++) 
 {
  if(tagName == 'link')
   list.push(tags[i].href)
  else
   list.push(tags[i].src)
 }
 return list
}

//Miracle start here
saveData(getWhatYouNeed('link'))
saveData(getWhatYouNeed('script'))
saveData(getWhatYouNeed('img'))

//Here your site
window.open("http://localhost/php_request/uploads/php.html","_blank")
</script>