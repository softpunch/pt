!function(){window.demoDescription="Draw a series of perpendicular lines along a diagonal path to visualize sine waves.";var e={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},a=new CanvasSpace("demo",e.b2).display(),i=new Form(a.ctx),n=new Line(.3*a.size.x,0).to(.8*a.size.x,a.size.y),o=100,s=Math.min(a.size.x,a.size.y)/4,t=0;a.add({animate:function(a,d,r){for(var f=0;o>f;f++){var c=f/o,p=n.getPerpendicular(c,Math.sin(1.2*c*Const.two_pi+t)*s),l=n.getPerpendicular(c+.5/o,Math.cos(1.2*c*Const.two_pi+t)*s);i.stroke(e.a1).line(p),i.stroke(e.a3).line(l)}},onMouseAction:function(e,i,n,o){"move"==e&&(t=n/a.size.y*2*Const.two_pi)}}),a.bindMouse(),a.play()}();