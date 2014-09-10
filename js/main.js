function sizer(s) {
    $('.xgroup').each( function() {
        boxes = []
        len = 0
        total = $(this).children().length - 1;
        $(this).children().each( function(index) {
            $(this).css({'height':'auto'});
            $(this).css({'width':'98%'});
            if ($(this).attr(s)) {
                boxes.push($(this))
                w = ((($(this).attr(s) / 12) * 100) - 2);
                $(this).css({'width':w+'%'});
                len = len + parseInt($(this).attr(s));
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
        sizer('xcoll');
    }
    if ($(window).width() < 800) {
        sizer('xcolm');
    }
    if ($(window).width() < 500) {
        $('.xpost').each( function() {
            $(this).css({'width':'98%'});
            $(this).css({'height':'auto'});
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
        $('.xover').fadeOut('fast')
        $('.xover .xdata').html('');
        return false;
    });
    
    if ($('#xmenu').length == 0) {
        $('.xheader').css({'width':'98%'});
    }
    
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