 <script>
    // showFirst(0);
    // only start timer if in test mode
    <?php 
      echo 'var _mode = '.json_encode($_SESSION['mode']).';';
      
      echo 'var _userexists = '.json_encode(isset($_SESSION['username'])).';';
    ?> 

    //alert(_mode);

    if (_mode=="test" && _userexists) {
      document.getElementById('timer2Group').setAttribute('style', 'display:undefined');
      var d = getDeadline();

      initializeClock('timer2', d); // no need to reset again if already running
    }

      //})
 
    function makeReport() {
    /*  //alert('hi');
      Canvas = document.getElementById("module1Canvas1");
      Context = Canvas.getContext("2d");

      var imgData = Canvas.toDataURL('image/png');
      var pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 30, 10);
      pdf.save('report.pdf');*/
     }
  
  
</script>
  
  



<div class="container">
    <?php
      // INCLUDING, EXCLUDING AND CHANGING ORDER OR MODULES WILL NOT HURT THE NUMBERING 
      //include("modules/module1.php"); // TODO ANSWER CHECKING AND REPORTING
      include("modules/module3.php"); // REPORTING OK  key signatures
      include("modules/module2.php"); // REPORTING OK  time signatures
      include("modules/module4.php"); // REPORTING OK  scales
      include("modules/module5.php"); // REPORTING OK  interval id
      include("modules/module6.php"); // REPORTING OK construct interval above
      include("modules/module7.php"); // REPORTING OK construct interval below
      include("modules/module12.php");// REPORTING OK inversions of intervals
      include("modules/module8.php"); // REPORTING OK triads
      //include("modules/module9.php"); //roman numeral analysis
      include("modules/module10.php"); // REPORTING OK dom 7 chords
      include("modules/module11.php"); // scale degree names
      
      include("results.php");
    ?>
    
</div>
 
 <!-- Question 9: textual questions regarding enharmonic spelling, key signatures and keys<br>
  [also implemented using theory api. random and text based]<br>
  <br>-->
<script>
  showFirst(0);
</script>
  
  
  
