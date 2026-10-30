import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import { setupChecklist } from './checklist'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    // Runs after the first load and after every page change (VitePress swaps pages without reloading).
    onMounted(() => {
      watch(
        () => route.path,
        (path) => nextTick(() => setupChecklist(path)),
        { immediate: true },
      )
    })
  },
}
