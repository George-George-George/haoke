<template>
  <div>
    <div class="background">
      <div class="small"></div>
    </div>
    <div class="login">
      <div class="box1"></div>
      <div class="box2">游客</div>
      <div class="box3">
        <van-button type="primary" size="small">去登录</van-button>
      </div>
    </div>
    <div class="message">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.background {
  background: url(@/assets/58be775ec983a8bb44f32dad6b817af.png) no-repeat;
  background-size: 400px 320px;
  z-index: 1;
  .small {
    height: 200px;
  }
}
.login {
  border: 2px;
  box-shadow: 0px -10px 0px 0px rgba(0, 0, 0, 0),
    /*上边阴影 透明*/ -10px 0px 0px 0px rgba(0, 0, 0, 0),
    /*左边阴影 透明*/ 10px 0px 0px 0px rgba(0, 0, 0, 0),
    /*右边阴影
透明*/ 0px 10px 30px 0px rgba(0, 0, 0, 0.1); /*下边阴影 */

  background-color: #fff;
  width: 80%;
  height: 180px;
  position: absolute;
  left: 10%;
  top: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  .box1 {
    background: url(@/assets/avatar.png) no-repeat;
    background-size: 75px 75px;
    width: 75px;
    height: 75px;
    position: relative;
    top: -20%;
  }
  :deep(.box2) {
    font-size: 12px;
    position: relative;
    top: -20%;
  }
  :deep(.box3) {
    font-size: 12px;
    position: relative;
    top: -24%;
    // border-radius: 15%;
  }
}
</style>
