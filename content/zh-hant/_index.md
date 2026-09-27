---
title: '屏幕電子教鞭 ePointer'
date: 2026-09-27
type: landing

seo:
  title: '屏幕電子教鞭 ePointer — 在任意軟件界面上自由畫圖和標註'
description: 'ePointer屏幕電子教鞭：在任意軟件界面上自由畫圖標註的虛擬教鞭工具。支持教學、會議及股市分析，獨有的點擊穿透與畫板分頁功能，助您流暢演示不打斷工作。'

sections:
  - block: hero
    id: top
    content:
      eyebrow: '支持 Windows 10/11、macOS 13+'
      title: '在屏幕上[自由畫圖和標註]'
      text: '屏幕電子教鞭是一款簡單強大的虛擬標註工具，支持在任意軟件上自由畫圖、塗鴉與註釋；通過點擊穿透和畫板分頁器等獨家功能，在不打斷工作流程的同時高效提升表達、協作與互動效果。'
      primary_action:
        text: 'Microsoft Store 下載'
        url: 'https://apps.microsoft.com/detail/9NDMS4RC84VM'
        icon: 'hero/computer-desktop'
        style: gradient
      secondary_action:
        text: 'Mac App Store 下載'
        url: 'https://apps.apple.com/cn/app/id1626223968'
        icon: 'hero/device-phone-mobile'
        style: outline
      media:
        type: image
        src: 'epointer-screenshot/epointer-screenshot-zh-hant-01.jpg'
        alt: '屏幕電子教鞭在軟件界面上標註'
    design:
      layout: stacked
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      background:
        color: "#0a0e27"
        gradient:
          type: radial
          start: "rgba(56,120,255,0.45)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]

  - block: markdown
    id: painpoints
    content:
      title: '同時解決同類軟件二大痛點'
      text: |
        1. **畫圖時不能交互，交互時不能畫圖？** —— 由「畫板點擊穿透」解決。
        2. **複雜內容標註要麼靠刪除要麼變得雜亂？** —— 由「畫板分頁器」解決。
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"
      spacing:
        padding: ["4rem", 0, "3rem", 0]

  - block: gallery
    id: screenshots
    content:
      title: '屏幕截圖'
      subtitle: '看看屏幕電子教鞭的實際使用效果。'
      items:
        - src: 'epointer-screenshot/epointer-screenshot-zh-hant-01.jpg'
          alt: '在軟件界面上直接標註'
          caption: '在任意軟件界面上直接標註'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hant-02.jpg'
          alt: '畫板分頁器'
          caption: '畫板分頁器讓複雜標註井井有條'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hant-03.jpg'
          alt: '畫板點擊穿透'
          caption: '點擊穿透，在畫圖與交互間自由切換'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hant-04.jpg'
          alt: '聚光燈與筆跡消逝'
          caption: '聚光燈與筆跡消逝，讓講解更流暢'
        - src: 'epointer-screenshot/epointer_screenshot_05.jpg'
          alt: '黑板與白板'
          caption: '黑板與白板，各提供 9 個分頁'
    design:
      layout: slideshow
      aspect_ratio: wide
      caption_position: below
      lightbox: true
      autoplay: true
      autoplay_interval: 5000

  - block: markdown
    id: introduce
    content:
      title: '屏幕電子教鞭介紹'
      text: |
        屏幕電子教鞭是一款簡單強大的虛擬標註工具，支持在任意軟件上自由畫圖、塗鴉與註釋，可廣泛用於教學標註、遠程會議輔助、在線教育演示、圖解註釋、股市行情分析等等，通過點擊穿透和畫板分頁器等獨家功能，在不打斷工作流程的同時高效提升表達、協作與互動效果。

        軟件提供 3 種畫圖模式（經典模式、靈動模式、凍結模式）、14 組畫圖工具、多個畫筆尺寸、數十個精選顏色及顏色面板、4 種圖形效果（陰影、描邊、虛線、半透明）、畫板分頁器、多重聚光燈、筆跡消逝、多種可視命令模式、黑板白板等衆多功能；通過點擊穿透開關，可以方便的在畫圖和交互間快速切換，解決畫圖與交互的矛盾問題；通過強大的分頁器功能，分層標註、疊加顯示，解決複雜標註雜亂的問題。同時支持對圖形的再編輯（通過手柄調整外觀、尺寸、角度等）、複製、剪切、粘貼、撤銷等常規操作，支持對標註數據的保存和讀取，支持截屏保存，支持全快捷鍵操作，支持完全地自定義快捷鍵。畫筆工具箱支持在屏幕邊緣停靠（自動隱藏和顯示），不佔用空間。
    design:
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: features
    id: features
    content:
      subtitle: '爲什麼選擇屏幕電子教鞭'
      title: '主要功能'
      text: '十二項能力，讓屏幕講解變得輕鬆自如。'
      items:
        - name: '三種畫圖模式'
          icon: 'hero/window'
          description: '經典、靈動、凍結，適用不同場景。'
        - name: '畫板分頁器'
          icon: 'hero/squares-plus'
          description: '解決複雜內容標註的雜亂問題。'
        - name: '畫板點擊穿透'
          icon: 'hero/cursor-arrow-rays'
          description: '解決畫圖與交互的矛盾問題。'
        - name: '多重聚光燈'
          icon: 'hero/light-bulb'
          description: '解決同時突顯多個重點的問題。'
        - name: '四種圖形效果'
          icon: 'hero/sparkles'
          description: '陰影、描邊、虛線、半透明，解決標註圖形不美觀的問題。'
        - name: '筆跡消逝'
          icon: 'hero/clock'
          description: '圖形自動消失，解決手動擦黑板的問題。'
        - name: '14 組畫圖工具'
          icon: 'hero/pencil'
          description: '解決標註圖形不夠豐富的問題。'
        - name: '精選畫筆顏色'
          icon: 'hero/swatch'
          description: '解決畫筆顏色不夠豐富的問題。'
        - name: '黑板、白板'
          icon: 'hero/view-columns'
          description: '各提供 9 個頁面並自動保存數據。'
        - name: '完全的快捷鍵'
          icon: 'hero/command-line'
          description: '支持快捷鍵操作，且幾乎所有快捷鍵都能自定義。'
        - name: '圖形編輯操作'
          icon: 'hero/adjustments-horizontal'
          description: '複製、粘貼、撤銷、圖形調整等。'
        - name: '工具箱邊緣停靠'
          icon: 'hero/arrows-pointing-in'
          description: '工具箱在屏幕邊緣自動隱藏和顯示。'
    design:
      layout: bento
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: cta-image-paragraph
    id: details
    content:
      items:
        - title: '三種畫圖模式'
          text: '經典模式和靈動模式都支持對動畫、視頻、遊戲等動態畫面的標註。'
          feature_icon: check
          features:
            - '**經典模式**：適用於重畫圖輕交互的場景'
            - '**靈動模式**：適用於輕畫圖重交互的場景'
            - '**凍結模式**：針對失去焦點就會自動消失的瞬態界面的標註'
            - '凍結模式在啓動時會凍結屏幕狀態，因此不支持對動態畫面的標註'
          image: 'epointer/epointer_3modes.jpg'
        - title: '畫板分頁器'
          text: '畫板分頁器可以將標註內容分頁進行，每頁的標註都是獨立的，比如第一頁標註尺寸，第二頁標註角度等，最後，可以選擇將部分或全部分頁進行疊加顯示，最終形成完整、複雜的標註結果。通過分頁器可以使解說和標註過程條理清晰，標註結果一目瞭然。'
          feature_icon: check
          features:
            - '提供多達 9 個獨立分頁'
            - '分頁中的標註內容將自動保存和加載'
            - '分頁可獨立顯示，也可以指定多個或全部頁面進行疊加顯示'
            - '分頁可自定義標籤，以明確各分頁的標註內容'
            - '分頁數據可以整體導出保存，以後重新加載使用'
          image: 'epointer/epointer_paginator.jpg'
        - title: '畫板點擊穿透'
          text: '在解說或演示過程中，往往既需要在屏幕上畫圖、標註，也需要與第三方軟件進行交互。屏幕電子教鞭針對這種情況提供了二種方式，可以便捷的在畫圖和交互之間隨意切換；這種切換不需要退出畫圖模式，不會影響已經標註的內容，除非手動清除，所以不會打斷您的工作流程。'
          feature_icon: check
          features:
            - '方式一：提供經典模式和靈動模式的一鍵切換快捷鍵'
            - '方式二：提供臨時開啓或關閉畫板點擊穿透的快捷鍵'
            - '經典模式下，按住快捷鍵可臨時開啓穿透，與第三方軟件交互'
            - '靈動模式下，按住同一快捷鍵可臨時關閉穿透，臨時在屏幕上畫圖'
          image: 'epointer/epointer_clickthrough.jpg'
        - title: '多重聚光燈'
          text: '屏幕電子教鞭的聚光燈分爲圓形和矩形，聚光燈通常用於突顯屏幕中的重點內容。聚光燈工具支持在屏幕中同時繪製一盞或多盞，以突顯多個關注重點。繪製的聚光燈可以通過選取工具重新調整外觀、尺寸和位置等。'
          feature_icon: check
          image: 'epointer/epointer_spotlight.jpg'
        - title: '四種圖形效果'
          text: '屏幕電子教鞭可以爲繪製的圖形增加陰影、描邊、虛線、半透明等四種圖形效果，這些效果可以單獨或疊加使用；圖形效果除了增加圖形的美觀外，還可以應對不同的畫圖需求。'
          feature_icon: check
          features:
            - '**陰影**：讓圖形更美觀、有立體感，突顯圖形效果'
            - '**描邊**：讓圖形適應不同背景，背景色彩繁雜時標註更清晰'
            - '**虛線**：爲路徑類圖形提供虛線效果，與實線圖形進行區分'
            - '**半透明**：搭配畫筆或填充矩形，可以實現對文本的着色效果'
          image: 'epointer/epointer_effects.jpg'
        - title: '筆跡消逝'
          text: '筆跡消逝可以讓繪製的圖形在一段時間後自動消失，免去「擦黑板」的步驟。'
          feature_icon: check
          image: 'epointer/epointer_inkfade.jpg'
        - title: '14 組畫圖工具'
          text: '屏幕電子教鞭提供了豐富的畫圖工具，包括自由曲線、直線、箭頭直線（單箭頭、雙箭頭）、指示箭頭、矩形、圓形、實心矩形、實心圓形、文字、聚光燈、圖標、截圖工具、選取工具、橡皮擦、全屏截圖等，同組工具可以用 Tab 鍵切換。'
          feature_icon: check
          features:
            - '使用選取工具可以重新調整繪製圖形的外觀、尺寸、位置、顏色、效果等'
            - 'macOS 版還提供了區域截屏、放大鏡、預置圖形等工具'
          image: 'epointer/epointer_drawtools.jpg'
        - title: '精選畫筆顏色'
          text: '提供了幾十個精選顏色，無論是黑暗或明亮背景，都可以滿足畫圖需求；同時，還可以通過自定義快捷鍵爲 10 個顏色設置快捷鍵，以便快速切換。'
          feature_icon: check
          image: 'epointer/epointer_colors.jpg'
        - title: '黑板、白板'
          text: '屏幕電子教鞭的黑板、白板各提供 9 個分頁，相當於 18 塊黑板白板。每個分頁中的標註內容會自動保存和加載，分頁中的內容也支持疊加顯示，支持數據導出。'
          feature_icon: check
          image: 'epointer/epointer_boards.jpg'
        - title: '完全的快捷鍵'
          text: '屏幕電子教鞭提供完全地快捷鍵操作，同時，幾乎所有快捷鍵都支持自定義。'
          feature_icon: check
          image: 'epointer/epointer_shortcuts.jpg'
        - title: '圖形編輯操作'
          text: '使用選取工具可以對繪製的圖形進行移動或再編輯，包括重新設置圖形的顏色、效果、尺寸等，通過圖形的調整手柄重新調整圖形的外觀、縮放、角度等。同時，支持圖形的單選和多選，支持對圖形的複製、剪切、粘貼、撤銷等常規操作。'
          feature_icon: check
          image: 'epointer/epointer_edits.jpg'
        - title: '工具箱邊緣停靠'
          text: '將工具箱拖動到屏幕邊緣，可以讓工具箱自動隱藏到邊緣中，當鼠標再次滑過該邊緣處時，就可以自動顯示工具箱。另外，雙擊工具箱的標題欄空白處，可以將工具箱最小化，也可以減少對屏幕的佔用。'
          feature_icon: check
          image: 'epointer/epointer_edgedock.jpg'
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: pricing
    id: versions
    content:
      title: '版本說明'
      subtitle: '注意，macOS 版和 Windows 版可能存在部分功能差異，以下載的軟件爲準。免費版提供的畫圖工具僅包括曲線、直線、填充橢圓、截圖工具、選擇工具、橡皮擦等有限幾個，其它大部分功能無限制，以供測試軟件功能使用。'
      tiers:
        - name: '免費版'
          description: '零成本體驗核心標註能力。'
          price_note: '免費'
          highlight: false
          cta:
            text: '免費下載'
            url: 'https://apps.microsoft.com/detail/9NDMS4RC84VM'
            icon: 'hero/arrow-down-tray'
            style: outline
          features:
            - text: '部分畫圖工具'
              included: true
            - text: '畫板分頁器'
              included: true
            - text: '三種畫圖模式'
              included: true
            - text: '點擊穿透功能'
              included: true
            - text: '四種圖形效果'
              included: true
            - text: '筆跡消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有畫筆顏色'
              included: true
            - text: '未來的部分新功能'
              included: true
        - name: '基礎版'
          description: '解鎖全部畫圖工具。'
          price_note: '應用內購買'
          highlight: false
          features:
            - text: '所有畫圖工具'
              included: true
            - text: '畫板分頁器'
              included: false
            - text: '三種畫圖模式'
              included: true
            - text: '點擊穿透功能'
              included: true
            - text: '四種圖形效果'
              included: true
            - text: '筆跡消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有畫筆顏色'
              included: true
            - text: '未來的部分新功能'
              included: true
        - name: '完整版'
          badge: '推薦'
          description: '現在和未來的所有功能。'
          price_note: '應用內購買'
          highlight: true
          features:
            - text: '所有畫圖工具'
              included: true
            - text: '畫板分頁器'
              included: true
            - text: '三種畫圖模式'
              included: true
            - text: '點擊穿透功能'
              included: true
            - text: '四種圖形效果'
              included: true
            - text: '筆跡消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有畫筆顏色'
              included: true
            - text: '未來的所有新功能'
              included: true

  - block: cta-card
    id: contact
    content:
      title: '聯繫我們'
      text: '任何意見、建議、反饋都可以聯繫我們，聯繫郵箱：oeapp@outlook.com'
      button:
        text: '發送郵件'
        url: 'mailto:oeapp@outlook.com'
        icon: 'hero/envelope'
    design:
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
