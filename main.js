var mouse_event="empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="orange";
width1=3;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    mouse_event="mousemove";
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if (mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.stroke.Style=color;
        ctx.lineWidth=width1;
        console.log("last position of x and y = ;")
        console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y = ;")
        console.log("x="+ current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        
        last_position_of_x=current_position_of_mouse_x;
        last_position_of_y=current_position_of_mouse_y;
    }
}