<script type="text/javascript">
 document.getElementById('btn_dp').addEventListener('click',exportPDF);

  var specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '#bypass': function(element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true;
    }
  };

  exportPDF() {

      var doc = new jsPDF('p', 'pt', 'a4');
      //A4 - 595x842 pts
      //https://www.gnu.org/software/gv/manual/html_node/Paper-Keywords-and-paper-size-in-points.html


      //Html source 
      var source = document.getElementById('tbl_dp').innerHTML;

      var margins = {
        top: 10,
        bottom: 10,
        left: 10,
        width: 595
      };

      doc.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left,
        margins.top, {
          'width': margins.width,
          'elementHandlers': specialElementHandlers
        },

        function(dispose) {
          // dispose: object with X, Y of the last line add to the PDF 
          //          this allow the insertion of new lines after html
          doc.save('detail-profile.pdf');
        }, margins);
  }
</script>