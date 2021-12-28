// 1.	Paspaudus ant mygtuko, puslapyje esantis div atsiranda/pranyksta
$(document).ready(function () {
    $("#box1Button").click(function () {
        $("#box1").toggle();
    });
});

// 2.	Turit vieną div, su aukščiu,pločiu ir spalva bei 4 mygtukus, su kuriais galit valdyt sukurto div savybes: plotis, aukstis, centravimas ir pozicija
$(document).ready(function () {
    $("#button1").click(function () {
        $(".box2").toggleClass("box2width");
    });
    $("#button2").click(function () {
        $(".box2").toggleClass("box2height");
    });
    $("#button3").click(function () {
        $(".box2").toggleClass("box2center");
    });
    $("#button4").click(function () {
        $(".box2").toggleClass("box2position");
    });
});

// 3.	Burgeris ir šoninis Meniu - paspaudus ant burgerio gražiai išvažiuoja šoninis meniu.
$(document).ready(function () {
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });
    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});

// 4.	Bent 4 div elementai, pradžioje visi juodos spalvos, paspaudus bent ant vieno iš jų, yra pakeičiamos spalvos visiems. Spalvos generuojamos random.

$(document).ready(function () {
    $("#randomColorContainer div").click(function(){
    let back = ['red','blue','green','yellow','cyan','orange'];
    let rand = back[Math.floor(Math.random() * back.length)];
    let rand1 = back[Math.floor(Math.random() * back.length)];
    let rand2 = back[Math.floor(Math.random() * back.length)];
    let rand3 = back[Math.floor(Math.random() * back.length)];

        $(".box3").css('background',rand);
        $(".box4").css('background',rand1);
        $(".box5").css('background',rand2);
        $(".box6").css('background',rand3);
    })
  });

//   5.	Formoje pildoma "vardas", "pavardė" ir "gimimo data". Duomneys kaupiami lentelėje. Stulpeliai: Eil. Nr., Vardas, Pavardė, Amžius.

$(document).ready(function(){
    const data = [];
    $("#submit").click(function(e){
        e.preventDefault();
        let firstName = $("input[name=firstName]").val();
        let lastName = $("input[name=lastName]").val();
        let age = $("input[name=age]").val();
        if (!firstName || !lastName || !age) {
            return alert("uzpildykite laukelius")            
        }
        let user = firstName+", "+lastName+", "+age;
        data.push(user);
        console.log(user);
        $("input[name=firstName]").val('');
        $("input[name=lastName]").val('');
        $("input[name=age]").val('');
        $("#list").empty();
        for(let i=0;i<data.length; i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
    });
});
