function CekUlangFor(e) {
    
    event.preventDefault();

    var tampung = parseInt(document.getElementById("txtUlang").value);

    var i;

    var str = "";

    for (i = 1; i<= tampung; i++)
    {
        str = str + "Perulangan Ke : " +i+"<br>";
    }

    document.getElementById("hasilPerhitungan").innerHTML = str;
}


function bintang(e) {
    
    event.preventDefault();

    var tampung = parseInt(document.getElementById("txtBintang").value);

    var rows;
    for(var i=1; i <= rows; i++)
    {
     for(var j=1; j<=i; j++)
    {
      
      document.write('*');
     }
      document.write('<br />');
     }
    document.getElementById("hasil").innerHTML = str;
}