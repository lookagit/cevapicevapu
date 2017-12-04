<!-- footer meni -->
<!--<ul>
	<?
	/*
	function formatSQLMenu_footer ($parent, $link_niz) {
		
		$menu = getRows("select * from admin_meni as meni inner join admin_meni_tip as tip on meni.ID_uniq=tip.ID_meni_uniq where ID_admin_meni_tip='10' and ID_uniq<>11 and jezik='".jezik."' and ID_fk = ".(int)$parent." ".query_publish." order by prioritet, title");
		if (!is_array($menu)) return false;
		
		$html = '<ul class="footer_menu">';
		$i = 1;	
		
		foreach ($menu as $item) {
			
			$html .= '<li>';
			$html .= '<a '.URLmaker ($item, "menu").'  class="footer_link';
			if (in_array (getIDthroughUniq ($item['ID_uniq'], "admin_meni", "ID_meni", jezik_default), $link_niz)) $html .= ' current ';
			$html .= '" >';
			$html .= stripslashes ($item['title']).'</a>';
			$html .= formatSQLMenu_footer(getIDthroughUniq ($item['ID_uniq'], "admin_meni", "ID_meni", jezik_default), $link_niz);				
			$html .= '</li>';
			
			$i++;
			
			//if($i == 6) {
				//$html .= '</ul>';
				//$html .= '<ul class="footer_menu">';
			//}
		}
		
		$html .= '</ul>';
		return $html;
	
	}
	*/
	//echo formatSQLMenu_footer (0, $link_niz);
	
	//echo formatSQLMenu_footer (991, $link_niz);
	?>
</ul>-->
 <!-- Envor footer start -->
 
    <footer class="envor-footer envor-footer-1">
      <div class="container">
        <div class="row">
          <!--

          Footer About Widget start

          //-->
          <!--Social Buttons start -->
            
              <ul class="social-btns">
                <li><a href="https://www.facebook.com/pages/Aerodrom-Nikola-Tesla-Beograd/548676318518391" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/AeroNikolaTesla" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/beg.aero/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCslUZhsW3Ne-7lSxFVMsS-g" target="_blank"><i class="fa fa-youtube"></i></a></li>
                <li><a href="<?=url_path.jezik_link?>/strana/13211/rss" target="_blank"><i class="fa fa-rss"></i></a></li>
                <li><a href="<?=url_path.jezik_link?>/strana/241/site-map" target="_blank"><i class="fa fa-sitemap"></i></a></li>
              </ul>
           
              <!-- Social Buttons end -->
              <div style="clear:both"></div>
              
          <!-- Footer News Widget start -->
          <div class="col-lg-6 col-md-6">
            <div class="envor-widget">
              <h3 class="news"><?=lang_najnovije_vesti?></h3>
              <div class="envor-widget-inner">
                <div class="envor-wrapper" id="footer-news">
                  <!--  News Item start -->
                  
                  <?
				  	$upit_vesti_footer = "select * from admin_meni_vesti where ID_meni_uniq='12061' and jezik='".jezik."' ".query_publish." order by datum desc, title LIMIT 3";
				  	
					$sql_upit_footer = mysql_query ($upit_vesti_footer);
					
					while ($rez_upit_footer= mysql_fetch_assoc ($sql_upit_footer)) {
						
						$datum = datum_3 (stripslashes ($rez_upit_footer['datum']));
						$datum_arr = explode('.', $datum);
						$dan = $datum_arr[0];
						$mesec = monthTranslator ($datum_arr[1]);
						$godina = $datum_arr[2];
		
						echo '<article class="envor-post-preview">
								<div class="envor-post-preview-inner">
								  <div class="header">
									<div class="date">
									<span class="day">'.$dan.'</span><span class="month">'.$mesec.', '.$godina.'</span>
									  
									  
									</div>
													
									<div class="envor-navigation envor-navigation-left rivaslider-navigation">
										<a href="" class="forward"><i class="glyphicon glyphicon-chevron-right"></i></a>
										<a href="" class="back"><i class="glyphicon glyphicon-chevron-left"></i></a>
									</div>';
						
						echo '<h2><a '.URLmaker ($rez_upit_footer, "news").'>'.stripslashes ($rez_upit_footer['title']).'</a></h2>';
									
						echo '</div>
                      		</div>
						</article>';
				
					}
					
					
				  ?>
                  
                </div>
              </div>
            </div>
          <!-- Footer News Widget end -->
          </div>
          
          <!-- Footer Contacts Widget start -->
          <div class="col-lg-3 col-md-3" style="padding-top:0px; padding-bottom:0px;">
            <div class="envor-widget envor-contacts-widget">
              <h3 class="contact"><?=lang_info?></h3>
              <div class="envor-widget-inner">
                <p><?=lang_telefon_za_opste_informacije?><br />(+381 11) 209 4000</p>
                <p><?=lang_informacije_o_redu_letenja?><br />(+381 11) 209 4444</p>
                <p><?=lang_u_slucaju_prekida_veze?><br />(+381 64) 8485 402 <?=lang_ili?> <br />(+381 63) 255 066</p>
              </div>
            </div>
          </div>
          <!-- Footer Contacts Widget end-->
          
          <!-- Footer Contacts Widget start -->
          <div class="col-lg-3 col-md-3" style="padding-top:0px; padding-bottom:0px;">
            <div class="envor-widget envor-contacts-widget">
              <h3 class="mapa"><?=lang_mapa?></h3>
              <div class="envor-widget-inner">
                <a href="<?=url_path?>/strana/8631/мапа-зграде"><img src="<?=url_path?>/img/mapa-footer.jpg" /></a>
              </div>
            </div>
          </div>
          <!-- Footer Contacts Widget end-->
          
          <div class="col-lg-12">
            <div class="envor-widget envor-copyright-widget" style="margin-top:20px;">
              	 <div class="col-lg-12 col-md-12" style="padding-top:0px; padding-bottom:0px;">
                 
                 <?
				 	(!query_publish) ? $include_meni = "all" : $include_meni = "publish";
				 	include_once (dir_path . '/meni_html/footer_meni_'.jezik.'_'.$include_meni.'.html');
					include_once (dir_path . '/meni_html/footer_meni_'.jezik.'_'.$include_meni.'_2.html');
				 	//echo formatSQLMenu_footer (0, $link_niz);
					//echo formatSQLMenu_footer (991, $link_niz);
				 ?>
                 	     		
                </div>
            </div>
           </div>
          
          <!-- Footer Copyright start -->
          <div class="col-lg-12">
            <div class="envor-widget envor-copyright-widget">
              <div class="envor-widget-inner">
                <p><?=lang_footer2?>&nbsp;&nbsp;&nbsp; <a href="<?=url_path.jezik_link?>/strana/15671/Правила-коришћења-интернет-презентације"><?=lang_pravila_koriscenja?></a> <!--<a href="http://www.dubes.net">Dubes doo</a>--></p>
              
              </div>
            </div>
           </div>
           <!-- Footer Copyright end -->
          
        </div>
      </div>
    <!--

    Envor footer end

    //-->
    </footer>

<script>
		
	$(document).ready(function() {
		
		<? foreach ($link_niz as $k => $v) { ?>
			$( ".meni_link_<?=$v?>" ).addClass('current');
		<? } ?>
		
	});
	
 </script>