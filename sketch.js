const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var rain,rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9,rain10,rain11,rain12,rain13,rain15,rain16;


var engine, world;

var rand;
var Maxdrops=100;
              


var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

   rain=new Drops(200,400);

    //create drops
    
    for(var i=0;i<Maxdrops;i=i+2){
        rain.push= new Drops(random(0,400),random(0,400)); 
           }

           rain2=new Drops(200,400);

           //create drops
           
           for(var i=0;i<Maxdrops;i=i+2){
               rain2.push= new Drops(random(0,400),random(0,400)); 
                  }
                  rain1=new Drops(200,400);

                  //create drops
                  
                  for(var i=0;i<Maxdrops;i=i+2){
                      rain1.push= new Drops(random(0,400),random(0,400)); 
                         }
                         rain3=new Drops(200,400);

                         //create drops
                         
                         for(var i=0;i<Maxdrops;i=i+2){
                             rain3.push= new Drops(random(0,400),random(0,400)); 
                                }
                                rain4=new Drops(200,400);

                                //create drops
                                
                                for(var i=0;i<Maxdrops;i=i+2){
                                    rain4.push= new Drops(random(0,400),random(0,400)); 
                                       }
                                       rain5=new Drops(200,400);

                                       //create drops
                                       
                                       for(var i=0;i<Maxdrops;i=i+2){
                                           rain5.push= new Drops(random(0,400),random(0,400)); 
                                              }
                                              rain6=new Drops(200,400);

                                              //create drops
                                              
                                              for(var i=0;i<Maxdrops;i=i+2){
                                                  rain6.push= new Drops(random(0,400),random(0,400)); 
                                                     }
                                                     rain7=new Drops(200,400);

                                                     //create drops
                                                     
                                                     for(var i=0;i<Maxdrops;i=i+2){
                                                         rain7.push= new Drops(random(0,400),random(0,400)); 
     }  
     
     
     rain8=new Drops(200,400);

     //create drops
     
     for(var i=0;i<Maxdrops;i=i+2){
         rain8.push= new Drops(random(0,400),random(0,400)); 
            }


            rain9=new Drops(200,400);

            //create drops
            
            for(var i=0;i<Maxdrops;i=i+2){
                rain9.push= new Drops(random(0,400),random(0,400)); 
                   }         
                   rain10=new Drops(200,400);

                   //create drops
                   
                   for(var i=0;i<Maxdrops;i=i+2){
                       rain10.push= new Drops(random(0,400),random(0,400)); 
                          }        
                          rain11=new Drops(200,400);

                          //create drops
                          
                          for(var i=0;i<Maxdrops;i=i+2){
                              rain11.push= new Drops(random(0,400),random(0,400)); 
                                 }        
                                 rain12=new Drops(200,400);

                                 //create drops
                                 
                                 for(var i=0;i<Maxdrops;i=i+2){
                                     rain12.push= new Drops(random(0,400),random(0,400)); 
                                        }        
                                        rain13=new Drops(200,400);

                                        //create drops
                                        
                                        for(var i=0;i<Maxdrops;i=i+2){
                                            rain13.push= new Drops(random(0,400),random(0,400)); 
                                               }        
                                               rain14=new Drops(200,400);

                                               //create drops
                                               
                                               for(var i=0;i<Maxdrops;i=i+2){
                                                   rain14.push= new Drops(random(0,400),random(0,400)); 
                                                      }        
                                                      rain15=new Drops(200,400);

                                                      //create drops
                                                      
                                                      for(var i=0;i<Maxdrops;i=i+2){
                                                          rain15.push= new Drops(random(0,400),random(0,400)); 
                                                             }        
                                                             rain16=new Drops(200,400);

                                                             //create drops
                                                             
                                                             for(var i=0;i<Maxdrops;i=i+2){
                                                                 rain16.push= new Drops(random(0,400),random(0,400)); 
                                                                    }                                                                                                                                                                                                                                                           
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //display rain drops
    
              
          
   
rain.display();
rain1.display();
rain2.display();
rain3.display();
rain4.display();
rain5.display();
rain6.display();
rain7.display();
rain8.display();
rain9.display();
rain10.display();
rain11.display();
rain12.display();
rain13.display();
rain14.display();
rain15.display();
rain16.display();
    drawSprites();
}   

