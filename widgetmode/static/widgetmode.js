if (!window.widget_mode) {
    window.widget_mode = true;

    var hide = function () {
        $('#notebook-container').width('100%');
        $('.cell:not(.code_cell)').hide();
        $('.output, .prompt').hide();
	$('.input:not(.widget-numeric-text):not(.widget-text)').hide()
        $('#notebook div.cell.selected').css('border', 'none');
        $('#notebook').css('padding', '0px');

        $('#menubar-container').on('mouseleave', hide_menu );
        $('#menubar-container').on('mouseenter', show_menu );
        hover_div.on('mouseenter', show_menu);
        hide_menu();
        $('#notebook').css('border', 'none');

        $('#notebook_panel').css('-webkit-box-shadow', 'none');
        $('#notebook_panel').css('-moz-box-shadow', 'none');
        $('#notebook_panel').css('box-shadow', 'none');
        
        $('#header')
            .hide( 'blind', {}, 500 );

        hover_div.height(10);
    };

    var show = function() {
        $('#notebook-container').width('');
        $('.cell:not(.code_cell)').show();
        $('.output, .input, .prompt').show();
        $('#notebook div.cell.selected').css('border', '');
        $('#notebook').css('padding', '');

        $('#menubar-container').off('mouseleave', hide_menu );
        $('#menubar-container').off('mouseenter', show_menu );
        hover_div.off('mouseenter', show_menu);
        show_menu();
        $('#notebook').css('border', '');

        $('#notebook_panel').css('-webkit-box-shadow', '');
        $('#notebook_panel').css('-moz-box-shadow', '');
        $('#notebook_panel').css('box-shadow', '');

        $('#header')
            .show( 'blind', {}, 500 );

        hover_div.height(0);
    };

    var show_menu = function () {
        $('#menubar-container')
            .stop()
            .show( 'blind', {}, 500 , function (){IPython.layout_manager.do_resize();$('#pager, #pager_splitter').show();});
    };
    var hide_menu = function() {
        $('#pager, #pager_splitter').hide();
        $('#menubar-container')
            .stop()
            .hide( 'blind', {}, 500 , function (){IPython.layout_manager.do_resize();});
    };

    var hover_div = $('<div />').height(0).width('100%');
    $('body').prepend(hover_div);
                    
    IPython.toolbar.add_buttons_group([
    {
       'label'   : 'Toggle widget mode',
       'icon'    : 'icon-bar-chart', // select your icon from http://fortawesome.github.io/Font-Awesome/icons
       'callback': function () {
            if (this.hidden) {
                show();
                this.hidden = false;
            } else {
                hide();
                this.hidden = true;
            }
        }
    },
    ]);
}

