<?php
	// require_once($_SERVER["DOCUMENT_ROOT"]."/ocp/include/connect.php");
	// require_once($_SERVER["DOCUMENT_ROOT"]."/ocp/include/utils.php");
    require_once($_SERVER["DOCUMENT_ROOT"]."/ocp/include/xml_tools.php");
    
    // $ponedeljak = 0; $utorak = 0; $sreda = 0; $cetvrtak = 0; $petak = 0; $subota = 0; $nedelja = 0;
	// $months = array("Jan" => "01", "Feb" => "02", "Mar" => "03", "Apr" => "04", "May" => "05", "Jun" => "06", "Jul" => "07", "Aug" => "08", "Sep" => "09", "Oct" => "10", "Nov" => "11", "Dec" => "12");
	// $tip = array();
	// $cargoFlights = cargoFlights();
    // $charterFlights = charterFlights();
      //$xml = xml_load("http://www.beg.aero/proba2.xml");
      //$xml = xml_load("http://aero.omnicom-dev.com/sezonski.xml");
  	$xml = xml_load("http://test.beg.aero/redLetenja.xml"); //promenjeno 28.10.2014
      if ($xml)
      {
        //   $letovi = $xml->getElementsByTagName("LET");
          $letovi = xml_getElementsByTagName($xml, "LET");
          var_dump($letovi->length);
          if ($letovi->length > 0)
          {
            //   echo"ja sam prosao duzinu vecu od 0";
              for ($l = 0; $l < $letovi->length; $l++)
              {
                  $let = $letovi->item($l);
                  $let = sortFlight($let);
              }
  
              for ($l = 0; $l < $letovi->length; $l++)
              {
                  $let = $letovi->item($l);
                 // relatedFlights($let);
              }
              //Privremeno resenje za bug sa sezonskim letovima
              // deleteFlights(); //Ovo je potrebno vratiti da bi mogli da se menjaju podaci za sezonske letove
              // processFlights(); //Ovo je potrebno vratiti da bi mogli da se menjaju podaci za sezonske letove
          }
  
          echo "&ok=true";
      }
      else
      {
          echo "&ok=false";
      }

    //   function sortFlight($let)
    //   {
    //       global $tip, $cargoFlights, $charterFlights;
  
    //       $tipVeze = xml_getFirstElementByTagName($let, "TIP_VEZE");
    //       $tipVeze = xml_nodeValue($tipVeze);
  
    //       if ($tipVeze < 2)
    //       {
    //           $kljuc = xml_getFirstElementByTagName($let, "KLJUC");
    //           $kljuc = xml_nodeValue($kljuc);
    //           $kljuc = clearSpaces($kljuc);
              
    //           $brojLeta = xml_getFirstElementByTagName($let, "BROJ_LETA");
    //           $brojLeta = xml_nodeValue($brojLeta);
    //           $brojLeta = clearSpaces($brojLeta);
  
    //           for ($c = 0; $c < count($cargoFlights); $c++)
    //           {
    //               $cargoFlight = $cargoFlights[$c];
                  
    //               if (clearSpaces($cargoFlight["BrojLeta"]) == $brojLeta)
    //               {
    //                   xml_setAttribute($let, "cargo", 1);
    //               }
    //           }
  
    //           for ($h = 0; $h < count($charterFlights); $h++)
    //           {
    //               $charterFlight = $charterFlights[$h];
                  
    //               if (clearSpaces($charterFlight["BrojLeta"]) == $brojLeta)
    //               {
    //                   xml_setAttribute($let, "charter", 1);
    //               }
    //           }
  
    //           $tipVeze = ($tipVeze == "")? 0 : intval($tipVeze);
    //           $tip[$tipVeze][$kljuc] = $let;
  
    //           return $let;
    //       }
    //   }
  
    //   function cargoFlights()
    //   {
    //       $sql = "SELECT BrojLeta FROM cargofilter WHERE Valid = 1";
    //       $rs = con_getResults($sql);
  
    //       return $rs;
    //   }
  
    //   function charterFlights()
    //   {
    //       $sql = "SELECT BrojLeta FROM charterfilter WHERE Valid = 1";
    //       $rs = con_getResults($sql);
  
    //       return $rs;
    //   }
  
    //   function relatedFlights($let)
    //   {
    //       global $tip;
  
    //       $tipVeze = xml_getFirstElementByTagName($let, "TIP_VEZE");
    //       $tipVeze = xml_nodeValue($tipVeze);
  
    //       if ($tipVeze > 1)
    //       {
    //           $tipLeta = xml_getFirstElementByTagName($let, "TIP");
    //           $tipLeta = xml_nodeValue($tipLeta);
  
    //           $brojLeta = xml_getFirstElementByTagName($let, "BROJ_LETA");
    //           $brojLeta = xml_nodeValue($brojLeta);
    //           $brojLeta = clearSpaces($brojLeta);
  
    //           $tempBrojLeta = str_replace(" ", "", $brojLeta);
  
    //           $varijanta = xml_getFirstElementByTagName($let, "VARIJANTA");
    //           $varijanta = xml_nodeValue($varijanta);
  
    //           $vezanLet = xml_getFirstElementByTagName($let, "VEZAN_LET");
    //           $vezanLet = xml_nodeValue($vezanLet);
  
    //           $tempVezanLet = str_replace(" ", "", $vezanLet);
  
    //           $noseciKljuc = $tipLeta.$tempVezanLet.$varijanta;
  
    //           if (isset($tip[1][$noseciKljuc]))
    //           {
    //               $targetNode = $tip[1][$noseciKljuc];
    //               $vezaniLetovi = xml_getAttribute($targetNode, "vezani_letovi");
  
    //               if (!utils_valid($vezaniLetovi))
    //               {
    //                   xml_setAttribute($targetNode, "vezani_letovi", $brojLeta);
    //               }
    //               else
    //               {
    //                   xml_setAttribute($targetNode, "vezani_letovi", $vezaniLetovi."|".$brojLeta);
    //               }
    //           }
    //       }
    //   }
  
    //   function getCompany($string)
    //   {
          
    //       if (strlen($string) > 3)
    //       {
    //           $string = substr($string, 0, 3);
    //       }
  
    //       $sql = "SELECT Id FROM companies WHERE CallSign = '".$string."' AND Valid = 1";
  
    //       $rs = con_getResult($sql);
  
    //       if (isset($rs["Id"]) && utils_valid($rs["Id"]))
    //       {
    //           return $rs["Id"];
    //       }
    //       else
    //       {
    //           $sql = "INSERT INTO companies (CallSign, Title) VALUES ('".$string."', '".$string."')";
    //           $lastId = con_insert($sql);
  
    //           return $lastId;
    //       }
    //   }
  
    //   function processFrequency($frekvencija)
    //   {
    //       global $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja;
  
    //       if (substr_count($frekvencija, "1") == 1) { $ponedeljak = 1; }
    //       if (substr_count($frekvencija, "2") == 1) { $utorak = 1; }
    //       if (substr_count($frekvencija, "3") == 1) { $sreda = 1; }
    //       if (substr_count($frekvencija, "4") == 1) { $cetvrtak = 1; }
    //       if (substr_count($frekvencija, "5") == 1) { $petak = 1; }
    //       if (substr_count($frekvencija, "6") == 1) { $subota = 1; }
    //       if (substr_count($frekvencija, "7") == 1) { $nedelja = 1; }
    //   }
  
    //   function processFlights()
    //   {
    //       global $tip, $months, $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja;
  
    //       ksort($tip);
    //       $i = 0;
    //       if (isset($tip) && count($tip) > 0)
    //       {
    //           foreach ($tip as $tipVeze)
    //           {
    //               foreach ($tipVeze as $let)
    //               {
    //                   $kljuc = xml_getFirstElementByTagName($let, "KLJUC");
    //                   $kljuc = xml_nodeValue($kljuc);
    //                   $kljuc = clearSpaces($kljuc);
  
    //                   $terminal = xml_getFirstElementByTagName($let, "TERMINAL");
    //                   $terminal = intval(xml_nodeValue($terminal));
  
    //                   $tipLeta = xml_getFirstElementByTagName($let, "TIP");
    //                   $tipLeta = xml_nodeValue($tipLeta);
  
    //                   $brojLeta = xml_getFirstElementByTagName($let, "BROJ_LETA");
    //                   $brojLeta = xml_nodeValue($brojLeta);
    //                   $brojLeta = clearSpaces($brojLeta);
  
    //                   $tempArray = explode(" ", $brojLeta);
    //                   $kompanija = getCompany($tempArray[0]);
                      
    //                   $destinacija = xml_getFirstElementByTagName($let, "DESTINACIJA");
    //                   $destinacija = xml_nodeValue($destinacija);
    //                   $destinacija = str_replace("'", "''", $destinacija);
  
    //                   $preko = xml_getFirstElementByTagName($let, "PREKO");
    //                   $preko = xml_nodeValue($preko);
  
    //                   $vreme = xml_getFirstElementByTagName($let, "VREME");
    //                   $vreme = xml_nodeValue($vreme);
  
    //                   $varijanta = xml_getFirstElementByTagName($let, "VARIJANTA");
    //                   $varijanta = intval(xml_nodeValue($varijanta));
  
    //                   $frekvencija = xml_getFirstElementByTagName($let, "FREKVENCIJA");
    //                   $frekvencija = xml_nodeValue($frekvencija);
    //                   processFrequency($frekvencija);
                      
    //                   $od = xml_getFirstElementByTagName($let, "OD");
    //                   $od = xml_nodeValue($od);
    //                   $tempArray = explode("-", $od);
    //                   $od = "20".$tempArray[2]."/".$months[$tempArray[1]]."/".$tempArray[0];
  
    //                   $do = xml_getFirstElementByTagName($let, "DO");
    //                   $do = xml_nodeValue($do);
    //                   $tempArray = explode("-", $do);
    //                   $do = "20".$tempArray[2]."/".$months[$tempArray[1]]."/".$tempArray[0];
                      
    //                   //prekid_od
    //                   $prekid_od = xml_getFirstElementByTagName($let, "PREKID_OD");
    //                   $prekid_od = xml_nodeValue($prekid_od);
    //                   if($prekid_od) {
    //                       $tempArray = explode("-", $prekid_od);
    //                       $prekid_od = "20".$tempArray[2]."/".$months[$tempArray[1]]."/".$tempArray[0];
    //                   }
    //                   else {
    //                       $prekid_od = '0000-00-00 00:00:00';
    //                   }
                                          
    //                   $prekid_do = xml_getFirstElementByTagName($let, "PREKID_DO");
    //                   $prekid_do = xml_nodeValue($prekid_do);
    //                   if($prekid_do) {
    //                       $tempArray = explode("-", $prekid_do);
    //                       $prekid_do = "20".$tempArray[2]."/".$months[$tempArray[1]]."/".$tempArray[0];
    //                   }
    //                   else {
    //                       $prekid_do = '0000-00-00 00:00:00';
    //                   }
                      
    //                   $tipVeze = xml_getFirstElementByTagName($let, "TIP_VEZE");
    //                   $tipVeze = intval(xml_nodeValue($tipVeze));
  
    //                   $vezanLet = xml_getFirstElementByTagName($let, "VEZAN_LET");
    //                   $vezanLet = xml_nodeValue($vezanLet);
    //                   $vezanLet = clearSpaces($vezanLet);
  
    //                   $vezaniLetovi = xml_getAttribute($let, "vezani_letovi");
    //                   $vezaniLetovi = (utils_valid($vezaniLetovi))? $vezaniLetovi : "";
  
    //                   $cargo = xml_getAttribute($let, "cargo");
    //                   $cargo = (utils_valid($cargo))? 1 : 0;
  
    //                   $charter = xml_getAttribute($let, "charter");
    //                   $charter = (utils_valid($charter))? 1 : 0;
  
    //                   $existId = checkFlight($kljuc);
  
    //                   if (utils_valid($existId))
    //                   {
    //                       updateFlight($existId, $kljuc, $terminal, $tipLeta, $brojLeta, $kompanija, $destinacija, $preko, $vreme, $varijanta, $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja, $od, $do, $tipVeze, $vezaniLetovi, $cargo, $charter, $prekid_od, $prekid_do);
    //                   }
    //                   else
    //                   {
    //                       insertFlight($kljuc, $terminal, $tipLeta, $brojLeta, $kompanija, $destinacija, $preko, $vreme, $varijanta, $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja, $od, $do, $tipVeze, $vezaniLetovi, $cargo, $charter, $prekid_od, $prekid_do);
    //                   }
  
    //                   $ponedeljak = 0; $utorak = 0; $sreda = 0; $cetvrtak = 0; $petak = 0; $subota = 0; $nedelja = 0;
    //               }
    //           }
    //       }
    //   }
  
    //   function checkFlight($kljuc)
    //   {
    //       $sql = "SELECT Id FROM flightscheduleseasonal WHERE Kljuc = '".$kljuc."' AND Valid = 1";
    //       $rs = con_getResult($sql);
  
    //       if (isset($rs["Id"]) && utils_valid($rs["Id"]))
    //       {
    //           return $rs["Id"];
    //       }
    //       else
    //       {
    //           return false;
    //       }
    //   }
  
    //   function insertFlight($kljuc, $terminal, $tipLeta, $brojLeta, $kompanija, $destinacija, $preko, $vreme, $varijanta, $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja, $od, $do, $tipVeze, $vezanLet, $cargo, $charter, $prekid_od = '', $prekid_do = '')
    //   {
    //       $sql = "INSERT INTO flightscheduleseasonal (Kljuc, Terminal, Tip, BrojLeta, KompanijaFK, Destinacija, Preko, Vreme, Varijanta, Ponedeljak, Utorak, Sreda, Cetvrtak, Petak, Subota, Nedelja, Od, Do, TipVeze, VezanLet, Cargo, Charter, PrekidOd, PrekidDo) VALUES ('".$kljuc."', ".$terminal.", '".$tipLeta."', '".$brojLeta."', ".$kompanija.", '".$destinacija."', '".$preko."', '".$vreme."', ".$varijanta.", ".$ponedeljak.", ".$utorak.", ".$sreda.", ".$cetvrtak.", ".$petak.", ".$subota.", ".$nedelja.", '".$od."', '".$do."', ".$tipVeze.", '".$vezanLet."', ".$cargo.", ".$charter.", '".$prekid_od."', '".$prekid_do."')";
  
    //       con_insert($sql);
    //   }
  
    //   function updateFlight($existId, $kljuc, $terminal, $tipLeta, $brojLeta, $kompanija, $destinacija, $preko, $vreme, $varijanta, $ponedeljak, $utorak, $sreda, $cetvrtak, $petak, $subota, $nedelja, $od, $do, $tipVeze, $vezanLet, $cargo, $charter, $prekid_od = '', $prekid_do = '')
    //   {
    //       $sql = "UPDATE flightscheduleseasonal SET Kljuc = '".$kljuc."', Terminal = ".$terminal.", Tip = '".$tipLeta."', BrojLeta = '".$brojLeta."', KompanijaFK = ".$kompanija.", Destinacija = '".$destinacija."', Preko = '".$preko."', Vreme = '".$vreme."', Varijanta = ".$varijanta.", Ponedeljak = ".$ponedeljak.", Utorak = ".$utorak.", Sreda = ".$sreda.", Cetvrtak = ".$cetvrtak.", Petak = ".$petak.", Subota = ".$subota.", Nedelja = ".$nedelja.", Od = '".$od."', Do = '".$do."', TipVeze = ".$tipVeze.", VezanLet = '".$vezanLet."', Cargo = ".$cargo.", Charter = ".$charter.", PrekidOd = '".$prekid_od."', PrekidDo = '".$prekid_do."' WHERE Id = ".$existId;
  
    //       con_update($sql);
    //   }
  
    //   function deleteFlights()
    //   {
    //       $sql = "DELETE FROM flightscheduleseasonal";
  
    //       con_delete($sql);
    //   }
  ?>