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

$(document).ready(function() {
	
});


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

function showMenuAccount() {
	var obj = $('.device_info_slider');
	if(obj.css('visibility') == 'hidden') {
		obj.css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},500);
	} else {
		obj.animate({opacity: 0.0}, 500, function(){
			obj.css("visibility","hidden");
		});
	}
}

function documentAccordion() {
	var accordion = UIkit.accordion(UIkit.$('#accordion-document-product-range'), {collapse:false, showfirst: false});
	accordion.find('[data-wrapper]').each(function () {
      accordion.toggleItem(UIkit.$(this), true, true); // animated true and collapse false
    });
	var accordion2 = UIkit.accordion(UIkit.$('#document-accordion-article-family'));
    accordion2.find('[data-wrapper]').each(function () {
      accordion2.toggleItem(UIkit.$(this), true, false); // animated true and collapse false
    });	
}

function showUpdateBasket(systemId, txtObj) {
	var obj = $('#sh-update-basket-'+systemId);
	if($(txtObj).val() == '' || $(txtObj).val() == null){
		obj.css('display', 'none');
		return;
	}
	if(obj.css('display') == 'none')
		obj.css('display', 'block');
}
