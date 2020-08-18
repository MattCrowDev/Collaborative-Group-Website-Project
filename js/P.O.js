function shrink(){
    document.getElementById("head").style.height="2em";
    document.getElementById("head").style.transition="0.5s";
    //
    var imgg = document.getElementById("imgg");
    imgg.style.height="8em";
    imgg.style.width="15em";
    imgg.style.top="-4em";
    imgg.style.transition="0.5s";

    var navv = document.getElementById("navv");
    navv.style.fontSize="120%";
    navv.style.left="-19em";
    navv.style.top="0.5em";
    navv.style.transition="0.5s";
}
function D1(){
    var div = document.createElement('div');
    div.style.backgroundColor="white";
    div.style.height="14.7em";
    div.style.width="48em";
    div.style.position="absolute";
    div.style.top="23.2em";
    div.style.left="34.7em";
    div.style.opacity="0.8";
    document.body.appendChild(div);
    //Obj1 title
    var span1 = document.createElement('span');
    span1.style.color="black";
    span1.style.position="absolute";
    span1.style.top="10em";
    span1.style.left="20.5em";
    span1.style.zIndex="3";
    span1.style.fontSize="250%";
    span1.style.borderBottom="black solid 2px";
    span1.appendChild(document.createTextNode("VR Pansonsite"));
    document.body.appendChild(span1);
    //Obj1 details
    var x1 = document.createElement('ul');
    x1.setAttribute("id", "ul1");
    document.body.appendChild(x1);
    var y1 = document.createElement("li");
    var t1 = document.createTextNode("More Comfortable Wearing-The small volume and lightweight gives you lots of comfort while using or carring.It has soft and breathable leather padding keeps you feeling good even after hours watching.2019 Latest Version of VR --Pansonite 3D VR is the highest quality for this price in the market. Its new constructure will show the immersive 3D virtual reality vision.");
    y1.appendChild(t1);
    document.getElementById("ul1").appendChild(y1);
    x1.style.zIndex="3";
    x1.style.position="absolute";
    x1.style.top="28em";
    x1.style.left="35em";
    x1.style.width="45em";
}

function D2(){
    var div2 = document.createElement('div');
    div2.style.backgroundColor="white";
    div2.style.height="14.5em";
    div2.style.width="48em";
    div2.style.position="absolute";
    div2.style.top="37.8em";
    div2.style.left="34.7em";
    div2.style.opacity="0.8";
    document.body.appendChild(div2);
    //Obj2 title
    var span2 = document.createElement('span');
    span2.style.color="black";
    span2.style.position="absolute";
    span2.style.top="16em";
    span2.style.left="21.5em";
    span2.style.zIndex="3";
    span2.style.fontSize="250%";
    span2.style.borderBottom="black solid 2px";
    span2.appendChild(document.createTextNode("VR Pimax"));
    document.body.appendChild(span2);
    //Obj2 details
    var x2 = document.createElement('ul');
    x2.setAttribute("id", "ul2");
    document.body.appendChild(x2);
    var y2 = document.createElement("li");
    var t2 = document.createTextNode("The Pimax 8K features dual 4K displays — each with a resolution of 3840 x 2160 — and upscales its content from 2560 x 1440,Its refresh rate tops out at 80Hz; the 5K+ does a little better at 90Hz. The 5K has two 2560 x 1440 screens that display content at a native resolution.But Pimax has managed to stir a lot of excitement with the expanded 200-degree field of view and reduced screen door effect that its headsets offer. Gaining peripheral vision inside virtual reality is extremely cool.");
    y2.appendChild(t2);
    document.getElementById("ul2").appendChild(y2);
    x2.style.zIndex="3";
    x2.style.position="absolute";
    x2.style.top="42.5em";
    x2.style.left="35em";
    x2.style.width="45em";
}

function D3(){
    var div3 = document.createElement('div');
    div3.style.backgroundColor="white";
    div3.style.height="15em";
    div3.style.width="48em";
    div3.style.position="absolute";
    div3.style.top="52.2em";
    div3.style.left="34.7em";
    div3.style.opacity="0.8";
    document.body.appendChild(div3);
    //Obj2 title
    var span3 = document.createElement('span');
    span3.style.color="black";
    span3.style.position="absolute";
    span3.style.top="22em";
    span3.style.left="20.5em";
    span3.style.zIndex="3";
    span3.style.fontSize="250%";
    span3.style.borderBottom="black solid 2px";
    span3.appendChild(document.createTextNode("VR Qualcomm"));
    document.body.appendChild(span3);
    //Obj2 details
    var x3 = document.createElement('ul');
    x3.setAttribute("id", "ul3");
    document.body.appendChild(x3);
    var y3 = document.createElement("li");
    var t3 = document.createTextNode("The headset uses the similarly named mobile Snapdragon 845 system architecture that the company announced last month, which can be used for both VR and AR.The Snapdragon 845 headset is capable of displaying two 1024 x 1152 pixel screens at 120 frames per second. The headset has four cameras, two facing inwards to track eye movements, and two outer facing ones.");
    y3.appendChild(t3);
    document.getElementById("ul3").appendChild(y3);
    x3.style.zIndex="3";
    x3.style.position="absolute";
    x3.style.top="58em";
    x3.style.left="35em";
    x3.style.width="45em";
}