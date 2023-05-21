<template>
  <main>
    <div class="trans">
      <title-big2 class="title">交通資訊
        <logo class="logo"/>
      </title-big2>
      <div class="transinfo">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.136653697438!2d121.5101873967896!3d25.0972351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aebf5a86da1b%3A0x5f56dfe454975847!2z6Ie65YyX5biC56uL5YWS56ul5paw5qiC5ZyS!5e0!3m2!1szh-TW!2stw!4v1683384751986!5m2!1szh-TW!2stw"
          width="700"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul>
          <li v-for="item in items" :key="item.id">
            <div class="icon">
              <SvgCar class="car" />
              <SvgBus class="bus" />
              <SvgSubway class="sub" v-if="item.id === 'subway'" />
            </div>
            <div class="info">
            <h3 v-show="item.visible">{{ item.title }}</h3>
            <p v-show=" item.visible">{{ item.description }}</p>
          </div>
            
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>

const items = ref([
  {
    id: 'car',
    title: '國道一號',
    description: '臺北(重慶北路)交流道→百齡橋→承德路→基河路→兒童新樂園',

  },
  {
    id: 'subway',
    title: '捷運士林站',
    description:
      '搭乘至臺北車站轉捷運淡水信義線至劍潭站、士林站或芝山站轉乘公車',

  },
  {
    id: 'bus',
    title: '捷運士林站',
    description:
      '出口1→公車轉乘站255區、紅30、620、兒樂１號線(平日停駛)→兒童新樂園',

  },
]);


</script>

<style lang="scss" scoped>
main {
  width: $workspace;
  padding-top: 0;
  .trans {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .transinfo {
    display: flex;
  }
  .title {
    margin-top: 100px;
    position: relative;
  }
  .logo{
   position: absolute;
   top: 120px;
   right: 500px;
   animation: logo 10s ease infinite;
  }
  @keyframes logo {
    0%{
      right: 0;
      top:-190px;
    }
    25%{
      right: -250px;
      top: 0;
    }
    50%{
      right: 0;
      top:200px;
    }
    75%{
      right: 250px;
      top:100px;
    }
    85%{
      right: 150px;
      top:0px;
    }
    90%{
      right: 150px;
      top:-100px;
    }
    100%{
      right: 0;
      top:-190px;
    }
  }
  .trans iframe {
    margin-top: 190px;
  }

  .trans h3 {
    font-size: 30px;
    text-align: center;
    color: #163767;
    padding-top: 50px;
    padding-bottom: 25px;
  }
  .trans p {
    font-size: 26px;
    width: 310px;
    margin: 0 auto;
    text-align: center;
    color: #5590d6;
    position: relative;
    transition: max-height 0.3s ease;
  }
  .trans ul {
    margin-left: 60px;
    margin-top: 50px;
  }
  .trans li{
    display: flex;
  }
  .icon{
    margin: 85px 0;
    padding: 5px 0px;
  }

  .trans p::before {
    content: '';
    position: absolute;
    top: 125px;
    right: -50px;
    width: 414px;
    height: 3px;
    background-color: #d1825b;
  }
  .trans p::after {
    content: '';
    position: absolute;
    top: 117px;
    right: -50px;
    width: 24px;
    height: 3px;
    rotate: 39deg;
    background-color: #d1825b;
  }
}
</style>
