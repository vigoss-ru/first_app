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

function openFilterCategory() {
	$('.wrapFacetNav').css('left','0');
	$('.facetButton').css('left','88%').css('top','50px');
}

function showBtnUpdate() {
	$('.btn_cart_update').css('display','block');
}

function showHideFacetContent(obj_id) {
	var obj = $('#'+obj_id+' .facet_content');
	if ( obj.css('display') == 'none') {
		obj.css({"opacity":"0","display":"block",}).show().animate({opacity:1}, 500);
		$('#'+obj_id+' .icon-angle-down').css('display', 'inline-block');
		$('#'+obj_id+' .icon-angle-up').css('display', 'none');
	} else {
		obj.hide('fadein');
		$('#'+obj_id+' .icon-angle-down').css('display', 'none');
		$('#'+obj_id+' .icon-angle-up').css('display', 'inline-block');
	}
}

function showMoreCriteriaFilters(obj1, obj2) {
	var newWidth = $('#'+obj2).width()+'px';
	$('#'+obj1).animate({
		width: newWidth
	}, 500);
	$('#'+obj1).addClass('facet-box-expandable').css('display','block');
	$('#'+obj1).html($('#'+obj2).html());
}

function hideCriteriaFilters(obj1, obj2) {
	var newWidth = $('#facet-box-0').width()+'px';
	$('#'+obj1).animate({
		width: newWidth
	}, 300);
	$('#'+obj1).removeClass('facet-box-expandable');
	$('#'+obj1).html($('#'+obj2).html());
}