$(document).ready(function() {	
	
	/** start floating pagination **/
	$(window).unbind('scroll');
	$(window).on('scroll',function(){
		if($('#sh-pagination').inView()) {
			// do cool stuff		
			$('#sh-floating-pagination').css('display','none');
		} else {
			$('#sh-floating-pagination').css('display','block');
		}
	});
		
	$.fn.inView = function(){
		var rect = this[0].getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};
	/** end floating pagination **/	
	
	/** start range slider **/
	var rangeSliderProductLength = document.getElementById('range-slider-product-length');
	if(rangeSliderProductLength != null) {
		noUiSlider.create(rangeSliderProductLength, {
			start: [ 0, 1000 ],
			margin: 100,
			range: {
				'min': 0,
				'max': 1000
			}
		});
		var minObj = $('#sh-range-slider-value label:nth-of-type(1)');
		var maxObj = $('#sh-range-slider-value label:nth-of-type(2)');
		rangeSliderProductLength.noUiSlider.on('update', function ( values, handle ) {
			if ( handle ) {
				maxObj.html(Math.round(values[handle]) + ' mm');
			} else {
				minObj.html(Math.round(values[handle]) + ' mm');
			}
		});
	}
	/** end range slider **/
});

/** start facet filter **/
function openFilterCategory() {
	$('.wrapFacetNav').css('left','0');
	$('.facetButton').css('left','88%').css('top','50px');
}

function showBtnUpdate() {
	$('.btn_cart_update').css('display','block');
}

function showHideFacetContent(obj_id) {
	var obj = $('#'+obj_id+' .sh-facet-content');
	if ( obj.css('display') == 'none') {
		obj.css({"opacity":"0","display":"block",}).show().animate({opacity:1}, 500);
		$('#'+obj_id+' .sh-icon-angle-down').css('display', 'inline-block');
		$('#'+obj_id+' .sh-icon-angle-up').css('display', 'none');
	} else {
		obj.hide('fadein');
		$('#'+obj_id+' .sh-icon-angle-down').css('display', 'none');
		$('#'+obj_id+' .sh-icon-angle-up').css('display', 'inline-block');
	}
}

function showMoreCriteriaFilters(obj1, obj2) {
	var newWidth = $('#'+obj2).width()+'px';
	$('#'+obj1).animate({
		width: newWidth
	}, 500);
	$('#'+obj1).addClass('sh-facet-box-expandable').css('display','block');
	$('#'+obj1).html($('#'+obj2).html());
}

function hideCriteriaFilters(obj1, obj2) {
	var newWidth = $('#sh-facet-box-0').width()+'px';
	$('#'+obj1).animate({
		width: newWidth
	}, 300);
	$('#'+obj1).removeClass('sh-facet-box-expandable');
	$('#'+obj1).html($('#'+obj2).html());
}
/** end facet filter **/
