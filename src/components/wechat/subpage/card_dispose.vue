<template>
	<div class="dispose">
		<img v-if="msg=='成功'"  class="dispose_img" src="../../../assets/img/wechat/mine/chulizhong.png" alt="">
    <img v-else class="dispose_img" src="../../../assets/img/wechat/mine/caozuoshibai.png" alt="">
    <div v-if="msg=='成功'">
    <div class="chuli">{{text}}</div>
    <div class="information">解绑申请已提交成功，将会在1-3个工作日完成审核，审核通过后可操作解绑。</div>
    </div>
   <div v-else>
      <div class="chuli" style="margin-bottom:2rem">操作失败</div>
     <div class="infomation" style="color:#FF5240;font-size:1.4rem;margin-bottom:5rem ">{{msg}}</div>
   </div>
    <!-- <div class="null_go1" @click="gomy">完成</div> -->
    <Button  v-if="msg=='成功'" :message='message' :disabled='disabled'  @change="finish"> </Button>
    <Button  v-else :message='message1' :disabled='disabled'  @change="finish"> </Button>
    <div class="question">
      <!-- <img src="../../../assets/img/wechat/mine/jiujiangdibu.png" alt=""> -->
      <v-footer :style="{position: 'fixed',bottom: 0,left:0}"/>
    </div>
		<!-- <div class="question">若有任何疑问，请及时联系我们</div>
		<div class="question1">
			<img src="../../../assets/img/wechat/mine/icon_phone.png" alt="">
			<a :href='"tel:"+tel'> <span>{{tel}}</span></a>
		</div>
		<div class="question2">工作日9：00-21：00</div> -->
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import footer from "@/components/wechat/public/Footer";
export default {
  components: {
    "v-footer": footer
  },
  data() {
    return {
      text: "解绑申请处理中",
      message1:'返回',
      msg:'成功',
      tel: "400-005-3300",
      type: "error",
      message: "完成",
      disabled: false
    };
  },
  created: function() {
     if (this.$route.query.msg) {
      this.msg = this.$route.query.msg;
    }
     if (this.msg == "成功") {
      this.type = "2";

      this.isApp(this.type, false);
    } else {
      this.type = "99";
    }
  },
  methods: {
    finish() {
     if (this.msg == "成功") {
        this.type = "20";
      } else {
        this.type = "99";
      }
      this.isApp(this.type, true);
    },
    isApp(type, f) {
      var ua = window.navigator.userAgent.toLowerCase(); //判断是不是微信端
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      var isWeixin =
        ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;
      try {
        //浏览器调试
        if (isIOS && !isWeixin) {
          jumpPageByType(type);
        } else if (isAndroid && !isWeixin) {
          webReturn.jumpPageByType(type);
        } else {
          if (f) {
             if (this.msg == "成功") {
              this.$router.push({ path: "/wechat/homepage/mine" });
            } else {
              this.$router.push({ path: "/wechat/subpage/bannk_ud_photos" });
            }
          }
        }
      } catch (e) {
        console.log(e);
        if (f) {
          this.$router.push({
            path: "/wechat/subpage/bannk_ud_photos"
          });
        }
      }
    }
    //			demo() {
    //				var ua = window.navigator.userAgent.toLowerCase(); //判断是不是微信端
    //				var u = navigator.userAgent;
    //				var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    //				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //				var isWeixin = ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;
    //				try {
    //					if("修改交易密码") {
    //						//无处理中页面
    //						if(isIOS && !isWeixin) {
    //							jumpPageByType("6");
    //							throw "IOS Browser simulation trad";
    //						} else if(isAndroid && !isWeixin) {
    //							webReturn.jumpPageByType("7");
    //							throw "Android Browser simulation trad";
    //						} else {
    //							window.location.href="指定页面";
    //						}
    //					} else if("修改银行手机") {
    //						//无处理中页面
    //						if(isIOS && !isWeixin) {
    //							jumpPageByType("6");
    //							throw "IOS Browser simulation Phone";
    //						} else if(isAndroid && !isWeixin) {
    //							webReturn.jumpPageByType("7");
    //							throw "Android Browser simulation Phone";
    //						} else {
    //							window.location.href="指定页面";
    //						}
    //					} else if("出借") {
    //						//有处理中页面
    //						window.location.href="指定页面";
    //					} else if("……") {
    //						//有处理中页面
    //						window.location.href="指定页面";
    //					}
    //
    //				} catch(e) {
    //					console.log(e);
    //					if("修改交易密码") {
    //						//无处理中页面
    //						window.location.href="指定页面";
    //					} else if("修改银行手机") {
    //						//无处理中页面
    //						window.location.href="指定页面";
    //					}
    //
    //				}
    //			},
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/card_dispose.less");
</style>