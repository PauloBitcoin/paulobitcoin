$(document).ready(function () {
    $(function () {

        var username = '@PauloBitcoin';
        Nome = 'Paulo Bitcoin';
        Legenda = 'Todos os meus links✨';
        Texto_Bio = 'Seja bem-vindo(a), fique a vontade e volte sempre!😊';
        Cor_Tema = '#ee1d52';
        Foto_Perfil = 'images/logo.png';
        Nome_Foto_Perfil = 'Foto do perfil';
        Titulo_Da_Pub = 'Conheça!';
        Texto_Da_Pub = '';
        Link_Pub = 'https://www.ttkapp.tk/';
        Banner = 'images/pub.png';
        Video_Youtube = '';

        //videos/pub.mp4
        Video = '';

        Icone_Botao_Especial = 'fa-solid fa-file-video';
        Texto_Botao_Especial = 'Baixar video Tiktok';
        Cor_Texto_Botao_Especial = '';
        Cor_Botao_Especial = '#ff0050';
        Link_Botao_Especial = 'https://www.ttkapp.tk/';

        Icone_Botao_Comprar = 'fa-solid fa-bag-shopping';
        Nome_Botao_Comprar = 'Loja Virtual';
        Link_Botao_Comprar = '';

        Icone_Botao_Extra_01 = 'fa-solid fa-toggle-on';
        Nome_Botao_Extra_01 = 'Nome do botão 01';
        Link_Botao_Extra_01 = '';
        Icone_Botao_Extra_02 = 'fa-solid fa-toggle-on';
        Nome_Botao_Extra_02 = 'Nome do botão 02';
        Link_Botao_Extra_02 = '';
        Icone_Botao_Extra_03 = 'fa-solid fa-toggle-on';
        Nome_Botao_Extra_03 = 'Nome do botão 03';
        Link_Botao_Extra_03 = '';

        Youtube = 'https://www.youtube.com/@paulobitcoin';
        Tiktok = 'https://www.tiktok.com/@paulobitcoin/';
        Instagram = 'https://www.instagram.com/paulobitcoin/';
        Facebook = '';
        Twitch = '';
        Twitter = '';
        Spotify = '';
        Kwai = '';
        Pinterest = '';
        Snapchat = '';
        Reddit = '';
        Linkedin = '';
        Github = '';
        Discord = '';
        Whatsapp = '';
        Telegram = 'https://t.me/PauloBitcoin';
        Endereco = '';

        //BOTÃO ESPECIAL PERSONALIZÁVEL (PROMOÇÔES)
        $(".button-especial").html('<i class=" ' + Icone_Botao_Especial + ' "></i>');
        $(".button-especial").append(' ' + Texto_Botao_Especial);
        $(".button-especial").css("--btn-especial", Cor_Texto_Botao_Especial);
        $(".button-especial").css("background", Cor_Botao_Especial);
        $(".button-especial").attr("href", Link_Botao_Especial);

        //BOTÃO EXCLUSIVO PARA COMPRAS
        $(".button-comprar").html('<i class=" ' + Icone_Botao_Comprar + ' "></i>' + '&nbsp;');
        $(".button-comprar").append(Nome_Botao_Comprar);
        $(".button-comprar").attr("href", Link_Botao_Comprar);

        //BOTÕES EXTRAS
        $(".button-extra01").html('<i class=" ' + Icone_Botao_Extra_01 + ' "></i>' + '&nbsp;');
        $(".button-extra01").append(Nome_Botao_Extra_01);
        $(".button-extra01").attr("href", Link_Botao_Extra_01);
        $(".button-extra02").html('<i class=" ' + Icone_Botao_Extra_02 + ' "></i>' + '&nbsp;');
        $(".button-extra02").append(Nome_Botao_Extra_02);
        $(".button-extra02").attr("href", Link_Botao_Extra_02);
        $(".button-extra03").html('<i class=" ' + Icone_Botao_Extra_03 + ' "></i>' + '&nbsp;');
        $(".button-extra03").append(Nome_Botao_Extra_03);
        $(".button-extra03").attr("href", Link_Botao_Extra_03);

        //MIDIAS SOCIAIS (LINKS)
        $(".button-youtube").attr("href", Youtube);
        $(".button-tiktok").attr("href", Tiktok);
        $(".button-instagram").attr("href", Instagram);
        $(".button-facebook").attr("href", Facebook);
        $(".button-twitch").attr("href", Twitch);
        $(".button-twitter").attr("href", Twitter);
        $(".button-spotify").attr("href", Spotify);
        $(".button-pinterest").attr("href", Pinterest);
        $(".button-kwai").attr("href", Kwai);
        $(".button-snapchat").attr("href", Snapchat);
        $(".button-reddit").attr("href", Reddit);
        $(".button-linkedin").attr("href", Linkedin);
        $(".button-discord").attr("href", Discord);
        $(".button-github").attr("href", Github);
        $(".button-whatsapp").attr("href", Whatsapp);
        $(".button-telegram").attr("href", Telegram);
        $(".button-endereco").attr("href", Endereco);
        ///$(".link[href='']").remove();


        //GERAL
        $("#userphoto").html('<span><i class="fa-solid fa-play play_logo"></i></span>');
        $('.username h1').html(username);
        $(document).attr("title", Nome + " - " + Legenda);
        $("[id='nome']").text(Nome);
        $('.legenda').text(Legenda);
        $('.texto_bio').append(Texto_Bio);
        $(':root').css("--themecolor", Cor_Tema);
        $("#userphoto").css('background-image', 'url(' + Foto_Perfil + ')').attr('alt', Nome_Foto_Perfil);
        $('.titulo-pub').append(Titulo_Da_Pub);

        //PUB TEXTO
        $('.pub-texto').append(Texto_Da_Pub);
        if (Texto_Da_Pub == '') {
            $(".pub-texto").remove();
        };

        //PUB LINK
        $(".pub-link").attr('href', Link_Pub);
        if (Link_Pub == '') {
            $("#VideoModal1").remove();
            $(".pub").remove();
            $(".play_logo").addClass('hidden');
        };

        //YOUTUBE ---> zVXoee6N5lQ
        $("#ytb").attr('src', "https://www.youtube-nocookie.com/embed/" + Video_Youtube + '?autoplay=1');
        if (Video_Youtube == '') {
            $(".ratio-16x9").remove();
            $(".play_logo").addClass('hidden');
        } else {
            $(".play_logo").removeClass('hidden');
        };

        //VIDEO
        $(".plyr").attr('src', Video + '#t=0.1');
        if (Video == '') {
            $(".plyr").remove();

        } else {
            $(".play_logo").removeClass('hidden');
        };

        //PUB BANNER
        $(".pub-img").attr('src', Banner);
        if (Banner == '') {
            $(".pub-img").remove();
        };


    })
});