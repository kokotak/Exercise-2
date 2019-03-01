function periksaNilai()
{

    var tampung = document.getElementById("txtBilangan").value;

    var checking = parseInt(tampung);

if (checking <= 50) {
    alert("50 itu")
}

else{
    alert("lebih dari 100")

    if(checking == 50 && 75){
        alert("diantara 50 & 75")
    }
  }
}


function PeriksaUmur()
{
    var tampung  = document.getElementById("txtUmur").value;

    var cekdulu = parseInt(tampung);

    if(cekdulu > 17 && cekdulu < 40)
    {
        alert("Termasuk dewasa")
    }

    else {
        
        if(cekdulu > 40 || cekdulu < 100){
            alert("anda sudah uzur")
        }
    }
}

