function sizer(s) {

    $('.xgroup').each( function() {
        boxes = []
        len = 0
        total = $(this).children().length - 1;
        $(this).children().each( function(index) {
            if ($('body.xblocks').length == 1) {
                $(this).css({'height':'auto'});
                $(this).css({'width':'100%'});
            } else {
                $(this).css({'height':'auto'});
                $(this).css({'width':'98%'});
            }
            if (this.className.match(s+"\\d")) {
                cols = this.className.match(s+"\\d")[0].split("-")[1];
                boxes.push($(this))
                if ($('body.xblocks').length == 1) {
                    w = (((cols / 12) * 100));
                } else {
                    w = (((cols / 12) * 100) - 2);
                }
                $(this).css({'width':w+'%'});
                len = len + parseInt(cols);
                if ( (len == 12) || (index == total) ) {
                    heights = []
                    $(boxes).each( function() {
                        heights.push($(this).height())
                    });
                    var largest = Math.max.apply(Math, heights);
                    $(boxes).each( function() {
                        $(this).height(largest);
                    });
                    boxes = [];
                    len = 0;
                }
            }
        });
    });
}

function setsize() {
    if ($(window).width() >= 800) {
        sizer('xlg-');
    }
    if ($(window).width() < 800) {
        sizer('xmed-');
    }
    if ($(window).width() < 500) {
        $('.xpost').each( function() {
            if ($('body.xblocks').length == 1) {
                $(this).css({'width':'100%'});
                $(this).css({'height':'auto'});
            } else {
                $(this).css({'width':'98%'});
                $(this).css({'height':'auto'});
            }
        });
    }
}

function tablelaunch() {
    $('table').each( function() {
        if ($(this).width() > $(this).closest('div').width()) {
            if (!$(this).hasClass('toobig')) {
                $(this).addClass('toobig');
                table = $(this).parent().html();
                $(this).parent().prepend('<div class="viewdata"><p>View Data</p></div>');
                $(this).parent().find('.viewdata').on('click',function() {
                    $('.xover').show('fast');
                    $('.xover .xdata').html(table);
                });
            }
        } else {
            $(this).removeClass('toobig');
            $(this).parent().find('.viewdata').remove();
        }
    });
}

function closeactions() {
    $('.xactions .xdata').fadeOut('fast');
    $('.xactions a.open').show();
    $('.xactions a.close').hide();
}

function closeoverlay() {
    $('.xover').fadeOut('fast')
    $('.xover .xdata').html('');
}

$(window).load( function() {
    setsize();
});

$(document).ready(function() {
    setsize();
    tablelaunch();
    $(window).resize( function() {
        setsize();
        tablelaunch();
    });
    
    $('#xmenu a').on('click', function() {
        $('.xnav').toggle('fast');
        return false;
    });
    
    $('.xnav ul li ul').each( function() {
        $(this).parent('li').first().prepend('<span class="menu">&#9776;</span> ');
    });
    
    $('.menu').on('click', function() {
        $(this).closest('li').find('ul').toggle('fast');
        return false;
    });
    
    $('.xover a.close').on('click', function() {
        closeoverlay();
        return false;
    });
    
    $('.xactions a.close').on('click', function() {
        closeactions();
        return false;
    });
    
    $('.xactions a.open').on('click', function() {
        $('.xactions .title').hide();
        $('.xactions .xdata').fadeIn('fast');
        $('.xactions a.open').hide();
        $('.xactions a.close').show();
        return false;
    });
    
    $('.xactions a.open').on('mouseover', function() {
        $('.xactions .title').show('fast');
        return false;
    });
    
    $('.xactions a.open').on('mouseout', function() {
        $('.xactions .title').hide();
        return false;
    });
    
    $(document).keyup(function(e) {
      if (e.keyCode == 13) { // enter
        //
      }
      if (e.keyCode == 27) { // esc
        closeoverlay();
        closeactions();
        return false;
      }
    });
    
    if ($('#xmenu').length == 0) {
        $('.xheader').css({'width':'98%'});
    }
    
    $('img.xfeature').each( function() {
        if ($(this).attr('data-lg')) {
            $(this).css({'cursor':'pointer'});
        }
    });
    
    $('img.xfeature').on('click', function() {
        if ($(this).attr('data-lg')) {
            $('.xover').fadeIn('fast');
            img = '<img src="'+$(this).attr('data-lg')+'" class="xfeature">';
            $('.xover .xdata').html(img);
        }
    });
    
    if ($('.xdata img.xfeature').height() > $('.xdata').height()) {
        $('.xdata img.xfeature').css({'height':'100px'});
    }
    
});