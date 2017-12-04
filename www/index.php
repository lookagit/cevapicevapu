<?
include_once ("config.php");
include_once ("funkcije.php");
include_once ("upiti_o_stranici.php");

include("ocp/include/utils.php");
require_once("php/utils/request.php");
require_once("ocp/config/db.php");



?>

<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="<?=$keywords?>" />
	<meta name="description" content="<?=$description?>" />

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=7" />
	<meta http-equiv="imagetoolbar" content="no" />
    <? if($ID=="11" || $ID=="7641" || $ID=="7671" || $ID=="7701" || $ID=="11821" || $ID=="13101" || $ID=="13121"){	?>

    <meta http-equiv="refresh" content="180"/>

   <? } ?>

    <title><?=($title2) ? $title2.' :: ' : ''?><?=$title?></title>

	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

	<?=$meta?>

	<link rel="stylesheet" type="text/css" href="<?=url_path?>/css/style.css" media="all">
	<link href="<?=url_path?>/js/fancybox_2/source/jquery.fancybox.css?v=2.1.5" rel="stylesheet" type="text/css" />
    <link href="<?=url_path?>/js/fancybox_2/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" rel="stylesheet" type="text/css" />
    <link href="<?=url_path?>/js/fancybox_2/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" rel="stylesheet" type="text/css" />

    <!--
    * Google Fonts
    //-->

    <!--<link href='http://fonts.googleapis.com/css?family=Istok+Web:400,700,400italic,700italic|Roboto+Condensed:400,300,300italic,400italic,700,700italic&subset=cyrillic-ext,latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

    <link href='http://fonts.googleapis.com/css?family=PT+Sans+Caption&subset=cyrillic-ext,latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>

    <link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700,700italic&subset=latin,cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>-->
    <!-- Bootstrap core CSS -->
    <link href="<?=url_path?>/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!-- Custom CSS -->
    <link href="<?=url_path?>/css/animate.css" rel="stylesheet" type="text/css">
    <link href="<?=url_path?>/css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css">
    <link href="<?=url_path?>/css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="<?=url_path?>/css/colorbox-skins/4/colorbox.css" type="text/css">
        <link href="<?=url_path?>/css/main.css" rel="stylesheet" type="text/css">


    <link href="<?=url_path?>/css/header/h1.css?4" rel="stylesheet" type="text/css">
    <link href="<?=url_path?>/css/responsive.css?5" rel="stylesheet" type="text/css">
    <link href="<?=url_path?>/css/color1.css" rel="stylesheet" type="text/css" id="envor-site-color">
    <link href="<?=url_path?>/css/rivathemes.css" rel="stylesheet" type="text/css">

    <!-- LayerSlider styles -->
    <link rel="stylesheet" href="<?=url_path?>/css/layerslider/css/layerslider.css" type="text/css">
    <link rel="stylesheet" href="<?=url_path?>/css/flipclock.css">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="js/vendor/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--<script type="text/javascript" src="<?=url_path?>/js/jquery-1.5.2.min.js"></script>-->
    <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->
    <script src="<?=url_path?>/js/vendor/jquery-1.11.0.min.js" type="text/javascript"></script>
    <script src="<?=url_path?>/js/flipclock.js" type="text/javascript"></script>

    <script type="text/javascript" src="<?=url_path?>/js/fancybox_2/lib/jquery.mousewheel-3.0.6.pack.js"></script>
    <script type="text/javascript" src="<?=url_path?>/js/fancybox_2/source/jquery.fancybox.js?v=2.1.5"></script>
    <script type="text/javascript" src="<?=url_path?>/js/fancybox_2/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
    <script type="text/javascript" src="<?=url_path?>/js/fancybox_2/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
    <script type="text/javascript" src="<?=url_path?>/js/fancybox_2/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

	<script type="text/javascript" src="<?=url_path?>/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="<?=url_path?>/js/custom.js"></script>
	<script type="text/javascript">var urlAkcija = "<?=url_path?>/action.php";</script>


<?php if($jezik == 'cir' or $jezik == 'lat'){?>
<script src='https://www.google.com/recaptcha/api.js?hl=sr'></script>
<?php } else {?>
<script src='https://www.google.com/recaptcha/api.js'></script>
<?php }?>



    <script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
	<script type="text/javascript">
        _uacct = "UA-830314-3";
        urchinTracker();
    </script>

    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-17499530-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>


	<!--<script type="text/javascript">

		//ispis obavestenja
		function info (text) {

			if ($('.obavesetenje_info').length) {

				$('.obavesetenje_info').append('<br /><hr>'+text+' <a onclick="infoClose();"><img src="<?=url_path?>/js/close.png" /></a>');

			} else {

				$('body').prepend('<div class="obavesetenje_info">'+text+' <a onclick="infoClose();"><img src="<?=url_path?>/js/close.png" /></a></div>');
				$('body').prepend('<div class="loader_obavesetenje"></div>');

			}

			$('.loader_obavesetenje').fadeIn('slow',function(){
				$('.obavesetenje_info').animate({'top':'20px'},500);
			});

		}

	</script>-->

    <script src="<?=url_path?>/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

<script type="text/javascript">
<?php
// popup banner - iskljucen

if (!$_COOKIE['mobile_popup_chk'] && !$_SESSION['mobile_popup_chk']) {
	$_SESSION['mobile_popup_chk'] = 1;
?>

function closeFB(){

	var d = new Date();
	d.setTime(d.getTime() + (7*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = "mobile_popup_chk = yes;"  + expires;

	$.fancybox.close();
	//$("#mobile_popup").hide();
}

if (window.innerWidth < 480 && window.innerHeight < 600) {
	 $(document).ready(function() {

		$('#mobile_popup').fancybox({
			scrolling : 'no',
			titleShow	: false,
			margin : 0,
			padding : 0,
			content : '<div style="width:300px" height="250px;padding:10px;"><h4 style="text-align:center;"><?php echo lang_preuzmite_aplikaciju?></h4><div style="width:50%; float:left; margin:20px auto; text-align:center;"><a href="https://play.google.com/store/apps/details?id=aero.beg.android"><img src="/img/android-apps.png" /></a></div><div style="width:50%; float:left; margin:20px auto; text-align:center;"><a href="https://www.microsoft.com/en-us/store/apps/belgrade-airport/9nblggh20f79"><img src="/img/windows-apps.png" /></a></div><br /><a onclick="closeFB()" style="text-align:center; cursor:pointer; display:block;"><?php echo lang_ne_prikazuj_vise_poruku;?></a></div>'

		}).trigger('click');
	});
}
<?php
}

?>
</script>

  </head>

    <body>
        <div id="novaGodina">
          <img id='sneskoBijelic' src="https://image.ibb.co/jQsgHw/snesko1.png" />
          <img id='djedoMraz' src="https://image.ibb.co/j9BQcw/mraz1.png" />
        </div>
        <script src="<?=url_path?>/snow-3d/snow-3d-vendor.min.js"></script>
        <script src="<?=url_path?>/snow-3d/snow-3d.min.js"></script>

        <script>
            $(function() {
                $('body').snow3d({
                    prefix:'snow3d',
                    url: '<?=url_path?>//snow-3d/flakes/',
                    images: 'flake0.png',
                    images: 'flake1.png,flake2.png,flake3.png,flake4.png,flake5.png,flake6.png,flake7.png',
                    num:300,
                    minScale:10,
                    showOnce:'',
                    enableMobile: true,
                    fadeScroll: false,
                    maxScale:50,
                    closeButton: 0,
                    closeButtonMode: 'once',
                    closeButtonStyles: 'border-radius: 21px;margin: 10px;'
                });
            });
        </script>

  		<div id="mobile_popup"></div>
		<?=display_sys_messages()?> <div id="sys_messages_popup"></div>

		<?

		//obavestenje ();
		?>

		<!-- heade r-->
		<?


		include_once ("include_header.php");


		?>
		<!-- header kraj -->

        <?
		if (!@include_once ("template_".$template.".php")) include_once ("template_404.php");

		if ($template != "home" && $template != "sezonski_red_letenja" && $template != "sezonski_red_letenja_kargo" && $template != "red_letenja" && $template != "dolasci_odlasci" && $template != "red_letenja_cargo" && $template != "dolasci_odlasci_kargo") {
		//if($template == "text" || $template == "news" || $template == "news_view" || $template == "javne_nabavke" || $template == "javne_nabavke_view"){
			include_once("include_right_slide_box.php");
		}


		?>

       <!-- footer -->
        <?
        include_once ("include_footer.php");
        ?>
        <!-- footer kraj -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="<?=url_path?>/js/vendor/core-1.0.5.js"></script>

    <script src="<?=url_path?>/js/bootstrap.min.js"></script>
    <script src="<?=url_path?>/js/jquery.mCustomScrollbar.min.js"></script>
    <script src="<?=url_path?>/js/jquery.mousewheel.min.js"></script>
    <script src="<?=url_path?>/js/jquery.colorbox-min.js"></script>
    <script src="<?=url_path?>/js/preloadCssImages.jQuery_v5.js"></script>
    <script src="<?=url_path?>/js/jquery.stellar.min.js"></script>
    <!--
    * jQuery with jQuery Easing, and jQuery Transit JS
    //-->
    <script src="<?=url_path?>/js/layerslider/jquery-easing-1.3.js" type="text/javascript"></script>
    <script src="<?=url_path?>/js/layerslider/jquery-transit-modified.js" type="text/javascript"></script>
    <!--
    * LayerSlider from Kreatura Media with Transitions
    -->
    <script src="<?=url_path?>/js/layerslider/layerslider.transitions.js" type="text/javascript"></script>
    <script src="<?=url_path?>/js/layerslider/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    <script src="<?=url_path?>/js/jquery.rivathemes.js"></script>
    <script type="text/javascript">
      $('document').ready(function() {
          /*

          Home Page Layer Slider

          */
          $('#layerslider').layerSlider({
            autoStart               : true,
			skinsPath               : 'css/layerslider/skins/',
            skin : 'fullwidth',
            thumbnailNavigation : 'hover',
            hoverPrevNext : false,
            responsive : false,
            responsiveUnder : 1170,
            sublayerContainer : 1170,
			slideDelay : 9000,
          });

          $('#footer-news').rivaSlider({
            visible : 1,
            selector : 'envor-post-preview'
          });

      });
    </script>
    <script src="<?=url_path?>/js/envor.js"></script>
    <script type="text/javascript">
      $('document').ready(function() {



          var imgs = new Array(), $imgs = $('img');
          for (var i = 0; i < $imgs.length; i++) {
            imgs[i] = new Image();
            imgs[i].src = $imgs.eq(i).attr('src');
          }
          Core.preloader.queue(imgs).preload(function() {
            var images = $('a').map(function() {
                    return $(this).attr('href');
            }).get();
            /*Core.preloader.queue(images).preload(function() {
                  $.preloadCssImages();
            })*/
          })
                  $('#envor-preload').hide();
      });
      /*

      Google Analytics Code

      */
     /* var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
      (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src='//www.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'script'));*/
      /*

      Windows Phone 8 и Internet Explorer 10

      */
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
          document.createTextNode(
            "@-ms-viewport{width:auto!important}"
          )
        )
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
      }
    </script>
  </body>
</html>

<?
mysql_close($db);
?>
