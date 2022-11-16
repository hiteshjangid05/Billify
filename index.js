function reformatDate(dateStr) {
    var dArr = dateStr.split("-"); // ex input: "2010-01-18"
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0]; //ex output: "18-01-2010"
}

function doConvertNumberToText(inputNumber) {
    let numberInput = inputNumber;

    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '
    ];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let num = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million ' : '';

    outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred ' : '';
    outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand ' : '';
    outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
    outputText += num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : '';
    outputText += "only"
    return outputText;
}

function formValidation() {
    var pnr = document.forms["myform"]["pnr"].value;
    pnr = pnr.split(",");
    var passenger_name = document.forms["myform"]["names"].value;
    var contacts = document.forms["myform"]["contact_number"].value;
    passenger_name = passenger_name.split(",");
    var sector = document.forms["myform"]["sector"].value;
    sector = sector.split(",");
    var invoice_number = document.forms["myform"]["invoice"].value;
    var date = document.forms["myform"]["date"].value;
    date = reformatDate(date);
    var airline = document.forms["myform"]["airline"].value;
    var basic_fair = document.forms["myform"]["basic_fair"].value;
    basic_fair = basic_fair.split(",");
    var from = document.forms["myform"]["from"].value;
    var service_tax = document.forms["myform"]["Service_tax"].value;
    service_tax = service_tax.split(",");
    var tax_percentage = document.forms["myform"]["tax"].value;
    var to = document.forms["myform"]["to"].value;
    let style = '<style>';
    style += '* {font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; box-sizing: border-box;}'
    style += '.branding_container { display: flex;justify-content: end;}';
    style += '.word {text-align: end;}';
    style += '.bigword {text-align: center;align-items: center;font-size: 1rem;}';
    style += '.white_box_container {display: flex;flex-direction: row;border: 1px solid rgb(255, 255, 255);justify-content: center;}';
    style += '.white_box {border: 1px solid rgb(255, 255, 255);padding: 10px 40px 10px 10px;width: 50rem;font-size: 15px;}';
    style += '.word_box {padding-left: 2rem;justify-content: center;font-size: 1px;}';
    style += '.purple_box_container {margin-top: 10rem;display: flex;justify-content: center;}';
    style += '.purple_box {background-color: rgb(94, 65, 197);height: 2rem;width: 100%;display: flex;align-items: center;color: white;justify-content: flex-end;padding-right: 1rem;font-size: 14px;}';
    style += '.word2_box_container {justify-content: center;margin-top: 1rem;display: flex;}';
    style += '.word2_box {padding-left: 37rem;}';
    style += '.word3_box_container {justify-content: right;margin-top: 2rem;display: flex;}';
    style += '.word3_box {padding: 1rem;margin-left: 12px;font-size: 13px;}';
    style += '.eightword_box_container {margin-top: 1rem;justify-content: center;display: flex;}';
    style += '.eightword_box {font-size: 10px;padding-right: 12rem;}';
    style += '.mainbox {font-size: small;justify-content: center; align-items: center;display: flex; width:auto;}';
    style += '.column {width:40%;justify-content: center;}';
    style += '.box {height: 3rem;background-color: rgb(255, 255, 255);font-size: 15px;align-items: center;}';
    style += '.words {font-size: 11px;text-align: center; justify-content:center; height:2rem;padding-top:0.75rem;}';
    style += '.box2 { display:flex;background-color: rgb(94, 65, 197);height: 2.5rem ;color: white;align-items: center;text-align: center; justify-content:center;}';
    style += '</style>';

    let header = '<div class="branding_container">' +
        '<div class="word">' +
        '<p><b style="font-size=20px">Alreigh Travels</b><br>' +
        'P.O. Box 420<br>' +
        'Barka Sanaiya, Sultanate of Oman,<br>' +
        'Tel : 0968-93977391<br>' +
        'Email : alreightravels@gmai.com</p>' +
        '</div>' +
        '</div>';
    let invoice_header = '<div class="bigword"><b>INVOICE</b></div>';
    invoice_header += '<div class="white_box_container">' +
        '<div class="white_box"><p><b>TO : </b>' + (passenger_name[0]) + '</p>' + '<p> &nbsp&nbsp&nbsp&nbsp&nbsp' + (contacts) + '</p>' + '</div>' +
        '<div class="white_box"><p><b>INVOICE NO :</b> ' + (invoice_number) + '</p><p> <b>AIRLINE :</b> ' + (airline) + ' </p><p><b>SECTOR : </b>' + (sector[0]) + '</p></div>' +
        '<div class="white_box"><p><b>DATE : </b>' + (date) + '</p><p><b>FROM : </b>' + (from) + '</p> <p><b>TO : </b>' + (to) + '</p></div>' +
        '</div>';

    //start mainbox
    const n = passenger_name.length;
    let tax = new Array();
    let total_amount = 0;
    let total_tax = 0;
    let total_service = 0;
    let total_basic = 0;

    for (var i = 0; i < n; i++) {
        tax[i] = ((parseFloat(service_tax[i]) * parseFloat(tax_percentage)) / 100).toFixed(2);
        total_tax += parseFloat(tax[i]);
        total_basic += parseFloat(basic_fair[i]);
        total_service += parseFloat(service_tax[i]);
        total_amount += parseFloat(basic_fair[i]) + parseFloat(service_tax[i]) + parseFloat(tax[i]);
    }
    let main = '<div class="mainbox">';
    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Sr No.</div>' +
        '<div class="words">';
    for (var i = 0; i < 2; i++) {
        main += (i + 1) + '.' + '<br><br>'
    }
    main += '</div></div></div> ';

    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Name</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (passenger_name[i]) + '<br><br>'
    }
    main += '<b>SUBTOTAL</b>' + '<br><br>';
    main += '</div></div> </div> ';

    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">PNR</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (pnr[i]) + '<br><br>'
    }
    main += '</div></div> </div> ';

    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Sector</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (sector[i]) + '<br><br>'
    }
    main += '</div></div> </div> ';

    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Basic Fair</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (parseFloat(basic_fair[i]).toFixed(2)) + '<br><br>'
    }
    main += '<b>' + parseFloat(total_basic).toFixed(2) + '</b>' + '<br><br>';
    main += '</div></div> </div> ';
    //service charge
    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Service Charges</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (parseFloat(service_tax[i]).toFixed(2)) + '<br><br>'
    }
    main += '<b>' + parseFloat(total_service).toFixed(2) + '</b>' + '<br><br>';
    main += '</div></div> </div> ';
    //tax
    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Tax Charges</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += (parseFloat(tax[i]).toFixed(2)) + '<br><br>'
    }
    main += '<b>' + parseFloat(total_tax).toFixed(2) + '</b>' + '<br><br>';
    main += '</div></div> </div> ';

    main += '<div class="column">' +
        '<div class="box">' +
        '<div class="box2">Amount</div>' +
        '<div class="words">';
    for (var i = 0; i < n; i++) {
        main += parseFloat(parseFloat(basic_fair[i]) + parseFloat(tax[i]) + parseFloat(service_tax[i])).toFixed(2) + '<br><br>'
    }
    main += '<b>' + (total_amount.toFixed(2)) + '</b>' + '<br><br>';
    main += '</div></div> </div> ';
    main += "</div>";
    //start amount to text write
    let amount_in_text = doConvertNumberToText(parseInt(total_amount));
    amount_in_text = amount_in_text.toUpperCase();
    amount_in_text = "OMR " + amount_in_text;
    let footer = '<div class="purple_box_container">' +
        '<div class="purple_box">' + (amount_in_text) + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp TOTAL&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + (total_amount) + '</div></div>';
    let branding = '<div class="word2_box_container">' +
        '<div class="word2_box">' +
        '<b>Alreigh Travels</b>' +
        '</div>' +
        '</div>';
    branding += '<div class="word3_box_container">' +
        '<div class="word3_box">' +
        '<p style="margin-top: 90px;">Receiver"s Signature</p>' +
        '</div>' +
        '<div class="word3_box">' +
        '<img src="sign.png" height="75px" width="75px">' +
        '<p>Sender Signature</p>' +
        '</div>' +
        '</div>';
    let term_n_conditions = '<div class="eightword_box_container">' +
        '<div class="eightword_box">' +
        '<b>Terms & Conditions :</b><br><br> ' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> ' +
        '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor.<br>' +
        '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.<br>' +
        '4. Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor.<br>' +
        '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.<br>' +
        '6. Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.<br>' +
        '7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.<br>' +
        '</div>' +
        '</div>';


    let theBody = header + invoice_header + main + footer + branding + term_n_conditions;
    let newWin = window.open('', '');

    newWin.document.write(style);
    newWin.document.write(theBody);
    newWin.print();
    newWin.close();

}
