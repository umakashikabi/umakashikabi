'use strist'
{
   // .s_01 .accordion_one
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_01 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_01 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
    $('.s_01 .accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.s_01 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});
  
// .s_02 .accordion_one
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_02 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
    $(this).next().animate({width:'toggle'});
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_02 .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
    $('.s_02 .accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.s_02 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});
}
     