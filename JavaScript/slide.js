
var imglist=[];
var titlelist=[];
var textlist=[];
var hreflist=[];
initLists();

var curimg=0;
function changePicture(direction)
{
	var bground=document.getElementById('background');
	var foreground=document.getElementById('imag');
	var picMinibar=document.getElementById('pic_minibar')
	var intro_text=document.getElementById('intro_text');
	var maintext=document.getElementById('maintext');
    var imgs = foreground.getElementsByTagName('img');
    imgs[curimg].style.display="none";
	
    curimg+=direction;
	if(curimg>imglist.length-1) curimg=0;
	if(curimg<0) curimg=imglist.length-1;

	bground.style.backgroundImage='url(images/'+imglist[curimg]+')';
	// foreground.src='images/'+imglist[curimg];
    imgs[curimg].style.display="block";
    foreground.href=hreflist[curimg];

	picMinibar.innerHTML=titlelist[curimg];
    picMinibar.href=hreflist[curimg];
	var hreftext='<a class="readmore" href="'+hreflist[curimg]+'">[Read More]</a>';
	intro_text.innerHTML=textlist[curimg] + hreftext;
    // maintext.innerHTML=fulltextlist[curimg];
}

function initLists()
{	
	imglist=['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
	titlelist=['CARS OR COAL?','40 FACTS ABOUT SMOG','BEST SOLUTIONS','SPREAD OUR SPIRITS WITH STYLES'];
	hreflist=['1.html','2.html','3.html','4.html'];
	var text1="The Chinese capital has for many years suffered from serious air pollution. Primary sources of pollutants include exhaust emission from Beijing's more than five million motor vehicles, coal burning in neighbouring regions, dust storms from the north and local construction dust... &nbsp;&nbsp;";
	var text2="	Everyone on earth knows that air pollution is hazardous to health. The effects of air pollution can have devastating effects on your health and 		the environment... ";
	var text3="We make choices everyday that can help reduce air pollution. Below are a few ideas that you can take to help clean our air... &nbsp;&nbsp;";
	var text4="The Chinese capital has for many years suffered from serious air pollution. Primary sources of pollutants include exhaust emission from Beijing's more than five million motor vehicles, coal burning in neighbouring regions, dust storms from the north and local construction dust... &nbsp;&nbsp;";
	
	textlist.push(text1);
	textlist.push(text2);
	textlist.push(text3);
	textlist.push(text4);
}
function prepareImages()
{
	var foreground=document.getElementById('imag');
    var cnt=imglist.length;
    for(var item=0;item<cnt;item++)
    {            
        var newimg = document.createElement("img");
        newimg.src='images/'+imglist[item];
        if(item!=0) newimg.style.display="none";
        else newimg.style.display="block";
        foreground.appendChild(newimg);        
    }    
}
function initLinks()
{    
	var foreground=document.getElementById('imag');
	var picMinibar=document.getElementById('pic_minibar');
	var intro_text=document.getElementById('intro_text');
    foreground.href=hreflist[curimg];    
    picMinibar.href=hreflist[curimg];    
	var hreftext='<a class="readmore" href="'+hreflist[curimg]+'">[Read More]</a>';
	intro_text.innerHTML=textlist[curimg] + hreftext;     
}