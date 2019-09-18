function myFunction() {
    var message,message1,message2,message3,message4,x,y,a,b;
    message = document.getElementById("p01");
    message1 = document.getElementById("p02");
    message2 = document.getElementById("p04");
    // message = document.getElementById("p04");
    message.innerHTML = "";
    message1.innerHTML = "";
    message2.innerHTML = "";
    

    x = document.getElementById("Name").value;
    y = document.getElementById("LastName").value;
    b = document.getElementById("TuitionFees").value;
    
    // a = document.getElementById("DateOfTime").value;
    // b = document.getElementById("TuitionFees").value;

try { 
    if(x == "")  throw "empty";
    if(!isNaN(x)) throw "not a character";
    x = String(x);
    if(x.length < 3)  throw "shorter than 3 characters ";
    if(x.length > 8)   throw "longer than 8 characters ";
    }
    catch(err) {
    message.innerHTML = "*Input is " + err;
    }
try { 
    if(y == "")  throw "empty";
    if(!isNaN(y)) throw "not a character";
    y = String(y);
    if(y.length < 4)  throw "shorter than 4 characters ";
    if(y.length > 11)   throw "longer than 11 characters ";
    }
    catch(err)
    {
    message1.innerHTML = "*Input is " + err;
    }   
// try { 
//     if(a == "")  throw "empty";
//     if(isNaN(a)) throw "not a number";
//     a = Date(a);
//     }
//     catch(err) {
//     message.innerHTML = "*Input is " + err;
//     }
try { 
    if(b == "")  throw "empty";
    if(isNaN(b)) throw "not a number";
    b = Number(b);
    if(b.length < 4)  throw "shorter than 4 numbers ";
    }
    catch(err) {
    message2.innerHTML = "*Input is " + err;
    }
}

function myFunction1() {
    var message,message1,message2,message3,message4,x,y,a,b;
    message = document.getElementById("p01");
    message1 = document.getElementById("p02");
    // message2 = document.getElementById("p04");
    // message = document.getElementById("p04");
    message.innerHTML = "";
    message1.innerHTML = "";
    // message2.innerHTML = "";
    

    x = document.getElementById("Title").value;
    y = document.getElementById("Stream").value;
    // b = document.getElementById("TuitionFees").value;
    
    // a = document.getElementById("DateOfTime").value;
    // b = document.getElementById("TuitionFees").value;

try { 
    if(x == "")  throw "empty";
    if(!isNaN(x)) throw "not a character";
    x = String(x);
    if(x.length < 2)  throw "shorter than 2 characters ";
    if(x.length > 8)   throw "longer than 8 characters ";
    }
    catch(err) {
    message.innerHTML = "*Input is " + err;
    }
try { 
    if(y == "")  throw "empty";
    if(!isNaN(y)) throw "not a character";
    y = String(y);
    if(y.length < 3)  throw "shorter than 3 characters ";
    if(y.length > 11)   throw "longer than 11 characters ";
    }
    catch(err)
    {
    message1.innerHTML = "*Input is " + err;
    }   
// try { 
//     if(a == "")  throw "empty";
//     if(isNaN(a)) throw "not a number";
//     a = Date(a);
//     }
//     catch(err) {
//     message.innerHTML = "*Input is " + err;
//     }
// try { 
//     if(b == "")  throw "empty";
//     if(isNaN(b)) throw "not a number";
//     b = Number(b);
//     if(b.length < 4)  throw "shorter than 4 numbers ";
//     }
//     catch(err) {
//     message2.innerHTML = "*Input is " + err;
//     }
}

function myFunction2() {
    var message,message1,message2,message3,message4,x,y,a,b;
    message = document.getElementById("p01");
    message1 = document.getElementById("p02");
    message2 = document.getElementById("p03");


    // message2 = document.getElementById("p04");
    // message = document.getElementById("p04");
    message.innerHTML = "";
    message1.innerHTML = "";
    message2.innerHTML = "";
    

    x = document.getElementById("FirstName").value;
    y = document.getElementById("LastName").value;
    b = document.getElementById("Subject").value;
    

try { 
    if(x == "")  throw "empty";
    if(!isNaN(x)) throw "not a character";
    x = String(x);
    if(x.length < 2)  throw "shorter than 2 characters ";
    if(x.length > 8)   throw "longer than 8 characters ";
    }
    catch(err) {
    message.innerHTML = "*Input is " + err;
    }
try { 
    if(y == "")  throw "empty";
    if(!isNaN(y)) throw "not a character";
    y = String(y);
    if(y.length < 3)  throw "shorter than 3 characters ";
    if(y.length > 11)   throw "longer than 11 characters ";
    }
    catch(err)
    {
    message1.innerHTML = "*Input is " + err;
    }   
// try { 
//     if(a == "")  throw "empty";
//     if(isNaN(a)) throw "not a number";
//     a = Date(a);
//     }
//     catch(err) {
//     message.innerHTML = "*Input is " + err;
//     }
try { 
    if(b == "")  throw "empty";
    if(!isNaN(b)) throw "not a character";
    b = String(b);
    if(b.length < 2)  throw "shorter than 2 characters ";
    if(b.length > 8)   throw "longer than 8 characters ";
    }
    catch(err) {
    message2.innerHTML = "*Input is " + err;
    }
}

function myFunction3() {
    var message,message1,message2,message3,message4,x,y,a,b,c;
    message = document.getElementById("p01");
    message1 = document.getElementById("p02");
    message3 = document.getElementById("p04");
    message4 = document.getElementById("p05");
    // message = document.getElementById("p04");
    message.innerHTML = "";
    message1.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "";
    

    x = document.getElementById("Title").value;
    y = document.getElementById("Description").value;
    // a=document.getElementById("SubDateTime").value;
    b = document.getElementById("OralMark").value;
    c = document.getElementById("OralMark").value;
    
    // a = document.getElementById("DateOfTime").value;
    // b = document.getElementById("TuitionFees").value;

try { 
    if(x == "")  throw "empty";
    if(!isNaN(x)) throw "not a character";
    x = String(x);
    if(x.length < 3)  throw "shorter than 3 characters ";
    if(x.length > 8)   throw "longer than 8 characters ";
    }
    catch(err) {
    message.innerHTML = "*Input is " + err;
    }

try { 
    if(y == "")  throw "empty";
    if(!isNaN(y)) throw "not a character";
    y = String(y);
    if(y.length < 4)  throw "shorter than 4 characters ";
    if(y.length > 11)   throw "longer than 11 characters ";
    }
    catch(err)
    {
    message1.innerHTML = "*Input is " + err;
    }   
// try { 
//     if(a == "")  throw "empty";
//     if(isNaN(a)) throw "not a number";
//     a = Date(a);
//     }
//     catch(err) {
//     message.innerHTML = "*Input is " + err;
//     }
try { 
    if(b == "")  throw "empty";
    if(isNaN(b)) throw "not a number";
    b = Number(b);
    if(b.length < 4)  throw "shorter than 4 numbers ";
    }
    catch(err) {
    message3.innerHTML = "*Input is " + err;
    }

    try { 
        if(c == "")  throw "empty";
        if(isNaN(c)) throw "not a number";
        c = Number(c);
        if(c.length < 4)  throw "shorter than 4 numbers ";
        }
        catch(err) {
        message4.innerHTML = "*Input is " + err;
        }
}

$(document).ready(function(){

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
         } 
    });
    }

});

$(document).ready(function(){
$('#Title').on('input', function () {
 
    for (let i = 0; i < $(this).val().length; i++) {
    
    if (!isNaN($(this).val().charAt(i))) {
    
    $(this).val($(this).val().slice(0, -1));
    }
    }
    
    });
});

$(document).ready(function(){
    $('#Name').on('input', function () {
     
        for (let i = 0; i < $(this).val().length; i++) {
        
        if (!isNaN($(this).val().charAt(i))) {
        
        $(this).val($(this).val().slice(0, -1));
        }
        }
        
        });
    });

    $(document).ready(function(){
        $('#LastName').on('input', function () {
         
            for (let i = 0; i < $(this).val().length; i++) {
            
            if (!isNaN($(this).val().charAt(i))) {
            
            $(this).val($(this).val().slice(0, -1));
            }
            }
            
            });
        });

    $(document).ready(function(){
    $('#Stream').on('input', function () {
        
        for (let i = 0; i < $(this).val().length; i++) {
        
        if (!isNaN($(this).val().charAt(i))) {
            
        $(this).val($(this).val().slice(0, -1));
        }
        }
        
        });
    });

    $(document).ready(function(){
        $('#Description').on('input', function () {
         
            for (let i = 0; i < $(this).val().length; i++) {
            
            if (!isNaN($(this).val().charAt(i))) {
            
            $(this).val($(this).val().slice(0, -1));
            }
            }
            
            });
        });

        $(document).ready(function(){
        $('#addCourse #StartingDate').on('input', function () {

            if($(this).val() > $('#addCourse #EndingDate').val()) {
    
            $('#addCourse #EndingDate').val($(this).val());
    
            }
    
            });
    
    
            $('#addCourse #EndingDate').on('input', function () {
    
            if ($(this).val() <= $('#addCourse #StartingDate').val()) {
            alert('End Date cannot be earlier than Start Date!');
            $(this).val($('#addCourse #StartingDate').val());
            }
            });
        });

        
        $(document).ready(function(){
            // Activate Carousel
            $("#myCarousel").carousel();
              
            // Enable Carousel Indicators
            $(".item1").click(function(){
              $("#myCarousel").carousel(0);
            });
            $(".item2").click(function(){
              $("#myCarousel").carousel(1);
            });
            $(".item3").click(function(){
              $("#myCarousel").carousel(2);
            });
              
            $(".carousel-control-prev").click(function(){
              $("#myCarousel").carousel("prev");
            });
            $(".carousel-control-next").click(function(){
              $("#myCarousel").carousel("next");
            });
          
          });
        