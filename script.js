let leonardoPic = 'https://media3.giphy.com/media/KyGxsHByUpUHRqxCJ0/giphy.gif';
let mikePic = 'https://media0.giphy.com/media/1HA0yEeo5vHuU/giphy.gif?cid=ecf05e47uwlo6p1ycvx4xr5hox8j7bgs81uf5o31ux90gtv5&rid=giphy.gif';
let raphPic = 'https://media4.giphy.com/media/Z2K4NjxA6PNlu/giphy.gif?cid=ecf05e47sjv680ib1zc1xplghg7x110455e2fxjyyudggjsc&rid=giphy.gif';
let donPic = 'https://media1.giphy.com/media/cFdHXXm5GhJsc/giphy.gif?cid=ecf05e476zif05a7bogzwtn97ys5zvwgwz5ghlxa1c4h422v&rid=giphy.gif';
let splinterPic = 'https://media2.giphy.com/media/qvVJ36yWjbq24/giphy.gif?cid=ecf05e47lf48fscmqyawcu39pj5xw7qltvspjdb4wssbms1m&rid=giphy.gif';

$('button').click(function(){
	let color = $('.color').val();
    let leader = $('.leader').val();
    let pizza = $('.pizza').val();
    
    if (color === "" || leader === "" || pizza === ""){
    	$('.response').append('<p class="error">'+ 'You did not complete the input!' + '</p>');
    }
    
    if (pizza === "no") {
    	$('.response').append('<p class="error">'+ 'uhhh you must like pizza to continue obviously' + '</p>');
    }
        
    if (pizza === "yes" && leader === "yes" && color === "blue"){
    	$('.response').append('<img src='+ '"' + leonardoPic + '">');
    } else if (pizza === "yes" && leader === "no" && color === "orange") {
       	$('.response').append('<img src='+ '"' + mikePic + '">');
   	} else if (pizza === "yes" && leader === "yes" && color === "purple"){
    	$('.response').append('<img src='+ '"' + donPic + '">');
    } else if (pizza === "yes" && leader === "no" && color === "red") {
    	$('.response').append('<img src='+ '"' + raphPic + '">');
    } else if (pizza === "yes" && leader === "yes" && color === "none"){
    	$('.response').append('<img src='+ '"' + splinterPic + '">');
    } 
});