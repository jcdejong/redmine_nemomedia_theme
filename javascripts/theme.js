// add notification when user tries to mark whole topic as private
$(document).ready(function() {
    $('#issue_is_private').click(function(){
        if (!confirm("LET OP!\nHiermee markeer je het gehele ticket als 'private', NIET alleen je opmerking!\nWeet je dit zeker?\n\nHet vinkje voor alleen je bericht, bevindt zich onder het bericht veld.")) {
            $('#issue_is_private').attr('checked', false);
            $('html, body').animate({scrollTop:$('#issue_private_notes').position().top}, 'slow');
        }
    });
});
