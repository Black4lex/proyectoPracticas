var botonEliminar1 = document.getElementById("button_remove1");
var botonAgregar = document.getElementById("button_bones");
var songTitleF = document.getElementById("songTitleF");
var genYearF = document.getElementById("genYearF");
var artistF = document.getElementById("artistF");
var lista1 = document.getElementById("lista1");
var image1 = document.getElementById("firstImg");
var botonEliminar2 = document.getElementById("button_remove2");
var botonAgregar2 = document.getElementById("button_enemy");
var songTitleF2 = document.getElementById("songTitleF2");
var genYearF2 = document.getElementById("genYearF2");
var artistF2 = document.getElementById("artistF2");
var lista2 = document.getElementById("lista2");
var image2 = document.getElementById("firstImg2");
var botonEliminar3 = document.getElementById("button_remove3");
var botonAgregar3 = document.getElementById("button_wicked");
var songTitleF3 = document.getElementById("songTitleF3");
var genYearF3 = document.getElementById("genYearF3");
var artistF3 = document.getElementById("artistF3");
var lista3 = document.getElementById("lista3");
var image3 = document.getElementById("firstImg3");
var botonEliminar4 = document.getElementById("button_remove4");
var botonAgregar4 = document.getElementById("button_short");
var songTitleF4 = document.getElementById("songTitleF4");
var genYearF4 = document.getElementById("genYearF4");
var artistF4 = document.getElementById("artistF4");
var lista4 = document.getElementById("lista4");
var image4 = document.getElementById("firstImg4");
var botonEliminar5 = document.getElementById("button_remove5");
var botonAgregar5 = document.getElementById("button_stay");
var songTitleF5 = document.getElementById("songTitleF5");
var genYearF5 = document.getElementById("genYearF5");
var artistF5 = document.getElementById("artistF5");
var lista5 = document.getElementById("lista5");
var image5 = document.getElementById("firstImg5");
var botonEliminar6 = document.getElementById("button_remove6");
var botonAgregar6 = document.getElementById("button_musica");
var songTitleF6 = document.getElementById("songTitleF6");
var genYearF6 = document.getElementById("genYearF6");
var artistF6 = document.getElementById("artistF6");
var lista6 = document.getElementById("lista6");
var image6 = document.getElementById("firstImg6");
var boton, L1, L2, L3, L4, L5, L6;
var ocupado = 0;
var songTitle = [];
songTitle[0] = "Bones";
songTitle[1] = "Enemy";
songTitle[2] = "Ain't No Rest For The Wicked";
songTitle[3] = "Short Change Hero";
songTitle[4] = "Stay";
songTitle[5] = "De Musica Ligera";
var genYear = [];
genYear[0] = "Pop, 2022";
genYear[1] = "Pop Rock, 2021";
genYear[2] = "Rock Alternativo, 2008";
genYear[3] = "Alternativo, 2009";
genYear[4] = "Alternativo, 2014";
genYear[5] = "Rock en Español, 1990";
var artist = [];
artist[0] = "IMAGINE DRAGONS";
artist[1] = "IMAGINE DRAGONS Y J.I.D";
artist[2] = "CAGE THE ELEPHANT";
artist[3] = "THE HEAVY";
artist[4] = "30 SECONDS TO MARS";
artist[5] = "SODA STEREO";
var image = [];
image[0] = "https://i.scdn.co/image/ab67616d00004851813713582dcc508e7d5073c4";
image[1] = "https://i.scdn.co/image/ab67616d00004851aa597e50829169e6994eb403";
image[2] = "https://i.scdn.co/image/ab67616d00004851ce6b979ca98da4c27157dc17";
image[3] = "https://i.scdn.co/image/ab67616d00004851463986d828c59a03f2ab0a3f";
image[4] = "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968";
image[5] = "https://i.scdn.co/image/ab67616d00004851c451ed28353639e79b4d97d9";
var repetida = [];
repetida[0] = 0;
repetida[1] = 0;
repetida[2] = 0;
repetida[3] = 0;
repetida[4] = 0;
repetida[5] = 0;

lista1.style.visibility = "hidden";
lista2.style.visibility = "hidden";
lista3.style.visibility = "hidden";
lista4.style.visibility = "hidden";
lista5.style.visibility = "hidden";
lista6.style.visibility = "hidden";

botonAgregar.addEventListener("click", boton1);
botonAgregar2.addEventListener("click", boton2);
botonAgregar3.addEventListener("click", boton3);
botonAgregar4.addEventListener("click", boton4);
botonAgregar5.addEventListener("click", boton5);
botonAgregar6.addEventListener("click", boton6);
botonEliminar1.addEventListener("click", eliminar1);
botonEliminar2.addEventListener("click", eliminar2);
botonEliminar3.addEventListener("click", eliminar3);
botonEliminar4.addEventListener("click", eliminar4);
botonEliminar5.addEventListener("click", eliminar5);
botonEliminar6.addEventListener("click", eliminar6);

function boton1()
{
    if(repetida[0] == 0)
    {
        boton = 1;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}
function boton2()
{
    if(repetida[1] == 0)
    {
        boton = 2;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}
function boton3()
{
    if(repetida[2] == 0)
    {
        boton = 3;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}
function boton4()
{
    if(repetida[3] == 0)
    {
        boton = 4;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}
function boton5()
{
    if(repetida[4] == 0)
    {
        boton = 5;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}
function boton6()
{
    if(repetida[5] == 0)
    {
        boton = 6;
        ocupado += 1;
        agregarFavorito()
    }
    else
    {
        alert("ESTA CANCION YA ESTA EN FAVORITOS");
    }
}

function eliminar1()
{
    repetida[L1] = 0;
    if(ocupado >= 2)
    {
        songTitleF.innerHTML = songTitleF2.innerHTML;
        genYearF.innerHTML = genYearF2.innerHTML;
        artistF.innerHTML = artistF2.innerHTML;
        image1.src = image2.src;
        L1 = L2;

        if(ocupado >= 3)
        {
            songTitleF2.innerHTML = songTitleF3.innerHTML;
            genYearF2.innerHTML = genYearF3.innerHTML;
            artistF2.innerHTML = artistF3.innerHTML;
            image2.src = image3.src;
            lista3.style.visibility = "hidden";
            L2 = L3;

            if(ocupado >= 4)
            {
                lista3.style.visibility = "visible"
                songTitleF3.innerHTML = songTitleF4.innerHTML;
                genYearF3.innerHTML = genYearF4.innerHTML;
                artistF3.innerHTML = artistF4.innerHTML;
                image3.src = image4.src;
                lista4.style.visibility = "hidden";
                L3 = L4;
                    
                if(ocupado >= 5)
                {
                    lista4.style.visibility = "visible"
                    songTitleF4.innerHTML = songTitleF5.innerHTML;
                    genYearF4.innerHTML = genYearF5.innerHTML;
                    artistF4.innerHTML = artistF5.innerHTML;
                    image4.src = image5.src;
                    lista5.style.visibility = "hidden";
                    L4 = L5;

                    if(ocupado == 6)
                    {
                        lista5.style.visibility = "visible";
                        songTitleF5.innerHTML = songTitleF6.innerHTML;
                        genYearF5.innerHTML = genYearF6.innerHTML;
                        artistF5.innerHTML = artistF6.innerHTML;
                        image5.src = image6.src;
                        lista6.style.visibility = "hidden";
                        ocupado -= 1
                        L5 = L6;
                    }
                    else
                    {
                        ocupado -= 1;
                        lista5.style.visibility = "hidden";
                    }
                }
                else
                {
                    ocupado -= 1;
                    lista4.style.visibility = "hidden";
                }
            }
            else
            {
                ocupado -= 1;
                lista3.style.visibility = "hidden";
            }
        }
        else
        {
            ocupado -= 1;
            lista2.style.visibility = "hidden";
        }
    }
    else
    {
        ocupado -= 1;
        lista1.style.visibility = "hidden"
    }
}

function eliminar2()
{
    repetida[L2] = 0;
    if(ocupado >= 3)
    {
        songTitleF2.innerHTML = songTitleF3.innerHTML;
        genYearF2.innerHTML = genYearF3.innerHTML;
        artistF2.innerHTML = artistF3.innerHTML;
        image2.src = image3.src;
        lista3.style.visibility = "hidden";
        L2 = L3;   

        if(ocupado >= 4)
        {
            lista3.style.visibility = "visible"
            songTitleF3.innerHTML = songTitleF4.innerHTML;
            genYearF3.innerHTML = genYearF4.innerHTML;
            artistF3.innerHTML = artistF4.innerHTML;
            image3.src = image4.src;
            lista4.style.visibility = "hidden";
            L3 = L4;
                    
            if(ocupado >= 5)
            {
                lista4.style.visibility = "visible"
                songTitleF4.innerHTML = songTitleF5.innerHTML;
                genYearF4.innerHTML = genYearF5.innerHTML;
                artistF4.innerHTML = artistF5.innerHTML;
                image4.src = image5.src;
                lista5.style.visibility = "hidden";
                L4 = L5;

                if(ocupado == 6)
                {
                    lista5.style.visibility = "visible";
                    songTitleF5.innerHTML = songTitleF6.innerHTML;
                    genYearF5.innerHTML = genYearF6.innerHTML;
                    artistF5.innerHTML = artistF6.innerHTML;
                    image5.src = image6.src;
                    lista6.style.visibility = "hidden";
                    ocupado -= 1;
                    L5 = L6;
                }
                else
                {
                    ocupado -= 1;
                    lista5.style.visibility = "hidden"
                }
            }
            else
            {
                ocupado -= 1;
                lista4.style.visibility = "hidden"
            }
        }
        else
        {
            ocupado -= 1;
            lista3.style.visibility = "hidden"
        }
    }
    else
    {
        ocupado -= 1;
        lista2.style.visibility = "hidden";
    }
}
function eliminar3()
{
    repetida[L3] = 0;
    if(ocupado >= 4)
    {
        lista3.style.visibility = "visible"
        songTitleF3.innerHTML = songTitleF4.innerHTML;
        genYearF3.innerHTML = genYearF4.innerHTML;
        artistF3.innerHTML = artistF4.innerHTML;
        image3.src = image4.src;
        lista4.style.visibility = "hidden";
        L3 = L4;
                    
        if(ocupado >= 5)
        {
            lista4.style.visibility = "visible"
            songTitleF4.innerHTML = songTitleF5.innerHTML;
            genYearF4.innerHTML = genYearF5.innerHTML;
            artistF4.innerHTML = artistF5.innerHTML;
            image4.src = image5.src;
            lista5.style.visibility = "hidden";
            L4 = L5;

            if(ocupado == 6)
            {
                lista5.style.visibility = "visible";
                songTitleF5.innerHTML = songTitleF6.innerHTML;
                genYearF5.innerHTML = genYearF6.innerHTML;
                artistF5.innerHTML = artistF6.innerHTML;
                image5.src = image6.src;
                lista6.style.visibility = "hidden";
                ocupado -= 1;
                L5 = L6;
            }
            else
            {
                ocupado -= 1;
                lista5.style.visibility = "hidden"
            }
    
        }
        else
        {
            ocupado -= 1;
            lista4.style.visibility = "hidden"
        }
    }
    else
    {
        ocupado -= 1;
        lista3.style.visibility = "hidden"
    }
}

function eliminar4()
{
    repetida[L4] = 0;
    if(ocupado >= 5)
    {
        lista4.style.visibility = "visible"
        songTitleF4.innerHTML = songTitleF5.innerHTML;
        genYearF4.innerHTML = genYearF5.innerHTML;
        artistF4.innerHTML = artistF5.innerHTML;
        image4.src = image5.src;
        lista5.style.visibility = "hidden";
        L4 = L5;

        if(ocupado == 6)
        {
            lista5.style.visibility = "visible";
            songTitleF5.innerHTML = songTitleF6.innerHTML;
            genYearF5.innerHTML = genYearF6.innerHTML;
            artistF5.innerHTML = artistF6.innerHTML;
            image5.src = image6.src;
            lista6.style.visibility = "hidden";
            ocupado -= 1;
            L5 = L6;
        }
        else
        {
            ocupado -= 1;
            lista5.style.visibility = "hidden"
        }
    }
    else
    {
        ocupado -= 1;
        lista4.style.visibility = "hidden"
    }
}

function eliminar5()
{
    repetida[L5] = 0;
    if(ocupado == 6)
    {
        lista5.style.visibility = "visible";
        songTitleF5.innerHTML = songTitleF6.innerHTML;
        genYearF5.innerHTML = genYearF6.innerHTML;
        artistF5.innerHTML = artistF6.innerHTML;
        image5.src = image6.src;
        lista6.style.visibility = "hidden";
        ocupado -= 1;
        L5 = L6;
    }
    else
    {
        ocupado -= 1;
        lista5.style.visibility = "hidden"
    }
}

function eliminar6()
{
    repetida[L6] = 0;
    ocupado -= 1;
    lista6.style.visibility = "hidden";
}

function agregarFavorito()
{
    if(ocupado == 1)
    {
        if(boton == 1)
        {
            songTitleF.innerHTML = songTitle[0];
            genYearF.innerHTML = genYear[0];
            artistF.innerHTML = artist[0];
            image1.src = image[0];
            repetida[0] = 1;
            lista1.style.visibility = "visible";
            L1 = 0;
        }
        else if(boton == 2)
        {
            songTitleF.innerHTML = songTitle[1];
            genYearF.innerHTML = genYear[1];
            artistF.innerHTML = artist[1];
            image1.src = image[1];
            repetida[1] = 1;
            lista1.style.visibility = "visible";
            L1 = 1;
        }
        else if(boton == 3)
        {
            songTitleF.innerHTML = songTitle[2];
            genYearF.innerHTML = genYear[2];
            artistF.innerHTML = artist[2];
            image1.src = image[2];
            repetida[2] = 1;
            lista1.style.visibility = "visible";
            L1 = 2;
        }
        else if(boton == 4)
        {
            songTitleF.innerHTML = songTitle[3];
            genYearF.innerHTML = genYear[3];
            artistF.innerHTML = artist[3];
            image1.src = image[3];
            repetida[3] = 1;
            lista1.style.visibility = "visible";
            L1 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF.innerHTML = songTitle[4];
            genYearF.innerHTML = genYear[4];
            artistF.innerHTML = artist[4];
            image1.src = image[4];
            repetida[4] = 1;
            lista1.style.visibility = "visible";
            L1 = 4;
        }
        else if(boton == 6)
        {
            songTitleF.innerHTML = songTitle[5];
            genYearF.innerHTML = genYear[5];
            artistF.innerHTML = artist[5];
            image1.src = image[5];
            repetida[5] = 1;
            lista1.style.visibility = "visible";
            L1 = 5;
        }
    }
    if(ocupado == 2)
    {
        if(boton == 1)
        {
            songTitleF2.innerHTML = songTitle[0];
            genYearF2.innerHTML = genYear[0];
            artistF2.innerHTML = artist[0];
            image2.src = image[0];
            repetida[0] = 1;
            lista2.style.visibility = "visible";
            L2 = 0;
        }

        else if(boton == 2)
        {
            songTitleF2.innerHTML = songTitle[1];
            genYearF2.innerHTML = genYear[1];
            artistF2.innerHTML = artist[1];
            image2.src = image[1];
            repetida[1] = 1;
            lista2.style.visibility = "visible";
            L2 = 1;
        }
        else if(boton == 3)
        {
            songTitleF2.innerHTML = songTitle[2];
            genYearF2.innerHTML = genYear[2];
            artistF2.innerHTML = artist[2];
            image2.src = image[2];
            repetida[2] = 1;
            lista2.style.visibility = "visible";
            L2 = 2;
        }
        else if(boton == 4)
        {
            songTitleF2.innerHTML = songTitle[3];
            genYearF2.innerHTML = genYear[3];
            artistF2.innerHTML = artist[3];
            image2.src = image[3];
            repetida[3] = 1;
            lista2.style.visibility = "visible";
            L2 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF2.innerHTML = songTitle[4];
            genYearF2.innerHTML = genYear[4];
            artistF2.innerHTML = artist[4];
            image2.src = image[4];
            repetida[4] = 1;
            lista2.style.visibility = "visible";
            L2 = 4;
        }
        else if(boton == 6)
        {
            songTitleF2.innerHTML = songTitle[5];
            genYearF2.innerHTML = genYear[5];
            artistF2.innerHTML = artist[5];
            image2.src = image[5];
            repetida[5] = 1;
            lista2.style.visibility = "visible";
            L2 = 5;
        }
    }
    if(ocupado == 3)
    {
        if(boton == 1)
        {
            songTitleF3.innerHTML = songTitle[0];
            genYearF3.innerHTML = genYear[0];
            artistF3.innerHTML = artist[0];
            image3.src = image[0];
            repetida[0] = 1;
            lista3.style.visibility = "visible";
            L3 = 0;
        }

        else if(boton == 2)
        {
            songTitleF3.innerHTML = songTitle[1];
            genYearF3.innerHTML = genYear[1];
            artistF3.innerHTML = artist[1];
            image3.src = image[1];
            repetida[1] = 1;
            lista3.style.visibility = "visible";
            L3 = 1;
        }
        else if(boton == 3)
        {
            songTitleF3.innerHTML = songTitle[2];
            genYearF3.innerHTML = genYear[2];
            artistF3.innerHTML = artist[2];
            image3.src = image[2];
            repetida[2] = 1;
            lista3.style.visibility = "visible";
            L3 = 2;
        }
        else if(boton == 4)
        {
            songTitleF3.innerHTML = songTitle[3];
            genYearF3.innerHTML = genYear[3];
            artistF3.innerHTML = artist[3];
            image3.src = image[3];
            repetida[3] = 1;
            lista3.style.visibility = "visible";
            L3 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF3.innerHTML = songTitle[4];
            genYearF3.innerHTML = genYear[4];
            artistF3.innerHTML = artist[4];
            image3.src = image[4];
            repetida[4] = 1;
            lista3.style.visibility = "visible";
            L3 = 4;
        }
        else if(boton == 6)
        {
            songTitleF3.innerHTML = songTitle[5];
            genYearF3.innerHTML = genYear[5];
            artistF3.innerHTML = artist[5];
            image3.src = image[5];
            repetida[5] = 1;
            lista3.style.visibility = "visible";
            L3 = 5;
        }
    }
    if(ocupado == 4)
    {
        if(boton == 1)
        {
            songTitleF4.innerHTML = songTitle[0];
            genYearF4.innerHTML = genYear[0];
            artistF4.innerHTML = artist[0];
            image4.src = image[0];
            repetida[0] = 1;
            lista4.style.visibility = "visible";
            L4 = 0;
        }

        else if(boton == 2)
        {
            songTitleF4.innerHTML = songTitle[1];
            genYearF4.innerHTML = genYear[1];
            artistF4.innerHTML = artist[1];
            image4.src = image[1];
            repetida[1] = 1;
            lista4.style.visibility = "visible";
            L4 = 1;
        }
        else if(boton == 3)
        {
            songTitleF4.innerHTML = songTitle[2];
            genYearF4.innerHTML = genYear[2];
            artistF4.innerHTML = artist[2];
            image4.src = image[2];
            repetida[2] = 1;
            lista4.style.visibility = "visible";
            L4 = 2;
        }
        else if(boton == 4)
        {
            songTitleF4.innerHTML = songTitle[3];
            genYearF4.innerHTML = genYear[3];
            artistF4.innerHTML = artist[3];
            image4.src = image[3];
            repetida[3] = 1;
            lista4.style.visibility = "visible";
            L4 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF4.innerHTML = songTitle[4];
            genYearF4.innerHTML = genYear[4];
            artistF4.innerHTML = artist[4];
            image4.src = image[4];
            repetida[4] = 1;
            lista4.style.visibility = "visible";
            L4 = 4;
        }
        else if(boton == 6)
        {
            songTitleF4.innerHTML = songTitle[5];
            genYearF4.innerHTML = genYear[5];
            artistF4.innerHTML = artist[5];
            image4.src = image[5];
            repetida[5] = 1;
            lista4.style.visibility = "visible";
            L4 = 5;
        }
    }
    if(ocupado == 5)
    {
        if(boton == 1)
        {
            songTitleF5.innerHTML = songTitle[0];
            genYearF5.innerHTML = genYear[0];
            artistF5.innerHTML = artist[0];
            image5.src = image[0];
            repetida[0] = 1;
            lista5.style.visibility = "visible";
            L5 = 0;
        }

        else if(boton == 2)
        {
            songTitleF5.innerHTML = songTitle[1];
            genYearF5.innerHTML = genYear[1];
            artistF5.innerHTML = artist[1];
            image5.src = image[1];
            repetida[1] = 1;
            lista5.style.visibility = "visible";
            L5 = 1;
        }
        else if(boton == 3)
        {
            songTitleF5.innerHTML = songTitle[2];
            genYearF5.innerHTML = genYear[2];
            artistF5.innerHTML = artist[2];
            image5.src = image[2];
            repetida[2] = 1;
            lista5.style.visibility = "visible";
            L5 = 2;
        }
        else if(boton == 4)
        {
            songTitleF5.innerHTML = songTitle[3];
            genYearF5.innerHTML = genYear[3];
            artistF5.innerHTML = artist[3];
            image5.src = image[3];
            repetida[3] = 1;
            lista5.style.visibility = "visible";
            L5 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF5.innerHTML = songTitle[4];
            genYearF5.innerHTML = genYear[4];
            artistF5.innerHTML = artist[4];
            image5.src = image[4];
            repetida[4] = 1;
            lista5.style.visibility = "visible";
            L5 = 4;
        }
        else if(boton == 6)
        {
            songTitleF5.innerHTML = songTitle[5];
            genYearF5.innerHTML = genYear[5];
            artistF5.innerHTML = artist[5];
            image5.src = image[5];
            repetida[5] = 1;
            lista5.style.visibility = "visible";
            L5 = 5;
        }
    }
    if(ocupado == 6)
    {
        if(boton == 1)
        {
            songTitleF6.innerHTML = songTitle[0];
            genYearF6.innerHTML = genYear[0];
            artistF6.innerHTML = artist[0];
            image6.src = image[0];
            repetida[0] = 1;
            lista6.style.visibility = "visible";
            L6 = 0;
        }

        else if(boton == 2)
        {
            songTitleF6.innerHTML = songTitle[1];
            genYearF6.innerHTML = genYear[1];
            artistF6.innerHTML = artist[1];
            image6.src = image[1];
            repetida[1] = 1;
            lista6.style.visibility = "visible";
            L6 = 1;
        }
        else if(boton == 3)
        {
            songTitleF6.innerHTML = songTitle[2];
            genYearF6.innerHTML = genYear[2];
            artistF6.innerHTML = artist[2];
            image6.src = image[2];
            repetida[2] = 1;
            lista6.style.visibility = "visible";
            L6 = 2;
        }
        else if(boton == 4)
        {
            songTitleF6.innerHTML = songTitle[3];
            genYearF6.innerHTML = genYear[3];
            artistF6.innerHTML = artist[3];
            image6.src = image[3];
            repetida[3] = 1;
            lista6.style.visibility = "visible";
            L6 = 3;
        }
        else if(boton == 5)
        {   
            songTitleF6.innerHTML = songTitle[4];
            genYearF6.innerHTML = genYear[4];
            artistF6.innerHTML = artist[4];
            image6.src = image[4];
            repetida[4] = 1;
            lista6.style.visibility = "visible";
            L6 = 4;
        }
        else if(boton == 6)
        {
            songTitleF6.innerHTML = songTitle[5];
            genYearF6.innerHTML = genYear[5];
            artistF6.innerHTML = artist[5];
            image6.src = image[5];
            repetida[5] = 1;
            lista6.style.visibility = "visible";
            L6 = 5;
        }
    }
}
