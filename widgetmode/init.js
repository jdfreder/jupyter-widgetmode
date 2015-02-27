var hover_div = $('<div />')
    .css({ 
        height: 0,
        width: '100%',
        background: 'white'
    }).prependTo($('body'));

window._header_lock = false;
var show_menu = function(uninstall_events) {
    if (!window._header_lock) {
        window._header_lock = true;
        $('#header')
            .slideDown(500, function() { window._header_lock = false; });
        hover_div
            .css({ height: 0 });

        if (uninstall_events===true) {
            $('#header')
                .off('mouseleave', hide_menu);
            hover_div
                .off('mouseenter', show_menu);
        }
    }
};

var hide_menu = function(install_events) {
    if (!window._header_lock) {
        window._header_lock = true;
        $('#header')
            .slideUp(500, function() { window._header_lock = false; });
        hover_div
            .css({ height: 10 });

        if (install_events===true) {
            $('#header')
                .on('mouseleave', hide_menu);
            hover_div
                .on('mouseenter', show_menu);
        }
    }
};

var on = function() {
    hide_menu(true);
    $('#site')
        .css({ overflow: 'visible' });
    $('body')
        .css({ background: 'white' });
    $('#notebook-container')
        .css({
            '-webkit-box-shadow': 'inherit',
            'box-shadow': 'inherit',
        });
    $('.cell')
        .css({ 'border': 'transparent' });
    $('.cell:not(.code_cell)')
        .hide();
    $('.inner_cell')
        .hide();
    $('.output, .prompt')
        .hide();
};

var off = function() {
    show_menu(true);
    $('#site')
        .css({ overflow: '' });
    $('body')
        .css({ background: '' });
    $('#notebook-container')
        .css({
            '-webkit-box-shadow': '',
            'box-shadow': '',
        });
    $('.cell')
        .css({ 'border': '' });
    $('.cell:not(.code_cell)')
        .show();
    $('.inner_cell')
        .show();
    $('.output, .prompt')
        .show();
};

window._widget_mode = false;
var toggle = function() {
    window._widget_mode = !window._widget_mode;
    window._widget_mode ? on() : off();
};

IPython.toolbar.add_buttons_group([
    {
       'label'   : 'Toggle widget mode',
       'icon'    : 'fa-gamepad',
       'callback': toggle
    },
]);
