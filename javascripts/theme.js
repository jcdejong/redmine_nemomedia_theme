// add notification when user tries to mark whole topic as private
$(document).ready(function() {
    $('#issue_is_private').click(function(){
        if (!confirm("LET OP!\nHiermee markeer je het gehele ticket als 'private', NIET alleen je opmerking!\nWeet je dit zeker?\n\nHet vinkje voor alleen je bericht, bevindt zich onder het bericht veld.")) {
            $('#issue_is_private').attr('checked', false);
            $('html, body').animate({scrollTop:$('#issue_private_notes').position().top}, 'slow');
        }
    });

    // add lightbox behaviour to comments
    $('.lightbox').each(function( index ){
        var found = $(this).attr('title');
        $('a:contains(' + found + ')').click(function(){
            $("a[title='" + found + "']").trigger('click');
            return false;
        });
    });
});
