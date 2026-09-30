import {Icon} from "../../shared/components/Icon.jsx";

function renderText(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /`(.*?)`/g,
      '<code class="px-1.5 py-0.5 rounded font-mono text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">$1</code>',
    );
}

/* ---------------------------------------------------------------------------
 * 卡片配色表
 *
 * 每个功能卡片一套颜色：明亮模式用浅色填充，黑暗模式用深色填充。
 * 重要：类名必须是完整、静态的字符串——Tailwind 靠扫描源码提取类名，
 * 用变量拼接（如 `bg-${c}-100`）会扫不到，样式会整块丢失。
 * 想给某个功能指定颜色，在 _index.md 的 items 里加一行 `color: 'sky'` 即可，
 * 不写就按下面的顺序自动分配（12 项刚好一轮不重复）。
 * ------------------------------------------------------------------------- */
const CARD_THEMES = {
  sky: "bg-sky-100 ring-sky-200/70 hover:ring-sky-300 dark:bg-sky-950/60 dark:ring-sky-800/60 dark:hover:ring-sky-600",
  violet:
    "bg-violet-100 ring-violet-200/70 hover:ring-violet-300 dark:bg-violet-950/60 dark:ring-violet-800/60 dark:hover:ring-violet-600",
  emerald:
    "bg-emerald-100 ring-emerald-200/70 hover:ring-emerald-300 dark:bg-emerald-950/60 dark:ring-emerald-800/60 dark:hover:ring-emerald-600",
  amber:
    "bg-amber-100 ring-amber-200/70 hover:ring-amber-300 dark:bg-amber-950/60 dark:ring-amber-800/60 dark:hover:ring-amber-600",
  rose: "bg-rose-100 ring-rose-200/70 hover:ring-rose-300 dark:bg-rose-950/60 dark:ring-rose-800/60 dark:hover:ring-rose-600",
  teal: "bg-teal-100 ring-teal-200/70 hover:ring-teal-300 dark:bg-teal-950/60 dark:ring-teal-800/60 dark:hover:ring-teal-600",
  indigo:
    "bg-indigo-100 ring-indigo-200/70 hover:ring-indigo-300 dark:bg-indigo-950/60 dark:ring-indigo-800/60 dark:hover:ring-indigo-600",
  lime: "bg-lime-100 ring-lime-200/70 hover:ring-lime-300 dark:bg-lime-950/60 dark:ring-lime-800/60 dark:hover:ring-lime-600",
  fuchsia:
    "bg-fuchsia-100 ring-fuchsia-200/70 hover:ring-fuchsia-300 dark:bg-fuchsia-950/60 dark:ring-fuchsia-800/60 dark:hover:ring-fuchsia-600",
  cyan: "bg-cyan-100 ring-cyan-200/70 hover:ring-cyan-300 dark:bg-cyan-950/60 dark:ring-cyan-800/60 dark:hover:ring-cyan-600",
  orange:
    "bg-orange-100 ring-orange-200/70 hover:ring-orange-300 dark:bg-orange-950/60 dark:ring-orange-800/60 dark:hover:ring-orange-600",
  purple:
    "bg-purple-100 ring-purple-200/70 hover:ring-purple-300 dark:bg-purple-950/60 dark:ring-purple-800/60 dark:hover:ring-purple-600",
};

/* 图标底色跟着卡片走：明亮模式用饱和实底 + 白图标（颜色辨识度更高），
   黑暗模式用半透明底 + 浅色图标，避免大面积纯色过亮。 */
const ICON_THEMES = {
  sky: "bg-sky-600 text-white dark:bg-sky-500/25 dark:text-sky-200",
  violet: "bg-violet-600 text-white dark:bg-violet-500/25 dark:text-violet-200",
  emerald: "bg-emerald-600 text-white dark:bg-emerald-500/25 dark:text-emerald-200",
  amber: "bg-amber-500 text-white dark:bg-amber-500/25 dark:text-amber-200",
  rose: "bg-rose-600 text-white dark:bg-rose-500/25 dark:text-rose-200",
  teal: "bg-teal-600 text-white dark:bg-teal-500/25 dark:text-teal-200",
  indigo: "bg-indigo-600 text-white dark:bg-indigo-500/25 dark:text-indigo-200",
  lime: "bg-lime-600 text-white dark:bg-lime-500/25 dark:text-lime-200",
  fuchsia: "bg-fuchsia-600 text-white dark:bg-fuchsia-500/25 dark:text-fuchsia-200",
  cyan: "bg-cyan-600 text-white dark:bg-cyan-500/25 dark:text-cyan-200",
  orange: "bg-orange-600 text-white dark:bg-orange-500/25 dark:text-orange-200",
  purple: "bg-purple-600 text-white dark:bg-purple-500/25 dark:text-purple-200",
};

/* 自动分配时按这个顺序取色：相邻卡片色相错开，三列网格横看竖看都不重色。 */
const THEME_ORDER = [
  "sky",
  "violet",
  "emerald",
  "amber",
  "rose",
  "teal",
  "indigo",
  "lime",
  "fuchsia",
  "cyan",
  "orange",
  "purple",
];

function pickTheme(item, idx) {
  const want = String(item?.color || "").trim().toLowerCase();
  if (CARD_THEMES[want]) return want;
  return THEME_ORDER[idx % THEME_ORDER.length];
}

function FeatureCard({item, iconSvg, imgData, variant = "grid", large = false, theme = "sky"}) {
  const isCard = variant === "bento";
  const cardTheme = CARD_THEMES[theme] || CARD_THEMES.sky;
  const iconTheme = ICON_THEMES[theme] || ICON_THEMES.sky;

  const wrapperCls = isCard
    ? `relative h-full rounded-2xl ring-1 ${cardTheme} ${large ? "p-8 lg:p-10" : "p-6"} hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300 overflow-hidden`
    : "";

  const iconWrapper = large ? "w-14 h-14 lg:w-16 lg:h-16" : "w-11 h-11 lg:w-12 lg:h-12";
  const iconSize = large ? "height:1.75rem;width:auto" : "height:1.4rem;width:auto";

  const titleSize = large ? "text-2xl lg:text-3xl" : isCard ? "text-lg lg:text-xl" : "text-xl";
  const descSize = large ? "text-base lg:text-lg" : "text-sm lg:text-base";

  return (
    <div class={wrapperCls}>
      {iconSvg && (
        <div class={`flex justify-center items-center mb-5 ${iconWrapper} rounded-2xl ${iconTheme}`}>
          <Icon svg={iconSvg} attributes={{class: "inline-block", style: iconSize}} />
        </div>
      )}
      {item.name && (
        <h3
          class={`mb-2 ${titleSize} font-bold text-gray-900 dark:text-white tracking-tight`}
          dangerouslySetInnerHTML={{__html: renderText(item.name)}}
        />
      )}
      {item.description && (
        <p
          class={`${descSize} text-gray-700 dark:text-gray-300 leading-relaxed`}
          dangerouslySetInnerHTML={{__html: renderText(item.description)}}
        />
      )}
      {large && imgData?.src && (
        <div class="mt-6 -mx-2 lg:-mx-4">
          <img
            src={imgData.src}
            alt={item.name || ""}
            class="w-full rounded-xl ring-1 ring-black/5 dark:ring-white/10"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

function GridLayout({items, iconMap, item_images}) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {items.map((item, idx) => (
        <FeatureCard
          key={idx}
          item={item}
          iconSvg={item.icon ? iconMap[item.icon] : null}
          imgData={item_images?.[String(idx)]}
          variant="grid"
          theme={pickTheme(item, idx)}
        />
      ))}
    </div>
  );
}

function BentoLayout({items, iconMap, item_images}) {
  // First item is the featured "large" card spanning 2 cols (md+) and 2 rows (lg+).
  // grid-flow-dense lets remaining items pack the gaps cleanly across counts (4–7).
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 grid-flow-dense auto-rows-fr">
      {items.map((item, idx) => {
        const large = idx === 0;
        const spanCls = large ? "md:col-span-2 lg:row-span-2" : "";
        return (
          <div key={idx} class={spanCls}>
            <FeatureCard
              item={item}
              iconSvg={item.icon ? iconMap[item.icon] : null}
              imgData={item_images?.[String(idx)]}
              variant="bento"
              large={large}
              theme={pickTheme(item, idx)}
            />
          </div>
        );
      })}
    </div>
  );
}

export const FeaturesBlock = ({content = {}, design = {}, icon_svgs = {}, item_images = {}}) => {
  const {title, subtitle, text, items: rawItems = []} = content;
  const items = Array.isArray(rawItems) ? rawItems : [];
  const layout = design.layout || "grid";

  return (
    <div class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        {(title || text || subtitle) && (
          <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            {subtitle && (
              <p class="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
                dangerouslySetInnerHTML={{__html: renderText(title)}}
              />
            )}
            {text && (
              <p class="text-lg text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: renderText(text)}} />
            )}
          </div>
        )}

        {items.length > 0 &&
          (layout === "bento" ? (
            <BentoLayout items={items} iconMap={icon_svgs} item_images={item_images} />
          ) : (
            <GridLayout items={items} iconMap={icon_svgs} item_images={item_images} />
          ))}
      </div>
    </div>
  );
};
