   track1={title:'Erotalehu',artiest:'Eyob Mekonen',url:'/assets/music/eyob1.mp3',imgsrc:'assets/images/eyob.jpg'};
   track2={title:'album2',artiest:'eyob',url:'/assets/music/eyob2.mp3',imgsrc:'assets/images/img1.jpg'};
   track3={title:'sew mekroshe ',artiest:'tamirate',url:'/assets/music/tamirat.mp3',imgsrc:'assets/images/tamirat.jpg'};
   track4={title:'next to you',artiest:'cheris brown ',url:'/assets/music/eng.mp3',imgsrc:'assets/images/img2.jpeg'};
   track5={title:'album 1',artiest:'madingo',url:'/assets/music/madingo.mp3',imgsrc:'assets/images/img3.jpg'};

   
   let music=[track1,track2,track3,track4,track5];
   let counter = 0;
   let streaming= false;

   function fun1(){
    let music_player = document.getElementById('music-player');
    let test=music_player.currentTime;
    // while(true){

    // }
   }

   function playMusic(){
    let music_player = document.getElementById("music-player");
    let play = document.getElementById("play").class = "fa fa-pause";
    let artiest = document.getElementById("artiest");
    let title = document.getElementById("songTitle");
    let post_card = document.getElementById("post-card");
    if(streaming==false){
        music_player.src = music[counter].url;
        artiest.innerHTML = music[counter].artiest;
        title.innerHTML = music[counter].title;
        post_card.src = music[counter].imgsrc;
        music_player.play();
        streaming=true;
        
    }
    else{
        music_player.pause();
        streaming=false;
    }
    

   }
      function volumeChange() {
        let music_player = document.getElementById("music-player");
        let volume_control = document.getElementById("volume-control").value;
        music_player.volume = volume_control;
      }

      
      function muteMusic() {
        let music_player = document.getElementById("music-player");
        let volume_control = document.getElementById("volume-control").value;

        if(music_player.volume==0){
            music_player.volume = volume_control;
        }
        else{
            music_player.volume = 0;
        }
       
      }

      function nextMusic(){
        counter++;
        
        if(counter==music.length){
            let btnhide = document.getElementById("btnforeward").style.display="none";
            counter--;
        }
        else{
            let music_player=document.getElementById("music-player");
            let post_card = document.getElementById("post-card");
            let artiest = document.getElementById("artiest");
            let title = document.getElementById("songTitle");
        
            music_player.src = music[counter].url;
            post_card.src = music[counter].imgsrc;
            artiest.innerHTML = music[counter].artiest;
            title.innerHTML = music[counter].title;
    
            music_player.play();  
            let btnhide = document.getElementById("btnbackward").style.display="flex";
        }
        
      }

      function prevMusic(){
        counter--;
        if(counter<0){
            let btnhide = document.getElementById("btnbackward").style.display="none";
            counter++;
        }
        else{
            let music_player=document.getElementById("music-player");
            let post_card = document.getElementById("post-card");
            let artiest = document.getElementById("artiest");
            let title = document.getElementById("songTitle");
        
            music_player.src = music[counter].url;
            post_card.src = music[counter].imgsrc;
            artiest.innerHTML = music[counter].artiest;
            title.innerHTML = music[counter].title;
    
            music_player.play();  
            let btnhide = document.getElementById("btnforeward").style.display="flex";

        }
      }
