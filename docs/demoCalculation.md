---
id: demoCalculation
title: Demo Calculation
sidebar_label: Demo Calculation
---

<div class="form-row">
    <div class="label-container">
        <label for="Bin1_Count">Bin 1</label>
    </div>
    <div class="input-container">
        <select id="Bin1_Count" name="Bin1_Count" class="binOptions">
            <option value="0"> - select - </option>
            <option value="10.00">1 - 10.00</option>
            <option value="15.00">3 - 15.00</option>
            <option value="52.00">13 - 52.00</option>
        </select>
    </div>
</div>
<div class="form-row">
    <div class="label-container">
        <label for="Bin2_Count">Bin 2</label>
    </div>
    <div class="input-container">
        <select id="Bin2_Count" name="Bin2_Count" class="binOptions">
            <option value="0"> - select - </option>
            <option value="10.00">1 clean - 10.00</option>
            <option value="15.00">3 cleans - 15.00</option>
            <option value="52.00">13 cleans - 52.00</option>
        </select>
    </div>
</div>
<div>Total: <b id="Payment"></b></div>
<script src="../js/UnichainJS.js"></script>
<script type="text/javascript">
console.log('hehehe ===========')
console.log('hello')
//const Unichain = require('@uniworld/unichain-js');
console.log(UnichainJS.address.fromPrivateKey('4ac7b76aad6cca988a9b11b17dee08bda9aaf1e8ef65fb719a19eee5c3ad0d02'))
</script>

## Testing
### Testing 1