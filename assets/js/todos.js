// UNCHECK A TODO
$("ul").on("click","li",function(){
	$(this).toggleClass('done');
});

// DELETE TODO
$("ul").on("click","span",function(event){
	$(this).parent().hide(600, function(){
		$(this).remove();
	});
		event.stopPropagation();
});

// HANDLE ENTERING A NEW TODO
$("input").keypress(function(event){
		if( event.which === 13){
			//grabbing the text
			var todoText= $(this).val();
			//if input is not empty
				if(todoText !== ""){
					//adding the text
					$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
					//to return to default settings
						deflt();
				//if input is empty
				}else{
					$("h1").show();
					$(".fa-exclamation-circle").show();
					$(".fa-plus-circle").hide();
				}
		}else{
			//show only inout when typing
			onlyinput();
		}
});

//HIDE/SHOW TEXT INPUT
$(".fa-plus-circle").click(function(){
	$("input").fadeToggle();
});

// HIDE EVERYTHING ELSE
$("input").on("click", function(){
	onlyinput();
});

// go back to default list
$(".fa-undo").on("click",function(){
	deflt();
})


function deflt(){
		$("ul").show();
		$("h1").show();
		$(".fa-plus-circle").show();
		$(".fa-exclamation-circle").hide();
		$("body").css("backgroundImage","url(assets/css/back.png)") ;
		$("input").removeClass("inputbig");
		$("div").attr("id", "container");
		$(".fa-undo").hide();
		$("input").val("");
}

function onlyinput(){
	$("ul").hide();
	$("h1").hide();
	$("input").addClass("inputbig");
	$("div").attr("id", "containersmall");
	$(".fa-undo").show()
	$("body").css("backgroundImage","linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(assets/css/back.png)")
}