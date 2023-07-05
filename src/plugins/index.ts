import { App } from "vue";
import { setupEcharts } from "./echarts";
import { setupElementIcons, setupElementPlus } from "./element";
import { setupAntd } from "./ant";
import { setupI18n } from "./i18n";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setupTable } from "./vxe-table";
import { setupDirectives } from "./directives";
import { setupDayjs } from "./dayjs";

export function setupPlugins(app: App) {
  setupPinia(app);
  setupTable(app);
  setupEcharts(app);
  setupI18n(app);
  setupElementIcons(app);
  setupElementPlus(app);
  setupAntd(app);
  setupDirectives(app);
  setupTailwindcss();
  setupDayjs();
}
