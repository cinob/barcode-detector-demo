<template>
  <input
    @change="onChangeInput"
    type="file"
    name="image"
    accept="image/*"
    capture="environment"
  />
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type DetectedBarcode, type BarcodeFormat, BarcodeDetector } from 'barcode-detector/pure'

const processFile = async (file: File, formats: BarcodeFormat[] = ['qr_code']) : Promise<DetectedBarcode[]> => {
  const barcodeDetector = new BarcodeDetector({
    formats
  })

  return await barcodeDetector.detect(file)
}

const props = defineProps({
  formats: {
    type: Array as PropType<BarcodeFormat[]>,
    default: () => ['qr_code'] as BarcodeFormat[]
  }
})

const emit = defineEmits(['detect'])

// methods
const onChangeInput = (event: Event) => {
  if (!(event.target instanceof HTMLInputElement) || !event.target.files) return

  for (const file of Array.from(event.target.files)) {
    processFile(file, props.formats).then(detectedCodes => {
      emit('detect', detectedCodes)
    })
  }
}
</script>
