n = 0; //used wen no. of colmns in div=3
m = 0; //used wen no. of colmns in div=2
function setstyle(mystyle) {
    var colmns = $('#divDisplayField').attr("colmns");
    if (colmns == 3) {
        if (mystyle == 1) {
            if (n == 0) {
                stylestring = "field100";
                return stylestring;
            } //if (n == 0)
            if (n == 1) {
                n = 0;
                stylestring = "field67";
                return stylestring;
            } //if (n == 1)
            if (n == 2) {
                n = 0;
                stylestring = "field33";
                return stylestring;
            }
        } // if (style == true)
        else {
            if (n == 2)
                n = 0;
            else n++;
            stylestring = "field33";
            return stylestring;
        } // else i.e. style!= true
    } //if (colmns==3)
    if (colmns == 2) {
        if (mystyle == 1) {
            if (m == 0) {
                stylestring = "field100";
                return stylestring;
            } //if (m==0)
            if (m == 1) {
                stylestring = "field50";
                m = 0;
                return stylestring;
            } //if (m==0)
        } //if (mystyle==1)
        if (mystyle == 0) {
            if (m == 0) {
                stylestring = "field50";
                m = 1;
                return stylestring;
            } //if (m == 0) 
            else {
                stylestring = "field50";
                m = 0;
                return stylestring;
            }
        } //if (mystyle == 0) 

    } //if (colmns == 2) 
} //function setstyle

//add textbox
function addtextbox(label, dbfieldname, ismandatory, blankmsg, formattingtype, formattingmsg, comparecontrolid, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><input type="text" id="' + dbfieldname + '" dbfieldname="' + dbfieldname + '" blankmsg="' + blankmsg + '"  ismandatory="' + ismandatory + '" formattingtype="' + formattingtype + '" formattingmsg="' + formattingmsg + '" comparecontrolid="#' + comparecontrolid + '"/></div>');
}

//add password
function addpassword(label, dbfieldname, ismandatory, blankmsg, formattingtype, formattingmsg, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><input type="password" id="' + dbfieldname + '" dbfieldname="' + dbfieldname + '" blankmsg="' + blankmsg + '"  ismandatory="' + ismandatory + '" formattingtype="' + formattingtype + '" formattingmsg="' + formattingmsg + '" /></div>');
}

//add textarea
function addtextarea(label, dbfieldname, ismandatory, blankmsg, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><textarea dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '" ismandatory="' + ismandatory + '" blankmsg="' + blankmsg + '"></textarea></div>');
}

//add checkbox
function addcheckbox(label, dbfieldname, ismandatory, blankmsg, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><input validatecheckbox="' + ismandatory + '" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '" blankmsg="' + blankmsg + '" type="checkbox"   /></div>');
}

//add radiobutton
function addradiobutton(label, id, ismandatory, blankmsg, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><input validateradiobutton="' + ismandatory + '"  id="' + id + '" blankmsg="' + blankmsg + '" type="radio" /></div>');
}

//add radiobuttonlist
function addradiobuttonlist(label, dbfieldname, ismandatory, blankmsg, items, values, style) {
    if (values == null)
        values = items;
    if (ismandatory == null)
        ismandatory = 0;
    var table = '<table  validateradiobutton="' + ismandatory + '" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '"  blankmsg="' + blankmsg + '">';
    var k = items.length;
    for (i = 0; i < k; i++)
        table = table + ('<tr><td><input type="radio" name="+ label+" value="' + values[i] + '"/>' + items[i] + '</td></tr>');
    table = table + '</table>';
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label>' + table + '</div>');
}

//add checkboxlist
function addcheckboxlist(label, dbfieldname, ismandatory, blankmsg, items, values, style) {
    if (values == null)
        values = items;
    if (ismandatory == null)
        ismandatory = 0;
    var table = '<table validatecheckboxlist="' + ismandatory + '" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '"  blankmsg="' + blankmsg + '">';
    var k = items.length;
    for (i = 0; i < k; i++)
        table = table + ('<tr><td><input type="checkbox" value="' + values[i] + '"/><label>' + items[i] + '</label></td></tr>');
    table = table + '</table>';
    $("div#divDisplayField").append('<div class="' + setstyle(style) + ' checkboxlist"><label>' + label + '</label>' + table + '</div>');
}

//add checkboxlist single select
function addcheckboxlistsingleselect(label, dbfieldname, ismandatory, blankmsg, items, values, style) {
    if (values == null)
        values = items;
    if (ismandatory == null)
        ismandatory = 0;
    var table = '<table validatecheckboxlist="' + ismandatory + '" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '"  blankmsg="' + blankmsg + '">';
    var k = items.length;
    for (i = 0; i < k; i++)
        table = table + ('<tr><td><input class="unique" type="checkbox" value="' + values[i] + '"/><label>' + items[i] + '</label></td></tr>');
    table = table + '</table>';
    $("div#divDisplayField").append('<div class="' + setstyle(style) + ' checkboxlist"><label>' + label + '</label>' + table + '</div>');
}

//add dropdownlist
function adddropdownlist(label, dbfieldname, formattingtype, formattingmsg, items, values, style) {
    if (values == null)
        values = items;
    var select = '<select formattingtype="' + formattingtype + '" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '"  formattingmsg="' + formattingmsg + '">';
    var k = items.length;
    for (i = 0; i < k; i++)
        select = select + ('<option value="' + values[i] + '">' + items[i] + '</option>');
    select = select + '</select>';
    $("div#divDisplayField").append('<div class="' + setstyle(style) + ' selectlist"><label>' + label + '</label>' + select + '</div>');
}

//add listbox
function addlistbox(label, dbfieldname, formattingtype, formattingmsg, items, values, style) {
    if (values == null)
        values = items;
    var select = '<select multiple="multiple" dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '" formattingtype="' + formattingtype + '" formattingmsg="' + formattingmsg + '">';
    var k = items.length;
    for (i = 0; i < k; i++)
        select = select + ('<option value="' + values[i] + '">' + items[i] + '</option>');
    select = select + '</select>';
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label>' + select + '</div>');
}

//add datepicker
function adddatepicker(label, dbfieldname, ismandatory, blankmsg, formattingtype, formattingmsg, style) {
    if (ismandatory == null)
        ismandatory = 0;
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><input dbfieldname="' + dbfieldname + '" id="' + dbfieldname + '" ismandatory="' + ismandatory + '" blankmsg="' + blankmsg + '" type="text" formattingtype="' + formattingtype + '" formattingmsg="' + formattingmsg + '" name="date" class="tcal" /></div>')
}

//add captcha (hw to validate captcha?)
function addcaptcha(label, style) {
    $("div#divDisplayField").append('<div class="' + setstyle(style) + '"><label>' + label + '</label><br><input type="text" id="defaultReal" name="defaultReal" /></div>');
    $(function () {
        $('#defaultReal').realperson();
    });
}

