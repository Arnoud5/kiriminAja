<template>
    <div>
        <h2> ini ekspedisi</h2>

        <div class="container-ekspedisi">
        <!-- slider Banner -->
            <div class="slider-ekspedisi">
                <div class="slides-ekspedisi">
                    <input type="radio" name="radio-btn" id="eksped1" >
                    <input type="radio" name="radio-btn" id="eksped2" >
                    <input type="radio" name="radio-btn" id="eksped3" >
                    <input type="radio" name="radio-btn" id="eksped4" >
                    <input type="radio" name="radio-btn" id="eksped5" >
                    <input type="radio" name="radio-btn" id="eksped6" >
                    <input type="radio" name="radio-btn" id="eksped7" >
                    <input type="radio" name="radio-btn" id="eksped8" >
                    <!-- images -->
                    <div class="slide first">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/sicepat.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/anteraja.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/idx.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/gosend.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/jne.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/sap.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/jnt.png" alt="">
                    </div>
                    <div class="slide">
                        <img class="max-w-none w-80" src="https://kiriminaja.com/assets/logistics/sicepat.png" alt="">
                    </div>
                    <!-- images -->
                    <!-- automatic -->
                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                        <div class="auto-btn5"></div>
                        <div class="auto-btn6"></div>
                        <div class="auto-btn7"></div>
                        <div class="auto-btn8"></div>
                    </div>
                    <!-- automatic -->
                </div>
                <!-- navigation manual -->
                <div class="navigation-manual-ekspedisi">
                    <label for="eksped1" class="manual-btn-ekspedisi"></label>
                    <label for="eksped2" class="manual-btn-ekspedisi"></label>
                    <label for="eksped3" class="manual-btn-ekspedisi"></label>
                    <label for="eksped4" class="manual-btn-ekspedisi"></label>
                    <label for="eksped5" class="manual-btn-ekspedisi"></label>
                    <label for="eksped6" class="manual-btn-ekspedisi"></label>
                    <label for="eksped7" class="manual-btn-ekspedisi"></label>
                    <label for="eksped8" class="manual-btn-ekspedisi"></label>
                </div>
                <!-- navigation manual -->
            </div>  
        </div>
    </div>
</template>

<style lang="scss">
  /* *{
    background-color:rgba($color: #b8ffd6, $alpha: .1);
    border: 1px solid rgba($color: #000000, $alpha: .1);
  } */

  $width : 95vw;
  $width2 : 90vw;
  $width-ekspedisi : 200px * 8;
  
  .container-ekspedisi{
    width: $width;
    margin: 0 auto;
    position: relative;

    .slider-ekspedisi{
    width:100%;
    height: 20vh;
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: .1);
    overflow: hidden;
    
      .slides-ekspedisi{
        width: $width-ekspedisi;
        height: 14vh;
        display: flex;

        input {
          display: none;
        }
        #eksped1:checked ~ .first {
          margin-left: 0;
        }

        #eksped2:checked ~ .first {
          margin-left: -12.5%;
        }

        #eksped3:checked ~ .first {
            margin-left: -25%;
        }

        #eksped4:checked ~ .first {
            margin-left: -37.5%;
        }
        #eksped5:checked ~ .first {
          margin-left: -50;
        }

        #eksped6:checked ~ .first {
          margin-left: -62.5%;
        }

        #eksped7:checked ~ .first {
            margin-left: -75%;
        }

        #eksped8:checked ~ .first {
            margin-left: -87.5%;
        }
      }
      /* manual navigation */
      .navigation-manual-ekspedisi{
        position: absolute;
        width: $width;
        display: flex;
        justify-content: center;

        .manual-btn-ekspedisi{
          width: 10px;
          border: 2px solid #0e92ff ;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 1s;
          margin: 0 5px;
        }

        .manual-btn:hover{
          padding: 0 5px;
        }
      }
      
    }

    .slide{
      width: 200px;
      transition: 2s;
      display:flex;
      flex-direction:column;
      align-items: center;
    }

    .slide img{
        width: 150px;
    }

    /* manual navigation button */
    .navigation-manual{
      bottom: 10px;
      position: absolute;
      cursor:pointer;
      transition: 1s;
      display: flex;
      justify-content: space-around;
    }

  }
</style>