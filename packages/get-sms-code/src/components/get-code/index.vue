<template>
  <span
    :class="[{ active: isActive }, 'code-btn']"
    @click="handleGetCode"
    v-if="currentTime <= 0"
  >
    获取验证码
  </span>
  <span
    class="code-btn"
    :class="currentTime > 0 ? 'code-current-time' : ''"
    v-else
  >
    重新获取 {{ currentTime }}s
  </span>
</template>

<script setup lang="ts">
import { ref, toRaw, reactive, onMounted, watchEffect, onUnmounted } from "vue";
import { SceneType } from "@/composable/get-code/type";
import { useDoLogin } from "@/composable/get-code";
import { isMobile } from "utils";

const props = defineProps<{
  phone: string; // 手机号
  scene: SceneType; // 验证码使用场景
}>();

const { doSmsCaptchaSend } = useDoLogin();
const isActive = ref(false);
const currentTime = ref(0);
const timer = ref();
const vaPtChaRef = reactive({
  vaPtCha: {},
});

const handleGetCode = () => {
  if (!isActive.value)
    return; // VAPTCHA实例初始化完成后，用户点击获取验证码按钮时执行人机验证
  (toRaw(vaPtChaRef).vaPtCha as any).validate();
};

const loadVaPtCha3Script = () => {
  if (typeof (window as any).vaptcha === "function") {
    //如果已经加载就直接放回
    return Promise.resolve((window as any).vaptcha);
  } else {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://v-cn.vaptcha.com/v3.js";
      script.onerror = reject;
      document.body.appendChild(script);
      script.onload = () => {
        resolve((window as any).vaptcha);
      };
    });
  }
};

const vaPtChaObjListen = () => {
  const serverToken = (toRaw(vaPtChaRef).vaPtCha as any).getServerToken();
  const data = {
    ct: serverToken.token,
    pn: props.phone, // 手机号
    scene: props.scene, // 场景
  };

  // 点击登录向服务器端接口提交数据，以下为伪代码，仅作参考
  doSmsCaptchaSend(data)
    .then((res) => {
      if (res.code == 200) {
        currentTime.value = 60;
        timer.value = setInterval(() => {
          if (currentTime.value === 0) {
            clearTime();
          } else {
            currentTime.value -= 1;
          }
        }, 1000);
      }
    })
    .finally(() => {
      (toRaw(vaPtChaRef).vaPtCha as any).reset();
    });
};

onMounted(() => {
  loadVaPtCha3Script().then((vaptcha: any) => {
    vaptcha({
      vid: "5fd0b1595bb14063462b1169", // vaptcha频台的id
      mode: "invisible",
      scene: 1, // 1-表示当前页面唤起人机验证
      area: "auto",
    }).then(function (VAPTCHAObj: any) {
      // 将VAPTCHA验证实例保存到局部变量中
      vaPtChaRef.vaPtCha = VAPTCHAObj;
      // 验证成功进行后续操作
      VAPTCHAObj.listen("pass", vaPtChaObjListen);
    });
  });
});

const clearTime = () => {
  timer.value && clearInterval(timer.value);
};

watchEffect(() => {
  isActive.value = !!props.phone && isMobile(props.phone);
});

onUnmounted(() => {
  currentTime.value = 0;
  clearTime();
});
</script>
