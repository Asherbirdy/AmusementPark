<script></script>
<template>
  <div class="wrapper">
    <TicketPriceTOR />
    <p>*未滿4歲且有家長陪同的幼童可免費入場</p>
    <tour-title class="title">
      <Tickets width="20" />
      購票
    </tour-title>
    <TicketExhibitionTOR />
    <tour-title class="title">
      <Folder width="20" />
      預約
    </tour-title>
    <TicketBookingTOR class="perfromanceBook" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-left: 159px;
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.title {
  width: 145px;
  height: 100px;
  margin-left: 0%;
  margin-bottom: 5%;
}

.perfromanceBook {
  width: 947px;
}

p {
  margin: 40px 0;
}
</style>
<route>
  {
      meta: {
        layout: 'member',
      }
  }
</route>
