/*var rangeSliderPrice = document.getElementById('rangeSliderPrice');
noUiSlider.create(rangeSliderPrice, {
	start: [ 0, 100 ],
	margin: 30,
	range: {
		'min': 0,
		'max': 100
	}
});

var marginMin = document.getElementById('textboxPriceMin'),
	marginMax = document.getElementById('textboxPriceMax');

rangeSliderPrice.noUiSlider.on('update', function ( values, handle ) {
	if ( handle ) {
		marginMax.value = values[handle];
	} else {
		marginMin.value = values[handle];
	}
});

var rangeSliderWidth = document.getElementById('rangeSliderWidth');
noUiSlider.create(rangeSliderWidth, {
	start: [ 0, 600 ],	
	range: {
		'min': 0,
		'max': 600
	}
});

var marginWidthMin = document.getElementById('textboxWidthMin'),
	marginWidthMax = document.getElementById('textboxWidthMax');

rangeSliderWidth.noUiSlider.on('update', function ( values, handle ) {
	if ( handle ) {
		marginWidthMax.value = values[handle];
	} else {
		marginWidthMin.value = values[handle];
	}
});*/

function facettenFilter(filterName, filterValue) {
	var htmlStr = '<div class="filterElement">'+filterName+': ';	
	htmlStr += '<div class="filterValue">'+filterValue;
	htmlStr += '<div class="filterDeleteIcon"></div>';
	htmlStr += '</div>';
	$('#article_list_filter').append(htmlStr);
	$('#articlelisting-loading').css('display', 'block');
	$("html, body").animate({ scrollTop: "300px" });
	setTimeout(function(){
		$('#articlelisting-loading').css('display', 'none');
	}, 3000);
}

function viewListArticle() {	
	$('#articlelisting-grid-loading').css('display', 'block');
	setTimeout(function(){
		$('#articleGridView').css('display','none');	
		$('#articleList').css('display','block');
		$('#articlelisting-grid-loading').css('display', 'none');		
	}, 3000);
}

function viewGridArticle() {
	$('#articlelisting-loading').css('display', 'block');
	setTimeout(function(){
		$('#articleList').css('display','none');
		$('#articleGridView').css('display','block');
		$('#articlelisting-loading').css('display', 'none');
	}, 3000);
}