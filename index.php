<?php
$website = $_GET['link'];
$content = file_get_contents($website);
echo var_export($content,true);
$file_name = 'uploads/index.html';
$file_write = fopen($file_name, 'w');
fwrite($file_write, $content);
$len = strlen($content);
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
//Saving site to files
function saveData(dataFile)
{
 //console.log("dataFile = "+dataFile)
 var url = document.location.href
 var index = url.search("root")
 var root = url.substring(index+5, url.length) //root= 
 var arrayToSend = []
 arrayToSend.push(root)
 arrayToSend.push(dataFile) // New array data with 'root' 
 var stringData = JSON.stringify(arrayToSend) // json
 $.ajax({
  url: "save.php",
  data: stringData, //sending
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
window.open("http://localhost/php_request/uploads/index.html","_blank")
</script>