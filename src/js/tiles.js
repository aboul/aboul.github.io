(function($){
  var tileFlipped = []; 
  
  function tileFlip(e){
    var $self = $(this),
    selfID = $self.data('gallery');
    $('.nav-item').removeClass('active');
    $self.addClass('active');

    $('.tile').each(function() {
      if(selfID == 'flower') {
        $(this).removeClass('flipped');
      }
      else {
        $(this).addClass('flipped');
      }
    });
  }

  $(document).on('click', '.nav-item', tileFlip);
  
})(jQuery);