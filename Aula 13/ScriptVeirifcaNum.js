Type: onChange
Field: u_phone_number
Script:
function onChange(control, oldValue, newValue, isLoading) { 
 if (isLoading || newValue == '') {
return;
 }
 var tempValue = newValue;
 //Use Regular Expressions to verify number
 var phoneRegex1 = /^\d{3}-\d{3}-\d{4}$/;
 var phoneRegex2 = /^(800|866|877)/;
 var phoneRegex3 = /^(1{3}-1{3}-1{4}|2{3}-2{3}-2{4}|3{3}-3{3}-3{4}|4{3}-4{3}-4{4}|5{3}-5{3}-5{4}|6{3}-6{3}-6{4}|7{3}-7{3}-7{4}|8{3}-8{3}-8{4}|9{3}-9{3}-9{4}|0{3}-0{3}-0{4})$/;
 
 if (tempValue.match(phoneRegex1) && !tempValue.match(phoneRegex2) && !tempValue.match(phoneRegex3)) {
return;
 }
 else {
g_form.setValue('mobile_number', '');
alert('Phone number must be in format XXX-XXX-XXXX and must not start with 800, 866, or 877.');
 }
}

/*https://www.servicenowelite.com/blog/2014/2/19/client-scripts-examples
