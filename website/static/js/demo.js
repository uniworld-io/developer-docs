window.onload = function() {
    $(document).on('change', '.binOptions', function() {
        debugger
        var bin1, bin2, finalTotal;
        bin1 = $('#Bin2_Count option:selected').val();
        bin2 = $('#Bin1_Count option:selected').val();
        finalTotal = parseFloat(bin1) + parseFloat(bin2);
        $('#Payment').text(finalTotal.toFixed(2));
    });
}