<!-- logo -->
<!--<div class="logo"><a href="<?=url_path.jezik_link?>/">logo</a></div>-->

<!-- pretraga -->

<!--<form action="<?=url_path?>/index.php" method="get" name="form_search_top" id="form_search_top">
	<input name="go" type="hidden" value="strana" />
	<input name="ID" type="hidden" value="1471" />
	<input name="jezik" type="hidden" value="<?=jezik?>" />

	<input name="q" type="text" class="pretraga_form" onfocus="if ( this.value == '<?=($_REQUEST['q']) ? urldecode (stripslashes (htmlspecialchars ($_REQUEST['q']))) : lang_Pretrazite_sajt?>' ) this.value = '';" onblur="if ( this.value == '' ) this.value = '<?=($_REQUEST['q']) ? urldecode (stripslashes (htmlspecialchars ($_REQUEST['q']))) : lang_Pretrazite_sajt?>';" value="<?=($_REQUEST['q']) ? urldecode (stripslashes (htmlspecialchars ($_REQUEST['q']))) : lang_Pretrazite_sajt?>" />
	<input name="submit" type="submit" value="" class="pretraga_dugme">
</form>-->



<!-- glavni meni -->


    <!--[if lt IE 7]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    <!--

    Scroll to the top

    //-->
    <div id="to-the-top"><i class="fa fa-chevron-up"></i></div>
    <!--

    Image Preload

    //-->
    <div id="envor-preload">
      <span></span>
      <i class="fa"></i>
      <p></p>
    </div>
    <!--

    Envor mobile menu start

    //-->
    <i class="glyphicon glyphicon-align-justify" id="envor-mobile-menu-btn"></i>
    <div class="envor-mobile-menu" id="envor-mobile-menu">
      <h3>menu</h3>
               <nav>
    
    
	<?
    (!query_publish) ? $include_meni = "all" : $include_meni = "publish";
    include_once (dir_path . '/meni_html/header_meni_'.jezik.'_'.$include_meni.'.html');
    ?>
    
                 
	<?
	/*
	function formatSQLMenu_header ($parent, $link_niz) {
		
		$menu = getRows("select * from admin_meni as meni inner join admin_meni_tip as tip on meni.ID_uniq=tip.ID_meni_uniq where ID_admin_meni_tip='5' and jezik='".jezik."' and link<>'991' and ID_fk = ".(int)$parent." ".query_publish." order by prioritet, title");
		if (!is_array($menu)) return false;
		
		$html = '<ul class="top_menu">';
			
		foreach ($menu as $item) {
			
			$html .= '<li '.URLmaker ($item, "menu").' class="';
			if (in_array (getIDthroughUniq ($item['ID_uniq'], "admin_meni", "ID_meni", jezik_default), $link_niz)) $html .= ' current ';
			$html .= '" >';
			$html .= '<a '.URLmaker ($item, "menu").'  class="';
			if (in_array (getIDthroughUniq ($item['ID_uniq'], "admin_meni", "ID_meni", jezik_default), $link_niz)) $html .= ' current ';
			$html .= '" >';
			$html .= stripslashes ($item['title']).'</a>';
			$html .= formatSQLMenu_header(getIDthroughUniq ($item['ID_uniq'], "admin_meni", "ID_meni", jezik_default), $link_niz);				
			$html .= '</li>';
			
		}
		
		$html .= '</ul>';
		return $html;
	
	}
	*/
	/*if($link_root == '991' || $template == 'news_view' || $template == 'javne_nabavke_view'){
				   
		echo formatSQLMenu_header (991, $link_niz); 
				   
	}else{*/
	
		//echo formatSQLMenu_header (0, $link_niz);
		/*echo formatSQLMenu_header (991, $link_niz); */
	/*}*/
	?>

                <!--

                Mobile Menu end

                //-->
                </nav>


    <!--

    Envor mobile menu end

    //-->
    </div>

    <header class="envor-header envor-header-1">
      <!--

      Top bar start

      //-->
      <div class="envor-top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
            	<!-- Site Logo start -->
                
                <div class="envor-logo">
                <a href="<?=url_path.jezik_link?>/">
                
                <? //echo ($jezik == 'en') ? '<img src="'.url_path.'/img/logo-en.png" alt="Aerodrom Logo">' : '<img src="'.url_path.'/img/logo-lat.png" alt="Aerodrom Logo" >'; ?>
                <? echo '<img src="'.url_path.'/img/logo-'.jezik.'.png" alt="Aerodrom Logo">'; ?>
                
                </a>
                </div>
                
                <!-- Site Logo end -->
                
                
                
                 
                <!-- jezici -->
                <div style="float:right;margin-bottom:15px; width:150px;">
                    <div>
                        <ul class="jezici">
                        <?
                        $sql_jezik = mysql_query ("select * from admin_jezik where ID_jezik>'0' AND prefix<>'$jezik' ".query_publish." order by prioritet, title");
                        if (mysql_num_rows ($sql_jezik) > 0) {
                            while ($rez_jezik = mysql_fetch_assoc ($sql_jezik)) {
                                                                                        
                                echo '<li ';
                                if ($rez_jezik['prefix'] == jezik) echo ' style="display:none;"';
                                      echo '><img src="'.url_path.'/images/language_flags/'.stripslashes ($rez_jezik['flag']).'" class="lang" /><a href="'.url_path.'/action.php?page=language&amp;language='.stripslashes ($rez_jezik['prefix']).'&amp;url='.$_REQUEST['link'].'" title="'.stripslashes ($rez_jezik['title']).'">'.stripslashes ($rez_jezik['title']).'</a></li>';
                                
                            }
                        }
                        ?>
                        </ul>
                        
                    <link rel="stylesheet" type="text/css" href="<?php echo url_path?>/css/jquery.autocomplete.css">
					<script type="text/javascript" src="<?php echo url_path?>/js/jquery.autocomplete.js"></script>
                    <script>

						/*function submitPretragaSajta() {
							if (($("#pretraga_form").val()) && ($("#pretraga_form").val().length > 1) && ($("#pretraga_form").val()!='<?=lang_Pretrazite_sajt?>')) {
						//      alert('spiciAlert' + $("#trazi").val());
								$('#form_search_top').submit();
								return false;
							} else {
								alert('Morate uneti trazeni termin');
								return false;
								}
							return false;
						}*/
								
						$(document).ready(function () { 
																		   
								$("#pretraga_form").autocomplete({
								url: '<?=url_path;?>/scripts/search_autocomplete.php?output=json&jezik=<?=jezik?>',
								
								minChars:2,
								showResult: function (value, data) {
									return '<span style="color:#000; text-align:left; float:left; z-index:1001;display:block;">' + value + '</span>';
								},
						        //onItemSelect:  $('#form_search_top').submit(),
								onItemSelect:  function(){
									$('#searchsubmit').click();
								},
								mustMatch: false,
								maxItemsToShow: 10,
								selectFirst: false,
								autoFill: false,
								selectOnly: false,
								remoteDataType: 'json'
								
							});
						});
					</script>
                    
                    
                   	<!-- pretraga -->

                    <form action="<?=url_path?>/index.php" method="get" name="form_search_top" id="form_search_top">
                        <input name="go" type="hidden" value="strana" />
                        <input name="ID" type="hidden" value="1471" />
                        <input name="jezik" type="hidden" value="<?=jezik?>" />
                    
                        <input name="q" type="text" class="pretraga_form" id="pretraga_form" onfocus="if(this.value == '<?=lang_Pretrazite_sajt?>') this.value = ''" onblur="if(this.value == '') this.value = '<?=lang_Pretrazite_sajt?>'" value="<?=lang_Pretrazite_sajt?>" />
                        <input name="submit" type="submit" value="<?=lang_trazi?>" class="pretraga_dugme" id="searchsubmit" style="display:none;">
                    </form>
                    </div>
                    <div>
                        <!--<span class="kompanija_putnici">
                            <img src="<?=url_path?>/img/putnici_kompanija_left_back.png"  />
                            <em>
                            <a href="<?=url_path.jezik_link;?>/" <? if($link_root!='991' && $template != 'news_view' && $template != 'javne_nabavke_view') echo 'class="active"' ?>> <?=lang_putnici;?> </a> / 
                            <a href="<?=url_path.jezik_link.'/strana/10061/О-Аеродрому'?>" <? if($link_root=='991' || $template == 'news_view' || $template == 'javne_nabavke_view') echo 'class="active"' ?>><?=lang_biznis?></a>
                            </em>
                        </span>-->
                         
                
                    </div>
                </div>
                
                <div class="pretraga_sajta">
                	
                </div>
            </div>
          </div>
        </div>
      <!--

      Top bar end

      //-->
      </div>
      <!--

      Logo & Menu start

      //-->
      <div class="envor-header-bg" id="envor-header-menu">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="envor-relative">
                
                
                <!--

                Desktop Menu start

                //-->
                <nav>
					
                    <?
					(!query_publish) ? $include_meni = "all" : $include_meni = "publish";
					include (dir_path . '/meni_html/header_meni_'.jezik.'_'.$include_meni.'.html');
					?>
    
                   <? 
				  /* if($link_root == '991' || $template == 'news_view' || $template == 'javne_nabavke_view'){
				   
				   	echo formatSQLMenu_header (991, $link_niz); 
				   
				   }else{*/
					
					
					//echo formatSQLMenu_header (0, $link_niz); 
					/*echo formatSQLMenu_header (991, $link_niz);*/
					   
				  /* }*/
				   
				   ?>

                <!--

                Desktop Menu end

                //-->
                </nav>
              </div>
            </div>
          </div>
        </div>
      <!--

      Logo & Menu end

      //-->
      </div>
    <!--

    Envor header end

    //-->
    </header>


<!-- header baneri -->
<?
if ($baneri_niz[10]) {
	
	foreach ($baneri_niz[10] as $k_baner => $v_baner) {
		
		echo '<div style="background-image: url('.url_path.'/admin_images/meni_background/'.$v_baner[3].');">'.htmlspecialchars_decode ($v_baner[0]).'</div>';
	
	}

}
?>





























