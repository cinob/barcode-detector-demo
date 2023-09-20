<script setup lang="ts">
const result = ref()

function onDetect1(detectedCodes: any[]) {
  if (detectedCodes[0]) {
    result.value = detectedCodes[0].rawValue
  } else {
    result.value = '解析失败'
  }
}
</script>

<template>
  <div>
    <div class="p-4 text-left">
      <section class="mt-20px">
        <QrcodeCapture :capture="'environment'" :multiple="null" @detect="onDetect1" />
        result: {{ result }}
      </section>
    </div>
  </div>
</template>
