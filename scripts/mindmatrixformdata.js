var formdata = {
    getmydata: function (e) {
        var json = "";
        var allfields = $(e).find('input[type="text"]');
        for (var i = 0; i <= $(allfields).size() - 1; i++) {
            if (json.length > 0) json += ",";
            json += "'" + $(allfields[i]).attr('dbfieldname') + "':'" + $(allfields[i]).val() + "'";
        }
        var allpasswords = $(e).find('input[type="password"]');
        for (var i = 0; i <= $(allpasswords).size() - 1; i++) {
            if (json.length > 0) json += ",";
            json += "'" + $(allpasswords[i]).attr('dbfieldname') + "':'" + $(allpasswords[i]).val() + "'";
        }

        var alltextarea = $(e).find('textarea');
        for (var i = 0; i <= $(alltextarea).size() - 1; i++) {
            if (json.length > 0) json += ",";
            json += "'" + $(alltextarea[i]).attr('dbfieldname') + "':'" + $(alltextarea[i]).val() + "'";
        }

        var allCheckBox = $(e).find('input[validatecheckbox="1"]');
        for (var i = 0; i <= $(allCheckBox).size() - 1; i++) {
            checkBox = $(allCheckBox[i]);
            checkBoxIn = $(allCheckBox).find('input[type="checkbox"]');
            if (json.length > 0)
                json += ",";
            if ($(allCheckBox[i]).attr("checked") == true) {
                json += "'" + $(allCheckBox[i]).attr('dbfieldname') + "':'true'";
            }
            else
                json += "'" + $(allCheckBox[i]).attr('dbfieldname') + "':'false'";
        }

        var allCheckBoxList = $('#divDisplayField').find('table[validatecheckboxlist="1"]'); //find inputs with validatecheckboxlist="1"
        for (var i = 0; i <= $(allCheckBoxList).size() - 1; i++) {
            checkBoxTable = $(allCheckBoxList[i]);
            checkBoxInput = $(checkBoxTable).find("input");
            strSelectedValues = "";
            for (ichk = 0; ichk < $(checkBoxInput).size(); ichk++) {
                if ($(checkBoxInput[ichk]).attr("checked") == true)//check for each checkboxlist atleast one item selected or not
                {
                    if (strSelectedValues == "") {
                        strSelectedValues = $(checkBoxInput[ichk]).attr("value");
                    }
                    else
                        strSelectedValues = strSelectedValues + "," + $(checkBoxInput[ichk]).attr("value");
                }
            } //for (ichk = 0; ichk < $(checkBoxInput).size(); ichk++)
            if (json.length > 0) json += ",";
            json += "'" + $(allCheckBoxList[i]).attr('dbfieldname') + "':'" + strSelectedValues + "'";
        } //allcheckboxlist

        var allRadioButtonList = $('#divDisplayField').find('table[validateradiobutton="1"]'); //find inputs with validateradiobutton="1"
        for (var i = 0; i <= $(allRadioButtonList).size() - 1; i++) {
            RadioButtonTable = $(allRadioButtonList[i]);
            RadioButtonInput = $(RadioButtonTable).find("input");
            strSelectedValues = 0;
            for (ichk = 0; ichk < $(RadioButtonInput).size(); ichk++) //check for each Radiobuttonlist atleast one item selected or not
            {
                if ($(RadioButtonInput).size() == 1) {
                    strSelectedValues = 1;
                    if (json.length > 0) json += ",";
                    json += "'" + $(allRadioButtonList[i]).attr('dbfieldname') + "':'" + $(RadioButtonInput[ichk]).attr("checked") + "'";
                }
                else if ($(RadioButtonInput[ichk]).attr("checked") == true)//checks whether radio button is checked
                {
                    strSelectedValues = 1;
                    if (json.length > 0) json += ",";
                    json += "'" + $(allRadioButtonList[i]).attr('dbfieldname') + "':'" + $(RadioButtonInput[ichk]).attr("value") + "'";
                } //($(RadioButtonInput[ichk]).attr("checked") == true)
            } //for (ichk = 0; ichk < $(RadioButtonInput).size(); ichk++) 
            if (strSelectedValues == 0) {
                if (json.length > 0) json += ",";
                json += "'" + $(allRadioButtonList[i]).attr('dbfieldname') + "':'" + "" + "'";
            } //(strSelectedValues == 0)
        } //for (var i = 0; i <= $(allRadioButton).size() - 1; i++) 

        var allDropdown = $('#divDisplayField').find('select[formattingtype="40"]'); //find inputs with validatedropdown="1"
        for (var i = 0; i <= $(allDropdown).size() - 1; i++) {
            {
                if (json.length > 0) json += ",";
                json += "'" + $(allDropdown[i]).attr('dbfieldname') + "':'" + $(allDropdown[i]).val() + "'";
            } //IF
        } //for

        var allListBox = $('#divDisplayField').find('select[formattingtype="41"]');
        for (i = 0; i <= $(allListBox).size() - 1; i++) {
            ListboxTable = $(allListBox[i]);
            ListboxOption = $(ListboxTable).find("option");
            strSelectedValues = "";
            //   alert($(ListboxOption).size());
            for (ichk = 0; ichk < $(ListboxOption).size(); ichk++) {
                if ($(ListboxOption[ichk]).attr("selected") == true) {
                    if (strSelectedValues == "") {
                        strSelectedValues = $(ListboxOption[ichk]).attr("value");
                    } //if
                    else
                        strSelectedValues = strSelectedValues + "," + $(ListboxOption[ichk]).attr("value");
                } //if
            } //for ichk
            if (json.length > 0) json += ",";
            json += "'" + $(allListBox[i]).attr('dbfieldname') + "':'" + strSelectedValues + "'";
        }

        alert(json);
        // Mindmatrix.webform.View.Controls.formdata.savedata("{" + json + "}", formdata.success, formdata.failed);
    },
    success: function (val) {
        alert(val);
    },
    failed: function (val) {

    }
}
