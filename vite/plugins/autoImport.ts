import { Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver, AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";

export default function autoImport(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      dts: "types/auto-imports.d.ts",
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dts: "types/components.d.ts",
      dirs: ["src/components"],
      directoryAsNamespace: true,
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        IconsResolver({
          alias: {
            park: "icon-park"
          },
          customCollections: ["custom", "inline"]
        })
      ]
    })
  );
}
