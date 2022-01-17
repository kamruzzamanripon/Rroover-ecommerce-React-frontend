/**
 * This is main script file that contains JS code.
 */

/*============================================================================*/
/* Place any jQuery/helper plugins in here.
/*============================================================================*/
/**
 * The below expression is a jQuery function call:
 * $(...);
 * Which is the "jQuery function". $ is a function, and $(...) is you calling
 * that function. The first parameter we've supplied is the following
 * `function() {}`. The parameter is a function that you specific, and the '$'
 * function will call the supplied method when the DOM finishing loading.
 * $(function() { ... }) is also jQuery short-hand for
 * $(document).ready(function() { ... });
 */
$(function () {

    // Initialize NProgress
    NProgress.configure({ showSpinner: false });
    // Bind Scroll Up plugin to all pages
    $.scrollUp({
        scrollName: 'topScroll',
        scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
        zIndex: 100,
    });

   

    // Bind resize select on mid header
    $('#select-category', document).ResizeSelect();
    $('.select-hide').removeClass('select-hide');

    // Bind mega menu plugin
    $('.v-menu', document).MegaMenuDropDowns();

    // Bind Countdown Timer to all sections
    $('.section-timing-wrapper.dynamic', document).CountDown();
});
/*============================================================================*/
/* Global JavaScript functions
/*============================================================================*/
(function ($, window, document) {
    'use strict';
    // ------------- Variables for Reusability and Performance ---------------
    // Performance of jQuery selectors vs local variables
    // https://jsperf.com/caching-jquery-selectors
    let $vMenu = $('.v-menu');
    let mode = '';
    let bigScreenFlag = Number.MAX_VALUE;
    let smallScreenFlag = 1;
    // ------------------------Back Drop Arena ---------------------------
    let listItembackDropFlag = false;
    let $backDrop;
    let $searchFormWrapper;
    let $searchFormElement;
    let $allListItemsForHover = $('.js-backdrop');
    // ------------------------Back Drop Arena End ---------------------------
    // Object Settings
    let settings = {
        bodyBackDropOnScenes: true,
        zIndexNumber: 999998
    };

    /**
     * return the window's width
     * @return {Number|number}
     */
    const windowWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    /**
     * @param {jquery} element  - display back drop
     */
    const showBackDrop = function (element) {
        element.css('display', 'block').on('click', function () {
            $(this).css('display', '');
        });
    };

    /**
     * @param {jquery} element  - remove back drop
     */
    const removeBackDrop = function (element) {
        element.css('display', '');
    };

    

    /**
     * Attach Click Event on VMenu
     */
    const attachClickOnVMenu = function () {
        $('.v-title').on('click', function () {
            $vMenu.toggleClass('v-close');
        });
    };

    /**
     * Its a function that is bind to Mega Menu List items with event mouseenter
     */
    const MouseEnterFunctionForMegaMenu = function () {
        // I also Hope elements are appropriate assign
        $vMenu.css({'z-index': settings.zIndexNumber});
        // Show Back Drop
        showBackDrop($backDrop);
    };
    /**
     * Its a function that is bind to Mega Menu List items with event mouseleave
     */
    const MouseLeaveFunctionForMegaMenu = function () {
        // I also Hope elements are appropriate assign
        $vMenu.css({'z-index': ''});
        // Remove Back Drop
        removeBackDrop($backDrop);
    };

    /**
     * Hover on list items that have class `js-backdrop`
     */
    const hoverOnListItems = function () {
        $allListItemsForHover.on('mouseenter', MouseEnterFunctionForMegaMenu);
        $allListItemsForHover.on('mouseleave', MouseLeaveFunctionForMegaMenu);
    };
    /**
     * Hoveroff on list items that have class `js-backdrop`
     */
    const hoverOffListItems = function () {
        $allListItemsForHover.off('mouseenter');
        $allListItemsForHover.off('mouseleave');
    };

    
    /**
     * Manually Restart Pace-js when we change any tab.
     */
    const manuallyRestartProgress = function () {
        // Specificity = 2
        $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
            // Shows the progress bar
            NProgress.start();
            // Completes the progress
            NProgress.done();
        });
    };
    /**
     * Attach Click Event on Quantity buttons
     */
    const attachClickQuantityButton = function () {
        let $currentTextField,currentVal;
        $('.plus-a').each(function () {
            $(this).on('click', function () {
                let $currentTextField = $(this).prev();
                let currentVal = parseInt($currentTextField.val());
                /*
                 * Format values
                 * In JS if variable is not converted to number then by default variable is NaN.
                 * We known JS has Truthy & Falsey values.
                 * By default NaN (e.g. the result of 1/0) is false so its convert to true and expression
                 * becomes true.
                 */
                if (!currentVal || currentVal === '' || currentVal === 'NaN' || currentVal === 0) {
                    // if value is NaN
                    $currentTextField.val(1);
                }
                // Compare and add 1 if the condition is satisfy
                else if (currentVal < $(this).data('max')) {
                    $currentTextField.val(currentVal + 1);
                }
            });
        });
        $('.minus-a').each(function () {
            $(this).on('click', function () {
                $currentTextField = $(this).closest('div').find('input');
                currentVal = parseInt($currentTextField.val());
                /*
                 * Format values
                 * In JS if variable is not convert to number then by default variable is NaN.
                 * We known JS has Truthy & Falsey values.
                 * By default NaN (e.g. the result of 1/0) is false so its convert to true and expression
                 * becomes true.
                 */
                if (!currentVal || currentVal === '' || currentVal === 'NaN' || currentVal === 0) {
                    // if value is NaN
                    $currentTextField.val(1);
                }
                // Compare and minus 1 if the condition is satisfy
                else if (currentVal > $(this).data('min')) {
                    $currentTextField.val(currentVal - 1);
                }
            });
        });
    };

    /**
     * Window Resize Breakpoint Function
     */
    const windowResizeBreakpoint = function () {
        if (windowWidth() <= 991 && bigScreenFlag > 991) {
            // Assign on which mode we are
            mode = 'portrait';
            // Backdrop Manipulator on PORTRAIT
            mainBackDropManipulator();
        }

        if (windowWidth() > 991 && smallScreenFlag <= 991) {
            // Assign on which mode we are
            mode = 'landscape';
            // Backdrop Manipulator on LANDSCAPE
            mainBackDropManipulator();
        }
        bigScreenFlag = windowWidth();
        smallScreenFlag = windowWidth();
    };

    /**
     * Resize event
     */
    $(window).resize(function () {
        // Window Resize Breakpoint Function
        windowResizeBreakpoint();
    });


    /**
     * Only One Time Execution Ready event Check DOM elements if all loaded
     */
    $(function () {
        //  Attach Click Event on Search Button
        //attachClickOnResponsiveSearchForm();
        //  Attach Click Event on Mini Cart Anchor
        //attachClickOnMiniCart();
        // Attach Click Event on VMenu
        attachClickOnVMenu();
       // Manually Restart Pace-js when we change any tab
        manuallyRestartProgress();
        // Attach Click Event on Quantity buttons
        attachClickQuantityButton();
        // Window Resize Breakpoint Function
        windowResizeBreakpoint();
    });
})(jQuery, window, document);

/*============================================================================*/
/* Homepage JavaScript functions
/*============================================================================*/
(function ($, window, document) {
    'use strict';
   



    $(function () {
        onTabChangeRefreshPositionOfCarousel();
    });

   

})(jQuery, window, document);

/*============================================================================*/
/* Contact-page JavaScript functions
/*============================================================================*/
(function ($, window, document) {
    'use strict';
    /**
     * GoogleMap Init
     */
    const googleinitMap = function () {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        let mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(37.393322, -122.023780),
        };
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        let mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        let map = new google.maps.Map(mapElement, mapOptions);
        // Let's also add a marker while we're at it
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(37.393322, -122.023780),
            map: map,
        });
    };


    $(function () {
        // GoogleMap Init
        if ($('#map').length !== 0 ) {
            try {
                google.maps.event.addDomListener(window, 'load', googleinitMap);
            } catch (e) {
                console.log('"Google Maps" refused to connect!');
            }
        }
    });

})(jQuery, window, document);




/*============================================================================*/
/* Shop-page JavaScript functions
/*============================================================================*/
(function ($, window, document, undefined) {
    'use strict';
    //  Variables
    let $shopProductContainer = $('.product-container');
    let $searchFetchAllbtn = $('.fetch-categories ul > li > button');


    /**
     * Price Range Slider
     */
    const priceRangeSlider = function () {
        $('.price-slider-range').each(function () {
            // Get original minimum data value
            let queryMin = parseFloat($(this).data('min'));
            // Get original maximum data value
            let queryMax = parseFloat($(this).data('max'));
            // Get currency unit
            let currecyUnit = $(this).data('currency');
            // Get default minimum data value
            let defaultLow = parseFloat($(this).data('default-low'));
            // Get default maximum data value
            let defaultHigh = parseFloat($(this).data('default-high'));
            // Taking this
            let $instance = $(this);
            // Plugin invocation
            $('.price-filter').slider({
                range: true,
                min: queryMin,
                max: queryMax,
                values: [ defaultLow, defaultHigh ],
                slide: function (event, ui) {
                    let result = '<div class="price-from">'+ currecyUnit + ui.values[ 0 ] + '</div>\n<div class="price-to">' + currecyUnit + ui.values[ 1 ] + '</div>\n';
                    $instance.parent().find('.amount-result').html(result);
                }
            });


        });
    };
    /**
     * Attach Click event to Grid & List
     */
    const attachClickGridAndList = function () {
        $('#list-anchor').on('click',function () {
            $(this).addClass('active');
            $(this).next().removeClass('active');
            $shopProductContainer.removeClass('grid-style');
            $shopProductContainer.addClass('list-style');
        });
        $('#grid-anchor').on('click',function () {
            $(this).addClass('active');
            $(this).prev().removeClass('active');
            $shopProductContainer.removeClass('list-style');
            $shopProductContainer.addClass('grid-style');
        });
    };
    /**
     * All Categories Functionality
     */
    const searchFetchAllCategoriesFunctionality = function () {
        $searchFetchAllbtn.on('click',function () {
            $(this).toggleClass('js-open');
             $(this).next('ul').stop(true,true).slideToggle();
        });
    };
    /**
     * Bind Slim Scroll Plugin to Associates Filters
     */
    const bindScrollWithAssociateFilters = function () {
        $('.associate-wrapper').each(function () {
            $(this).slimScroll({
                height: 'auto',
                railClass : 'grooverScrollRail',// default CSS class of the slimscroll rail
                barClass : 'grooverScrollBar',// default CSS class of the slimscroll bar
                wrapperClass : 'grooverScrollDiv',// default CSS class of the slimscroll wrapper
            });
        });
    };

    $(function () {
        // Price Range Slider
        priceRangeSlider();
        // Attach Click event to Grid & List
        attachClickGridAndList();
        // Bind Slim Scroll Plugin to Associates Filters
        bindScrollWithAssociateFilters();
        // All Categories Functionality
        searchFetchAllCategoriesFunctionality();
    });

})(jQuery, window, document);
