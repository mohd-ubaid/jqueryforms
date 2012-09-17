/*
formatting types:

1: email
2: URL
3: No blank space
4: Phone number
5: Alpha numeric
6: Password match
7: check box numbers (min & max)
8: Date (min & max)
9: Hiding & Showing another field upon certain value (drop down and radio)
*/

function validateblank() {
    //validation of required field 
    var allInput = $('#divDisplayField').find('input[ismandatory="1"]'); //find inputs with ismandatory="1"
    for (var i = 0; i <= $(allInput).size() - 1; i++) {
        if ($(allInput[i]).val() == "")  //checks if the required field is blank.
        {
            var td = $(allInput[i]).parent();
            var inputfield = $(td).find('input');
            var spn = $(td).find('.msgclass');
            if ($(spn).size() == 0)
                $(td).append('<span class="msgclass"><br>' + $(allInput[i]).attr("blankmsg") + '</span>'); //apends a span to display the error message
            $(inputfield).addClass("errorfield");
        } //IF
    } //FOR

    //Validation for textarea as mandatory field
    var allInput = $('#divDisplayField').find('textarea[ismandatory="1"]'); //find inputs with ismandatory="1"
    for (var i = 0; i <= $(allInput).size() - 1; i++) {
        if ($(allInput[i]).val() == "")  //checks if the required field is blank.
        {
            var td = $(allInput[i]).parent();
            var spn = $(td).find('.msgclass');
            if ($(spn).size() == 0)
                $(td).append('<span class="msgclass"><br>' + $(allInput[i]).attr("blankmsg") + '</span>'); //apends a span to display the error message
        } //IF
    }

    var allCheckBox = $('#divDisplayField').find('input[validatecheckbox="1"]'); //find inputs with validatecheckbox="1"
    for (var i = 0; i <= $(allCheckBox).size() - 1; i++) {
        if ($(allCheckBox[i]).attr("checked") == false) //checks whether the checkbox is not checked
        {
            var td = $(allCheckBox[i]).parent();
            $(td).append('<span class="msgclass"><br><br>' + $(allCheckBox[i]).attr("blankmsg") + '</span>'); //apends a span to display the error message
        }
    } //for

    //validate checkbox list.
    var allCheckBoxList = $('#divDisplayField').find('table[validatecheckboxlist="1"]'); //find inputs with validatecheckboxlist="1"
    for (var i = 0; i <= $(allCheckBoxList).size() - 1; i++) {
        checkBoxTable = $(allCheckBoxList[i]);
        checkBoxInput = $(checkBoxTable).find("input");
        atleastOneSelected = false;
        for (ichk = 0; ichk < $(checkBoxInput).size(); ichk++) {
            if ($(checkBoxInput[ichk]).attr("checked") == true)//check for each checkboxlist atleast one item selected or not
                atleastOneSelected = true;
        } //for (ichk = 0; ichk < $(checkBoxInput).size(); ichk++)
        if (!atleastOneSelected) {
            var td = $(allCheckBoxList[i]).parent();
            $(td).append('<span class="msgclass" ><br>' + $(checkBoxTable).attr("blankmsg") + '</span>'); //apends a span to display the error message
        } // if (!atleastOneSelected)

    } //for
    var allRadioButton = $('#divDisplayField').find('input[validateradiobutton="1"]'); //find inputs with validatecheckbox="1"
    for (var i = 0; i <= $(allRadioButton).size() - 1; i++) {
        if ($(allRadioButton[i]).attr("checked") == false) //checks whether the checkbox is not checked
        {
            var td = $(allRadioButton[i]).parent();
            $(td).append('   <span class="msgclass"><br>' + $(allRadioButton[i]).attr("blankmsg") + '</span>'); //apends a span to display the error message
        }
    } //for

    //validate Radio Buttons
    var allRadioButtonList = $('#divDisplayField').find('table[validateradiobutton="1"]'); //find inputs with validateradiobutton="1"
    for (var i = 0; i <= $(allRadioButtonList).size() - 1; i++) {
        RadioButtonTable = $(allRadioButtonList[i]);
        RadioButtonInput = $(RadioButtonTable).find("input");
        atleastOneSelected = false;
        for (ichk = 0; ichk < $(RadioButtonInput).size(); ichk++) //check for each Radiobuttonlist atleast one item selected or not
        {
            if ($(RadioButtonInput[ichk]).attr("checked") == true)//checks whether radio button is checked
                atleastOneSelected = true;
        } //for (ichk = 0; ichk < $(RadioButtonInput).size(); ichk++) 
        if (!atleastOneSelected) {
            var td = $(allRadioButtonList[i]).parent();
            $(td).append('<span class="msgclass"><br>' + $(RadioButtonTable).attr("blankmsg") + '</span>')//apends a span to display the error message
        } //(!atleastOneSelected) 
    }

    //validate character limit.
    var allCharlim = $('#divDisplayField').find('input[validcharlimit="1"]'); //find inputs with validcharlimit="1"
    for (var i = 0; i <= $(allCharlim).size() - 1; i++) {
        var td = $(allCharlim[i]).parent();
        var max = $(allCharlim[i]).attr("maxlength");
        if ($(allCharlim[i]).val().length > max) // checks if the character limit of the input field is more than 10.
        {
            $(td).append('<span class="msgclass"><br>' + $(allCharlim[i]).attr("errormsg") + '</span>')//apends a span to display the error message
        } //IF
    } //FOR

    //validate richtextbox.
    var allRichtextbox = $('#divDisplayField').find('div[validaterichtextbox="1"]'); //find div with validaterichtextbox="1" 
    allTextArea = $(allRichtextbox).find('textarea');   //find text area
    var td = $(allRichtextbox[i]).parent();
    if ($(allTextArea[0]).val() == "") {
        $(td).append('<span class="msgclass"><br>' + $(allRichtextbox[i]).attr("blankmsg") + '</span>')//apends a span to display the error message
    } //if


    //datepicker validation

    var allDatPicker = $('#divDisplayField').find('input[validatepicker="1"]'); //find inputs with validate Date picker=1
    for (var i = 0; i <= $(allDatPicker).size() - 1; i++) {
        if ($(allDatPicker[i]).val() == "") {
            var td = $(allDatPicker[i]).parent();
            var inputfield = $(td).find('input');
            var spn = $(td).find('.msgclass');
            if ($(spn).size() == 0)
                $(td).append('<span class="msgclass"><br>' + $(allDatPicker[i]).attr("formattingmsg") + '</span>'); //apends a span to display the error message
            else
                $(spn[0]).html($(allDatPicker[i]).attr("formattingmsg")); // If the span exists the error message is displayed.
            $(inputfield).addClass("errorfield");

        }
    }


} //validate blank

// Function to display Error messages associated with the field.
function DoAction(x) {
    var td = $(x).parent(); // Finds the parent of DOM x.
    var inputfield = $(td).find('input');
    var spn = $(td).find('.msgclass'); //find msgclass
    if ($(spn).size() == 0)
        $(td).append('<span class="msgclass"><br>' + $(x).attr("formattingmsg") + '</span>'); // Appends a span to display the error essage.
    else
        $(spn[0]).html($(x).attr("formattingmsg")); // If the span exists the error message is displayed.
    $(inputfield).addClass("errorfield");
}

function validateformatting() {


    var allDrpDwnList = $('#divDisplayField').find('select[formattingtype="40"]'); //find inputs with formatting type="4"

    for (var i = 0; i <= $(allDrpDwnList).size() - 1; i++) {

        var DrpDwnLstBox = $(allDrpDwnList[i]); //get all dropdownlist items
        var DrpDwnLstBoxOpt = $(DrpDwnLstBox).find('option'); //get all options within an dropdownlist
        if ($(DrpDwnLstBoxOpt[0]).attr("selected") == true)
            DoAction(allDrpDwnList[i]);
    } //FOR


    var allListBox = $('#divDisplayField').find('select[formattingtype="41"]'); //find inputs with formatting type="4"

    for (var i = 0; i <= $(allListBox).size() - 1; i++) {
        var LstBox = $(allListBox[i]); //get all listboxes
        var LstBoxOpt = $(LstBox).find('option'); //get all options withion an listbox
        //check whether atleast one option is selected
        atleastOneSelected = false;
        for (ichk = 0; ichk < $(LstBoxOpt).size(); ichk++) {


            if ($(LstBoxOpt[ichk]).attr("selected") == true)
                atleastOneSelected = true;
        }

        if (!atleastOneSelected)
            DoAction(allListBox[i]);
    } //FOR

    var allSlider = $('#divDisplayField').find('div[formattingtype="50"]'); //Find  all inputs with formatting type="1"
    for (var i = 0; i <= $(allSlider).size() - 1; i++) {
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regular expression for Email declared.
        if (!email_regex.test($(allEmail[i]).val()))  // checks whether the email field satisfies the specified format.
        {
            DoAction(allEmail[i]);
        } //if
    } //for allemail


    // validate E-mail format
    var allEmail = $('#divDisplayField').find('input[formattingtype="1"]'); //Find  all inputs with formatting type="1"
    for (var i = 0; i <= $(allEmail).size() - 1; i++) {
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regular expression for Email declared.
        if (!email_regex.test($(allEmail[i]).val()) && ($(allEmail[i]).val() != ""))  // checks whether the email field satisfies the specified format.
        {
            DoAction(allEmail[i]);
        } //if
    } //for allemail

    // validate URl format.
    var allURL = $('#divDisplayField').find('input[formattingtype="2"]'); //find inputs with formatting type="2"
    for (var i = 0; i <= $(allURL).size() - 1; i++) {
        var url_regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; //regular expresion for URL
        if (!url_regex.test($(allURL[i]).val()) && ($(allURL[i]).val() != "")) // checks the format of thr URL
        {
            DoAction(allURL[i]);
        } //if
    } //for URL
    // validate phone number format
    var allPhoneNumber = $('#divDisplayField').find('input[formattingtype="3"]'); //find inputs with formatting type="3"
    for (var i = 0; i <= $(allPhoneNumber).size() - 1; i++) {
        var phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; //regular expression for phone number
        if (!phoneNumber.test($(allPhoneNumber[i]).val()) && ($(allPhoneNumber[i]).val() != "")) //checks the format of the phone number.
        {
            DoAction(allPhoneNumber[i]);
        } //IF
    } //FOR
    // validate Blank fields
    var allBlank = $('#divDisplayField').find('input[formattingtype="4"]'); //find inputs with formatting type="4"
    for (var i = 0; i <= $(allBlank).size() - 1; i++) {
        var blankExp = /\s/; //regular expression for blank
        if ((blankExp.test($(allBlank[i]).val()))) {
            DoAction(allBlank[i]);
        } //IF
    } //FOR

    // validate password format(Alphanumeric)
    var allPassword = $('#divDisplayField').find('input[formattingtype="5"]'); //find inputs with formatting type="5"
    for (var i = 0; i <= $(allPassword).size() - 1; i++) {
        //pass-/^[A-Za-z0-9!@#$%^&*()_]{6,15}$/i
        var password_regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm; // checks the format of the password
        if (!password_regex.test($(allPassword[i]).val()) && ($(allPassword[i]).val() != "")) {
            DoAction(allPassword[i]);
        } //IF
    } //FOR

    // Match two fields

    var compareTo = $('#divDisplayField').find('input[formattingtype="6"]'); //find inputs with formatting type="6"
    for (var i = 0; i <= $(compareTo).size() - 1; i++) {
        var compareControlId = $($(compareTo[i]).attr("comparecontrolid")); // specifies the field value that is to be matched.
        if ($(compareControlId) != null) {
            if ($(compareTo[i]).val() != $(compareControlId).val() && ($(compareTo[i]).val() != "" || $(compareControlId).val() != ""))  // checks if both the field match and  compare field is not blank
            {
                DoAction(compareTo[i]);

            } //if
        } //if
    } //for 

    //validate date

    var allDate = $('#divDisplayField').find('input[formattingtype="7"]'); //find inputs with formatting type="7"
    for (var i = 0; i <= $(allDate).size() - 1; i++) {
        var date_regex = /^(\d{1,2})([^\w\s]{1})(\d{1,2})\2?(\d{2}|\d{4})?$/; //regex for date format
        var currVal = $(allDate[i]).val();
        if ((date_regex.test($(allDate[i]).val())) || ($(allDate[i]).val() != "")) //checks whether DATE VALUE IS NULL OR EMPTY
        {
            if (!(date_regex.test($(allDate[i]).val()))) {
                DoAction(allDate[i]);
            } //if
        } //if
    } //FOR

    // validate currency
    var allCurrency = $('#divDisplayField').find('input[formattingtype="8"]'); //Find  all inputs with formatting type="8"
    for (var i = 0; i <= $(allCurrency).size() - 1; i++) {
        var currency_regex = /^(\d{1,10})(\.\d{2})?$/; // Regular expression for currency declared.
        if (!currency_regex.test($(allCurrency[i]).val()) && ($(allCurrency[i]).val() != ""))  // checks whether the currency field satisfies the specified format.
        {
            DoAction(allCurrency[i]);
        } //if
    } //for allcurrency

    // only Alphabets

    var allApha = $('#divDisplayField').find('input[formattingtype="9"]'); //Find  all inputs with formatting type="9"

    for (var i = 0; i <= $(allApha).size() - 1; i++) {
        // var alpha_regex = /^[a-zA-Z\d]*[a-zA-Z]+[a-zA-Z\d]*^; // Regular expression for only alphabets declared.
        var alpha_regex = /^[A-z]+$/;
        if (!alpha_regex.test($(allApha[i]).val()) && ($(allApha[i]).val() != ""))  // checks whether the text field satisfies the specified format.
        {
            DoAction(allApha[i]);
        } //if
    } //for allAplhabets

    //alphanumeric
    var allalphanumeric = $('#divDisplayField').find('input[formattingtype="10"]'); //find inputs with formatting type="10"
    for (var i = 0; i <= $(allalphanumeric).size() - 1; i++) {
        var alphanumeric_regex = /^[0-9a-zA-Z]+$/; //Regular expression for alphanumeric in password field
        if (!alphanumeric_regex.test($(allalphanumeric[i]).val()) && ($(allalphanumeric[i]).val() != "")) { // checks the format of the alphanumeric password
            DoAction(allalphanumeric[i]);
        } //IF
    } //FOR

    var allNumber = $('#divDisplayField').find('input[formattingtype="11"]'); //find inputs with formattingtype="1"
    for (var i = 0; i <= $(allNumber).size() - 1; i++) {
        //var td = $(allNumber[i]).parent();
        if (isNaN($(allNumber[i]).val())) //checks if the input field contains numbers.
        {
            DoAction(allNumber[i]);
            //  $(td).append('<span class="msgclass">' + $(allNumber[i]).attr("formattingmsg") + '</span>')//apends a span to display the error message
        } //IF
    } //FOR
} //validateformatting

function updatedisplay(e) {
    var count = $(e).find('option');
    for (var j = 0; j <= $(count).size(); j++) {
        var conid = $(count[j]).attr('showcontrolid');
        $(conid).hide();
    }
    var selectedvalue = $(e).val();
    var selected = $(e).find("option[value=" + selectedvalue + "]");
    var divshow = $(selected).attr('showcontrolid');
    $(divshow).show();
}
function validateme() {
    $('#divDisplayField .msgclass').remove(); //remove fields having class=msgclass
    $('#divDisplayField .errorfield').removeClass("errorfield"); //remove fields having bgcolor
    validateblank();
    validateformatting();
} //validateme

//show and hide on event
function updatestate(e) {
    $('#ddlstate option').hide();
    $('#ddlstate').find('.select').show();
    $('#ddlstate').find('.' + $(e).val()).show();
} //updatestate


