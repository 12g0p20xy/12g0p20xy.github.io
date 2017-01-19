/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
/* 
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
// 	$("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});


// Added by monad 2017-1

// 主页面动画

// (function($, window, undefined) {

//     $(function() {
//         var $li = $('.post-preview'),
//             link = $li.children('a').attr('href');
//         $li.on('click', function(e) {
//             e.preventDefault();
//             var copyStyle = {
//                 position: 'absolute',
//                 // visibility: 'visible',
//                 marginTop: '-30px',
//                 width: $(this).width(),
//                 top: $(this).offset().top,
//                 left: $(this).offset().left
//             };

//             // $(this).css('visibility', 'hidden');
//             var $_li = $(this).clone().appendTo('body').css(copyStyle);
//             // 这里需要延时再加上 class，否则不会有动画效果
//             setTimeout(function() {
//                 $_li.addClass('active');
//             }, 25);
//             setTimeout(function() {
//                 window.location.href = link;
//             }, 300);
//         });
//     });

// })(jQuery, window);

(function($, document, undefined) {

    $(function() {

        // 导航菜单
        var $hamburgerBtn = $('#hamburger-btn'),
            $layer = $('.layer'),
            $li = $layer.find('li');
        $hamburgerBtn.on('click', function(event) {
            event.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $layer.removeClass('show');
                // $(document.body).css('overflow-y', 'auto');
                $li.each(function(index, el) {
                    var $el = $(el);
                    $el.css({
                        marginTop: 30,
                        opacity: 0
                    });
                });
            }
            else {
                $(this).addClass('active');
                $layer.addClass('show');
                // $(document.body).css('overflow-y', 'hidden');
                var t = 10;
                $li.each(function(index, el) {
                    var $el = $(el);
                    $el.stop(false, true).delay(t).animate({
                        marginTop: 0,
                        opacity: 1
                    }, 300);
                    t += 10;
                });
            }
        });

        // 搜索框
        var $searchbar = $('.searchbar'),
            $sInput = $searchbar.children('input'),
            $sBtn = $searchbar.children('i');
        $sBtn.on('click', function() {
            $searchbar.addClass('active');
            $sInput.focus();
            $(document).on('click.sClick', function(e) {
                if (!$(event.target).closest($searchbar).length) {
                    $searchbar.removeClass('active');
                    $(document).off('click.sClick');
                }
            });
        });
    });

    // 索引
    var $catagory = $('#catagory').next('ul'),
        $mainTitle = $catagory.children('li'),
        $subTitle = $mainTitle.find('li');
    $catagory.wrap('<div class="catagory"></div>');
    // 给标题前加上 + 号
    $mainTitle.each(function(index, el) {
        var $el = $(el);
        if ($el.find('li').length) {
            $el.prepend("<i> + </i>")
                .find('i').css('cursor', 'pointer');
        }
    });
    var $cBtn = $mainTitle.find('i');
    $cBtn.on('click', function(e) {
        var $_li = $(this).parent();
        if ($_li.hasClass('draw')) {
            $_li.removeClass('draw');
            $(this).html(' + ');
        }
        else{
            $_li.addClass('draw');
            $(this).html(' - ');
        }
    });

    // 页面右下角控制按钮
    var $openBtn = $('<div id="open-btn">yoo</div>');
    $(document.body).append($openBtn);

    $openBtn.on('click', function() {
        $(document.body).addClass('open')
            .on('click.open', function(e) {
            if (!$(e.target).closest('.catagory').length && !$(e.target).closest($openBtn).length) {
                $(this).removeClass('open')
                    .off('click.open');
            }
        });
    });


})(jQuery, document);