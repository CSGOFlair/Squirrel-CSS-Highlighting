var text = $(".code").text();
text  = text.replace('function','<span style="color:red;">function</span>');
text = text.replace('local','<span style="color:red;">local</span>');
$(".code").html(text);
