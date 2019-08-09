//skill-bar jQuery

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({width:jQuery(this).attr('data-percent')},4000);
	});
});



//download-file

var text = 'Some data I want to export';
var data = new Blob([text], {type: 'text/plain'});

var url = window.URL.createObjectURL(data);

document.getElementById('download_link').href = url;
