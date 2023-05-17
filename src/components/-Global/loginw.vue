<script setup>
// 帳號 + 密碼 的 input欄位
const account = ''; // 用作v-model雙向數據綁定
const password = ''; // 用作v-model雙向數據綁定
const inputInfos = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'account',
    placeholder: '請輸入您的Email或手機',
    value: account,
  },
  {
    title: '密碼：',
    type: 'tel',
    id: 'password',
    placeholder: '請輸入您的密碼',
    value: password,
  },
]);
// 會員註冊 + 忘記密碼 的 a標籤
const aLinks = ref([
  {
    id: '1',
    url: '#',
    text: '會員註冊',
    icon: 'User',
  },
  {
    id: '2',
    url: '#',
    text: '忘記密碼',
    icon: 'Unlock',
  },
]);
</script>

<template>
  <details>
    <summary>
      <icon-small-login class="loginw" />
      <div class="details-modal-overlay"></div>
    </summary>
    <nav>
      <div class="modal">
        <el-icon class="modal__iconClose"><CircleClose /></el-icon>
        <slot> </slot>
      <section class="top">
        <h1 class="top__h1">會員登入</h1>
      </section>
      <!-- input欄位 + 會員註冊 + 忘記密碼 _ 登入按鈕-->
      <section class="middle">
        <form action="middle__form">
          <!-- 帳號 + 密碼 的 input欄位 -->
          <div
            class="middle__form--wrapOfLabelInput"
            v-for="(inputInfo, index) in inputInfos"
            v-bind:key="inputInfo.id"
          >
            <label class="middle__form--label">{{ inputInfo.title }}</label>
            <input
              class="middle__form--input"
              v-bind:type="inputInfo.type"
              v-bind:id="inputInfo.id"
              v-bind:placeholder="inputInfo.placeholder"
              v-model="inputInfo.value"
            />
          </div>

          <!-- 會員註冊 + 忘記密碼 的 a標籤 -->
          <div class="middle__form--bigWrapOfIconA">
            <div
              class="middle__form--wrapOfIconA"
              v-for="(aLink, index) in aLinks"
              v-bind:key="aLink.id"
              v-bind:href="aLink.url"
            >
              <el-icon class="middle__form--Icon"
                ><component :is="aLink.icon"
              /></el-icon>
              <!-- 在 <el-icon> 组件内部動態渲染 aLink.icon 所代表的组件 -->
              <a class="middle__form--A">{{ aLink.text }}</a>
            </div>
          </div>

          <button class="middle__form--Btn" type="submit" id="Submit">
            登入
          </button>
        </form>
      </section>

      <!-- 分隔線 + Icon of Line&FB&Google -->
      <section class="bottom">
        <hr class="bottom__hr" />
        <div class="bottom__wrapOfIcon">
          <!-- <img class="bottom__wrapOfIcon--icon" v-for="(imgIcon, index) in imgIcons" :key="index" :src="imgIcon.path"/> -->
          <img
            class="bottom__wrapOfIcon--icon"
            src="../../assets/svg/iconline.svg"
            alt=""
          />
          <img
            class="bottom__wrapOfIcon--icon"
            src="../../assets/svg/iconfb.svg"
            alt=""
          />
          <img
            class="bottom__wrapOfIcon--icon"
            src="../../assets/svg/icongmail.svg"
            alt=""
          />
        </div>
      </section>        
      </div>
      <!-- 會員登入 -->

    </nav>
  </details>
</template>

<style scoped lang="scss">
//外框
.modal {
  background-color: $maincolor1;
  width: 730px;
  height: 650px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 80px;
  border: 3px solid #ce5b5b;
  border-radius: 20px;
  color: $textcolor3;

  &__iconClose {
    float: right;
    margin-top: 29px;
    margin-right: 40px;
    font-size: 40px;
    color: #90420a;
  }
}
.top {
  &__h1 {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 29.05px;
    margin-top: 70px;
    margin-bottom: 39px;
  }
}
.middle {
  display: flex;
  justify-content: center;

  &__form {
    &--wrapOfLabelInput {
      margin-bottom: 36px;
    }
    &--label {
      font-size: 20px;
      margin-right: 19px;
    }
    &--input {
      width: 300px;
      height: 60px;
      border-width: 1px;
      border-color: lightgray;
      border-radius: 10px;
      padding-left: 9px;
    }
    &--input::placeholder {
      font-size: 18px;
    }

    &--bigWrapOfIconA {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 228px;
      margin: 0 auto;
    }
    &--wrapOfIconA {
      display: inline-block;
      margin-bottom: 39px;
    }
    &--Icon {
      margin-right: 9px;
    }
    &--A {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
    }

    &--Btn {
      background-color: #d1825b;
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 60px;
      border-radius: 10px;
      margin-bottom: 50px;
      font-weight: 400;
      font-size: 24px;
    }
  }
}
.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 45px;

  &__hr {
    display: block;
    height: 1px;
    width: 552px;
    background-color: black;
    margin: 0 auto;
    margin-bottom: 29px;
  }

  &__wrapOfIcon {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;

    &--icon {
      width: 65px;
    }
  }
}

//======================================================================================

*,
*:before,
*:after {
  box-sizing: border-box;
}

.details-modal .details-modal-content {
  border-top: 1px solid #e0e0e0;
  padding: 2em;
  pointer-events: all;
  overflow: auto;
}

.details-modal-overlay {
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background: rgba(15, 23, 42, 0.8);
  position: fixed;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
details[open] nav {
  position: absolute;
  pointer-events: all;
  // opacity: 0.5;
  z-index: 5;
  width: $workspace;
margin-left: -1100px;
}

details summary {
  list-style: none;
}
</style>
