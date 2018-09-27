<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="pragma" content="no-cache" />
  <title>Test of all Rhythms</title>
  <script src="../scripts/jquery/jquery-3.1.0.js"></script>
  <script src="../scripts/raphael/raphael.js"></script>
  <script src="../vextab/releases/vextab-div.js"></script>
   <!-- MUST COME BEFORE VEXFLOW-DEBUG-->
  <script type="text/javascript" src="../vexflow/releases/vexflow-debug.js"></script> <!-- for some reason, vexflow debug MUST be placed after vextab-div. vexflow debug has a color modification
  and if vextab comes after it clears that modification. vextab is only currently necessary for the rhtyhm part (mod2) -->
  <script type="text/javascript" src="../global_options.js"></script>
    

</head>
<body>
  

    <script type="text/javascript">
      document.body.innerHTML+= '<h1>Printout of test bank questions for rhythms</h1><br>total questions in database:' +moduleOptions[2].questionBank.length + '<br><br>';
      for (i=0; i<moduleOptions[2].questionBank.length; i++) {

        var timesig = moduleOptions[2].questionBank[i][3]+'/' + moduleOptions[2].questionBank[i][4];

        var str = moduleOptions[2].questionBank[i][0];

        document.body.innerHTML+= [
        'Question ' + i + ': correct answer is ' + timesig + ' ' + moduleOptions[2].questionBank[i][1] + ' ' + moduleOptions[2].questionBank[i][2] ,
        '<div class="vex-tabdiv">',
          'options beam-rests = false ',
          'stave notation = true',
          'time=' + timesig,
          'notes ' + str,
        '</div>',
        
        ].join('\n');
  
      }
      
      // moduleOptions[2].questionBank.forEach(function(q) {
        // console.log(q) ;

      // })

      
    </script>
    
    <!--<script src="vextab/releases/vextab-div.js"></script>-->
  </body>
</html>
</head>
<body>

</body>
</html>