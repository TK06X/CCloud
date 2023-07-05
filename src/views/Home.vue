<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const addClick = () => {
  console.log(1);
};
</script>

<template>
  <a-row style="width: 500px" class="m-2">
    <a-card
      hoverable
      class="border border-white border-solid grid grid-cols-3 gap-4 h-[180px] rounded-xl shadow-lg shadow-base"
    >
      <a-col :span="8">
        <a-button type="primary" @click="addClick">
          {{ t("page.home.button.add") }}
        </a-button>
      </a-col>
    </a-card>
  </a-row>
</template>

<style scoped></style>
