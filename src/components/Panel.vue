<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: ""
  },
  bannerColor: {
    type: String,
    default: "bg-blue-300"
  }
});
</script>

<template>
  <div class="w-full px-2">
    <div
      class="border border-white border-solid grid grid-cols-3 gap-4 h-[180px] rounded-xl shadow-lg shadow-base"
    >
      <div class="flex flex-col items-start justify-start col-span-2 pl-6">
        <span class="pt-8 pb-2 text-lg text-gray-400">
          <slot name="title"></slot>
        </span>
        <div>
          <span class="text-lg font-bold">
            <slot name="subtitle"></slot>
          </span>
          <span class="pl-2 font-bold text-gray-400">
            <slot name="badge"></slot>
          </span>
        </div>
        <div class="pt-10">
          <span :class="props.bannerColor" class="p-1 text-sm text-white rounded-md">
            <slot name="banner"></slot>
          </span>
          <span class="pl-4 text-sm text-gray-400">
            <slot name="description"></slot>
          </span>
        </div>
      </div>
      <div class="flex justify-center pr-2 mt-6">
        <img
          class="border shadow-lg shadow-dark-200 border-base dark:border-light-50 border-light-50 border-solid w-[100px] h-[100px] rounded-md"
          :src="props.imgUrl"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
