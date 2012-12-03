/**
 * Created with JetBrains WebStorm.
 * User: 郑谨
 * Date: 12-11-28
 * Time: 下午4:15
 * To change this template use File | Settings | File Templates.
 */

function tijiao()
{
    var  xmlHttp = new XMLHttpRequest();//创建ie支持的xmlHttp对象
    xmlHttp.open("GET","offset.xml",true);//打开本地的一个歌词文件
    xmlHttp.onreadystatechange=function()
    {
        if (xmlHttp.readyState==4)
        {
            document.getElementById("content").innerHTML=xmlHttp.responseText;
        }
    }
    xmlHttp.send();
}


