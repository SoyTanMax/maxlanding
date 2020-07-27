<template>
    <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="@/assets/nike.png" alt="shoe">
            </div>
            <div class="contentBx">
                <h2 class="is-size-4">Nike Shoes</h2>
                <div class="size">
                    <h3 class="is-size-5">Size : </h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div class="color">
                    <h3 class="is-size-5">Color : </h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.body {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container{
    position: relative;
}

.card {
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
}

.card:before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.card:after {
    content: 'Nike';
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255,255,255, 0.04);
}

.imgBx{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
}

.card:hover .imgBx{
    top: 0%;
    transform: translateY(0%);
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: scaleX(-1);
    transform: translate(-50%, -50%) rotate(-25deg) scaleX(-1);
    width: 270px;
}
.contentBx{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
}
.card:hover .contentBx{
    height: 210px;
}
.contentBx h2{
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffff;
}
.size, .color{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.card:hover .size{
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.card:hover .color{
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.size h3, .color h3{
    color: #ffffff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}
.size span{
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #232323;
    background: #ffffff;
    margin: 0 5px;
    transition: 0.5s;
    border-radius: 4px;
    cursor: pointer;
}
.size span:hover{
    background: #9bdc28;
    color: #ffffff;
}

.color span{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff0;
    margin: 0 5px;
    cursor: pointer;
}
.color span:nth-child(2){
    background: #9bdc28;
}
.color span:nth-child(3){
    background: #03a9f4;
}
.color span:nth-child(4){
    background: #e91e63;
}

a{
    display: inline-block;
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
}
.card:hover a{
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
}
</style>
