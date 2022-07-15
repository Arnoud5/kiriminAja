<template>
  <div class="container pt-24">
    <!-- slider Banner -->

      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" >
          <input type="radio" name="radio-btn" id="radio2" >
          <input type="radio" name="radio-btn" id="radio3" >
          <input type="radio" name="radio-btn" id="radio4" >
          <!-- images -->
          <div class="slide first">
            <img class="max-w-none w-80" src="https://kiriminaja.com/storage/Slider/July22/1657266673_slider%20(3).png" alt="">
            <p>title</p>
            <p>paragraph alot of it</p>
          </div>
          <div class="slide">
            <img class="max-w-none w-80" src="https://kiriminaja.com/storage/Slider/July22/1657266673_slider%20(3).png" alt="">
            <p>title</p>
            <p>paragraph alot of it</p>
          </div>
          <div class="slide">
            <img class="max-w-none w-80" src="https://kiriminaja.com/storage/Slider/July22/1657266673_slider%20(3).png" alt="">
            <p>title</p>
            <p>paragraph alot of it</p>
          </div>
          <div class="slide">
            <img class="max-w-none w-80" src="https://kiriminaja.com/storage/Slider/July22/1657266673_slider%20(3).png" alt="">
            <p>title</p>
            <p>paragraph alot of it</p>
          </div>
          <!-- images -->
        </div>
        <!-- navigation manual -->
        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
        <!-- navigation manual -->
      </div>  
  </div>
</template>

<script>
  
</script>


<style lang="scss">
  /* *{
    background-color:rgba($color: #b8ffd6, $alpha: .1);
    border: 1px solid rgba($color: #000000, $alpha: .1);
  } */

  $width : 95vw;
  $width2 : 90vw;
  
  .container{
    width: $width;
    margin: 0 auto;

    .slider{
    width:100%;
    height: 80vh;
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: .1);
    border-radius: 15px;
    overflow: hidden;
    
      .slides{
        width: 500%;
        height: 80vh;
        display: flex;

        input {
          display: none;
        }
        #radio1:checked ~ .first {
          margin-left: 0;
        }

        #radio2:checked ~ .first {
          margin-left: -20%;
        }

        #radio3:checked ~ .first {
            margin-left: -40%;
        }

        #radio4:checked ~ .first {
            margin-left: -60%;
        }
      }
      /* manual navigation */
      .navigation-manual{
        position: absolute;
        width: $width;
        margin-top: -40px;
        display: flex;
        justify-content: center;

        .manual-btn{
          width: 20px;
          border: 2px solid #0e92ff ;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 1s;
          margin: 0 20px;
        }

        .manual-btn:hover{
          background: #0e92ff;
        }
      }
      
    }

    .slide{
      width: $width;
      transition: 2s;
      display:flex;
      flex-direction:column;
      align-items: center;
    }

    /* manual navigation button */
    .navigation-manual{
      position: absolute;
      margin-top: -40px;
      cursor:pointer;
      transition: 1s;
      padding: 0 20px;
    }

  }
</style>