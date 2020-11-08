
// navigation Menu
function openNav() 
{
    document.getElementById("mySidenav").style.width = "100vw";
}
/* Set the width of the side navigation to 0 */
function closeNav() 
{
    document.getElementById("mySidenav").style.width = "0";
}


// TRIANGLE
function rotateTriangle()
{
    var triangle = document.getElementById('triimg');
    triangle.className = 'triimgrotate';
    document.getElementById("firstTurn").style.display = "none";
    document.getElementById("textvynos").style.display = "none";
    document.getElementById("secondTurn").style.display = "block";
    document.getElementById("textlikvidita").style.display = "block";
}

function rotateTriangleSecond()
{
    var triangle = document.getElementById('triimg');
    triangle.className = 'triimgrotatesecond';
    document.getElementById("secondTurn").style.display = "none";
    document.getElementById("textlikvidita").style.display = "none";
    document.getElementById("thirdTurn").style.display = "block";
    document.getElementById("textriziko").style.display = "block";
}

function rotateTriangleThird()
{
    var triangle = document.getElementById('triimg');
    triangle.className = 'triimgrotatethird';
    document.getElementById("thirdTurn").style.display = "none";
    document.getElementById("textriziko").style.display = "none";
    document.getElementById("firstTurn").style.display = "block";
    document.getElementById("textvynos").style.display = "block";
}


//cookies
function closeCookies()
{
    document.getElementById("cookies_bar").style.display = "none";
    localStorage.setItem("cookies_bar",true);
    localStorage.getItem("cookies_bar");
    document.cookie = "setted=true";
    document.cookie.indexOf("setted=true")!=-1
}



// // FUNCTION FOR DISPLAY FAQ ANSWERS

// var a;
// function openAnswer(a)
// {
//     var x = document.getElementById(a);
//     if (x.style.display ==="none" || x.style.display ==='')
//     {
//         x.style.display = "block";
//     }
//     else
//     {
//         x.style.display = "none";
//     }
// }



// FUNCTION FOR SPLATKOMER
function splatkomer(){
    var castka, urok, doba, splatka, urokZadani, urokPerMont, urokPerMontJedna, kumulUrok;
    // Get the value of inputs
    castka = document.getElementById("castka").value;
    urok = document.getElementById("urok").value;
    doba = document.getElementById("doba").value;

    urokZadani = urok;

    // vypocet procenta z uroku
    urok = urok/100;

    // mesicni urok
    urokPerMont = urok/12;


    // 1.05% z uroku  
    urokPerMontJedna = urokPerMont + 1;

    // pocet let * 12
    doba = doba*12;

    // nasledny urok 
    kumulUrok = urokPerMontJedna ** doba;   

    splatka = castka * urokPerMont * kumulUrok / (kumulUrok - 1);
    
    // zaokrouhleni na cela cisla
    splatka = Math.ceil(splatka);

    if(castka ==="" || urok ==="" || doba ==="")
    {
        document.getElementById("kolik").innerHTML = "Vyplňte prosím požadované údaje.";
        document.getElementById("kolik6").innerHTML = " 0 Kč";
    }
    else
    {
        document.getElementById("kolik").innerHTML = "Odhadovaná <br> měsíční splátka hypotéky při úroku <b>" + urokZadani +" % </b>:";
        document.getElementById("kolik6").innerHTML = splatka + " Kč";
    };   

    var x = document.getElementById("result");
    if (x.style.display ==="none" || x.style.display ==='')
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
};


// reference cards________________
    //_______________________________2 or 3->1
    function showMeFirstRef()
    {
        // swop panna
        document.getElementById("rpOne").style.display = "block";
        document.getElementById("rpTwo").style.display = "none";
        document.getElementById("rpThree").style.display = "none";
        // swop button
        document.getElementById("rbOne").style.display = "flex";
        document.getElementById("rbTwo").style.display = "none";
        document.getElementById("rbThree").style.display = "none";
        // swop card
        document.getElementById("rcOne").style.display = "block";
        document.getElementById("rcTwo").style.display = "none";
        document.getElementById("rcThree").style.display = "none";
    }
    //_______________________________1 or 3 ->2
    function showMeSecondRef()
    {
        // swop panna
        document.getElementById("rpOne").style.display = "none";
        document.getElementById("rpTwo").style.display = "block";
        document.getElementById("rpThree").style.display = "none";
        // swop button
        document.getElementById("rbOne").style.display = "none";
        document.getElementById("rbTwo").style.display = "flex";
        document.getElementById("rbThree").style.display = "none";
        // swop card
        document.getElementById("rcOne").style.display = "none";
        document.getElementById("rcTwo").style.display = "block";
        document.getElementById("rcThree").style.display = "none";
    }

    //_______________________________1 or 2->3
    function showMeThirdRef()
    {
        // swop panna
        document.getElementById("rpOne").style.display = "none";
        document.getElementById("rpTwo").style.display = "none";
        document.getElementById("rpThree").style.display = "block";
        // swop button
        document.getElementById("rbOne").style.display = "none";
        document.getElementById("rbTwo").style.display = "none";
        document.getElementById("rbThree").style.display = "flex";
        // swop card
        document.getElementById("rcOne").style.display = "none";
        document.getElementById("rcTwo").style.display = "none";
        document.getElementById("rcThree").style.display = "block";
    }      

// reference pro pc

function showMeFirstRefPC()
{
    // swop card
    document.getElementById("pcrefPojisteni").style.display = "block";
    document.getElementById("pcrefNemovitost").style.display = "none";
    document.getElementById("pcrefInvestice").style.display = "none";
    // swop button
    document.getElementById("pcrbOne").style.display = "flex";
    document.getElementById("pcrbTwo").style.display = "none";
    document.getElementById("pcrbThree").style.display = "none";
}

function showMeSecondRefPC()
{
    // swop card
    document.getElementById("pcrefPojisteni").style.display = "none";
    document.getElementById("pcrefNemovitost").style.display = "block";
    document.getElementById("pcrefInvestice").style.display = "none";
    // swop button
    document.getElementById("pcrbOne").style.display = "none";
    document.getElementById("pcrbTwo").style.display = "flex";
    document.getElementById("pcrbThree").style.display = "none";
}

function showMeThirdRefPC()
{
    // swop card
    document.getElementById("pcrefPojisteni").style.display = "none";
    document.getElementById("pcrefNemovitost").style.display = "none";
    document.getElementById("pcrefInvestice").style.display = "block";
    // swop button
    document.getElementById("pcrbOne").style.display = "none";
    document.getElementById("pcrbTwo").style.display = "none";
    document.getElementById("pcrbThree").style.display = "flex";
}
    


// INVESTICNI TROJUHELNIK__________________________________
// $('.turn').click(function() 
// {
//     $('.triimg').animate
//     (
//         { deg: 180 },
//         {
//         duration: 1200,
//         step: function(now) 
//         {
//             $(this).css({ transform: 'rotate(' + now + 'deg)' });
//         }
//         }
//     );
// });





//     $(".turn").click(function()
//     {
//         $(".turn").animate(
//             {
//             opacity: 0.5
//         });
//         $(".turn").transit({ rotate: '90deg'});
//         // $(".triimg").animate(
//         //     {
//         //         transform: rotate('-120deg')
//         //     }

//         // )
//     });
// });

















