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
    <van-grid :column-num="3" class="centerbox" :border="false">
      <van-grid-item icon="photo-o" text="我的收藏" />
      <van-grid-item icon="photo-o" text="我的出租" />
      <van-grid-item icon="photo-o" text="看房记录" />
      <van-grid-item icon="photo-o" text="成为房主" />
      <van-grid-item icon="photo-o" text="个人资料" />
      <van-grid-item icon="photo-o" text="联系我们" />
    </van-grid>
    <van-grid :border="false" :column-num="1" class="imgbox">
      <van-grid-item>
        <van-image src="http://liufusong.top:8080/img/profile/join.png" />
      </van-grid-item>
    </van-grid>
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
    /*上边阴影 透明*/
    -10px 0px 0px 0px rgba(0, 0, 0, 0),
    /*左边阴影 透明*/
    10px 0px 0px 0px rgba(0, 0, 0, 0),
    /*右边阴影
透明*/
    0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  /*下边阴影 */

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

.centerbox {
  // display: flex;
  position: absolute;
  width: 100%;
  top: 52%;
}

.imgbox {
  position: absolute;
  top: 76%;

}
</style>
