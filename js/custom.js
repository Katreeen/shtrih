$(document).ready(function () {
  $('.inews-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $(".js-team-slider").owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    responsive: {
      0: { items: 1 },
      450: { items: 2 },
      645: { items: 3 },
      768: { items: 1 },
      992: { items: 2 },
      1023: { items: 2, margin: 15 },
      1399: { items: 3, margin: 20 },
      1920: { items: 3, margin: 20 }
    }
  });
  $(".js-achieve-slider").owlCarousel({
    items: 3,
    loop: false,
    dots: false,
    nav: true,
    responsive: {
      0: { items: 1 },
      767: { items: 2 },
      1440: { items: 3, margin: 10 },
      1920: { margin: 30, items: 3}
    }
  });
  $('.iclients-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 2,
        margin: 15,
      },
      450: {
        items: 3,
        margin: 20,
      },
      
      576: {
        items: 4
      },
 
      992: {
        items: 5
      },
      1920: {
        items: 8
      }
    }
  });

  $('.tab-list a').click(function () {
    $('.tab-content-item').removeClass('active');
    $('.tab-list-item').removeClass('active');
    
    $(this).parent().addClass("active");
    var id = $(this).attr('href');
    console.log(id);
    $(id).addClass("active");
    return false;
  });

  $('#falseinput').click(function(){
    $("#fileinput").click();
  });

  $('#fileinput').change(function () {
    var files = $('#fileinput')[0].files;
    var filesName = $('#selected_filename');
    filesName.text('');
    console.log($('#fileinput'));
    for (var i = 0; i < files.length; i++)
    {
 
      filesName.append('<span class="file">'+files[i].name+'<span class="del"></span></span>');
    }
});


});