---
title: '屏幕电子教鞭 ePointer'
date: 2026-09-27
type: landing

seo:
  title: '屏幕电子教鞭 ePointer — 在任意软件界面上自由画图和标注'
description: 'ePointer屏幕电子教鞭：在任意软件界面上自由画图标注的虚拟教鞭工具。支持教学、会议及股市分析，独有的点击穿透与画板分页功能，助您流畅演示不打断工作。'

sections:
  - block: hero
    id: top
    content:
      eyebrow: '支持 Windows 10/11、macOS 13+'
      title: '在屏幕上[自由画图和标注]'
      text: '屏幕电子教鞭是一款简单强大的虚拟标注工具，支持在任意软件上自由画图、涂鸦与注释；通过点击穿透和画板分页器等独家功能，在不打断工作流程的同时高效提升表达、协作与互动效果。'
      primary_action:
        text: 'Microsoft Store 下载'
        url: 'https://apps.microsoft.com/detail/9NDMS4RC84VM'
        icon: 'brands/windows'
        style: gradient
      secondary_action:
        text: 'Mac App Store 下载'
        url: 'https://apps.apple.com/cn/app/id1626223968'
        icon: 'brands/apple'
        # 纯色填充：与 Microsoft Store 的渐变按钮同属主色系，但视觉处理不同（纯色 vs 渐变）
        style: solid
      media:
        type: image
        src: 'epointer-screenshot/epointer-screenshot-zh-hans-01.jpg'
        alt: '屏幕电子教鞭在软件界面上标注'
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
      title: '同时解决同类软件二大痛点'
      text: |
        1. **画图时不能交互，交互时不能画图？** —— 由「画板点击穿透」解决。
        2. **复杂内容标注要么靠删除要么变得杂乱？** —— 由「画板分页器」解决。
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"
      spacing:
        padding: ["4rem", 0, "3rem", 0]

  - block: gallery
    id: screenshots
    content:
      title: '屏幕截图'
      subtitle: '看看屏幕电子教鞭的实际使用效果。'
      items:
        - src: 'epointer-screenshot/epointer-screenshot-zh-hans-01.jpg'
          alt: '在软件界面上直接标注'
          caption: '在任意软件界面上直接标注'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hans-02.jpg'
          alt: '画板分页器'
          caption: '画板分页器让复杂标注井井有条'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hans-03.jpg'
          alt: '画板点击穿透'
          caption: '点击穿透,在画图与交互间自由切换'
        - src: 'epointer-screenshot/epointer-screenshot-zh-hans-04.jpg'
          alt: '聚光灯与笔迹消逝'
          caption: '聚光灯与笔迹消逝,让讲解更流畅'
        - src: 'epointer-screenshot/epointer_screenshot_05.jpg'
          alt: '黑板与白板'
          caption: '黑板与白板,各提供 9 个分页'
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
      title: '屏幕电子教鞭介绍'
      text: |
        屏幕电子教鞭是一款简单强大的虚拟标注工具，支持在任意软件上自由画图、涂鸦与注释，可广泛用于教学标注、远程会议辅助、在线教育演示、图解注释、股市行情分析等等，通过点击穿透和画板分页器等独家功能，在不打断工作流程的同时高效提升表达、协作与互动效果。

        软件提供 3 种画图模式（经典模式、灵动模式、冻结模式）、14 组画图工具、多个画笔尺寸、数十个精选颜色及颜色面板、4 种图形效果（阴影、描边、虚线、半透明）、画板分页器、多重聚光灯、笔迹消逝、多种可视命令模式、黑板白板等众多功能；通过点击穿透开关，可以方便的在画图和交互间快速切换，解决画图与交互的矛盾问题；通过强大的分页器功能，分层标注、叠加显示，解决复杂标注杂乱的问题。同时支持对图形的再编辑（通过手柄调整外观、尺寸、角度等）、复制、剪切、粘贴、撤销等常规操作，支持对标注数据的保存和读取，支持截屏保存，支持全快捷键操作，支持完全地自定义快捷键。画笔工具箱支持在屏幕边缘停靠（自动隐藏和显示），不占用空间。
    design:
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: features
    id: features
    content:
      subtitle: '为什么选择屏幕电子教鞭'
      title: '主要功能'
      text: '十二项能力，让屏幕讲解变得轻松自如。'
      items:
        - name: '三种画图模式'
          icon: 'hero/window'
          description: '经典、灵动、冻结，适用不同场景。'
        - name: '画板分页器'
          icon: 'hero/squares-plus'
          description: '解决复杂内容标注的杂乱问题。'
        - name: '画板点击穿透'
          icon: 'hero/cursor-arrow-rays'
          description: '解决画图与交互的矛盾问题。'
        - name: '多重聚光灯'
          icon: 'hero/light-bulb'
          description: '解决同时突显多个重点的问题。'
        - name: '四种图形效果'
          icon: 'hero/sparkles'
          description: '阴影、描边、虚线、半透明，解决标注图形不美观的问题。'
        - name: '笔迹消逝'
          icon: 'hero/clock'
          description: '图形自动消失，解决手动擦黑板的问题。'
        - name: '14 组画图工具'
          icon: 'hero/pencil'
          description: '解决标注图形不够丰富的问题。'
        - name: '精选画笔颜色'
          icon: 'hero/swatch'
          description: '解决画笔颜色不够丰富的问题。'
        - name: '黑板、白板'
          icon: 'hero/view-columns'
          description: '各提供 9 个页面并自动保存数据。'
        - name: '完全的快捷键'
          icon: 'hero/command-line'
          description: '支持快捷键操作，且几乎所有快捷键都能自定义。'
        - name: '图形编辑操作'
          icon: 'hero/adjustments-horizontal'
          description: '复制、粘贴、撤销、图形调整等。'
        - name: '工具箱边缘停靠'
          icon: 'hero/arrows-pointing-in'
          description: '工具箱在屏幕边缘自动隐藏和显示。'
    design:
      layout: bento
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: cta-image-paragraph
    id: details
    content:
      items:
        - title: '三种画图模式'
          text: '经典模式和灵动模式都支持对动画、视频、游戏等动态画面的标注。'
          feature_icon: check
          features:
            - '**经典模式**：适用于重画图轻交互的场景'
            - '**灵动模式**：适用于轻画图重交互的场景'
            - '**冻结模式**：针对失去焦点就会自动消失的瞬态界面的标注'
            - '冻结模式在启动时会冻结屏幕状态，因此不支持对动态画面的标注'
          image: 'epointer/epointer_3modes.jpg'
        - title: '画板分页器'
          text: '画板分页器可以将标注内容分页进行，每页的标注都是独立的，比如第一页标注尺寸，第二页标注角度等，最后，可以选择将部分或全部分页进行叠加显示，最终形成完整、复杂的标注结果。通过分页器可以使解说和标注过程条理清晰，标注结果一目了然。'
          feature_icon: check
          features:
            - '提供多达 9 个独立分页'
            - '分页中的标注内容将自动保存和加载'
            - '分页可独立显示，也可以指定多个或全部页面进行叠加显示'
            - '分页可自定义标签，以明确各分页的标注内容'
            - '分页数据可以整体导出保存，以后重新加载使用'
          image: 'epointer/epointer_paginator.jpg'
        - title: '画板点击穿透'
          text: '在解说或演示过程中，往往既需要在屏幕上画图、标注，也需要与第三方软件进行交互。屏幕电子教鞭针对这种情况提供了两种方式，可以便捷地在画图和交互之间随意切换；这种切换不需要退出画图模式，不会影响已经标注的内容，除非手动清除，所以不会打断您的工作流程。'
          feature_icon: check
          features:
            - '方式一：提供经典模式和灵动模式的一键切换快捷键'
            - '方式二：提供临时开启或关闭画板点击穿透的快捷键'
            - '经典模式下，按住快捷键可临时开启穿透，与第三方软件交互'
            - '灵动模式下，按住同一快捷键可临时关闭穿透，临时在屏幕上画图'
          image: 'epointer/epointer_clickthrough.jpg'
        - title: '多重聚光灯'
          text: '屏幕电子教鞭的聚光灯分为圆形和矩形，聚光灯通常用于突显屏幕中的重点内容。聚光灯工具支持在屏幕中同时绘制一盏或多盏，以突显多个关注重点。绘制的聚光灯可以通过选取工具重新调整外观、尺寸和位置等。'
          feature_icon: check
          image: 'epointer/epointer_spotlight.jpg'
        - title: '四种图形效果'
          text: '屏幕电子教鞭可以为绘制的图形增加阴影、描边、虚线、半透明等四种图形效果，这些效果可以单独或叠加使用；图形效果除了增加图形的美观外，还可以应对不同的画图需求。'
          feature_icon: check
          features:
            - '**阴影**：让图形更美观、有立体感，突显图形效果'
            - '**描边**：让图形适应不同背景，背景色彩繁杂时标注更清晰'
            - '**虚线**：为路径类图形提供虚线效果，与实线图形进行区分'
            - '**半透明**：搭配画笔或填充矩形，可以实现对文本的着色效果'
          image: 'epointer/epointer_effects.jpg'
        - title: '笔迹消逝'
          text: '笔迹消逝可以让绘制的图形在一段时间后自动消失，免去“擦黑板”的步骤。'
          feature_icon: check
          image: 'epointer/epointer_inkfade.jpg'
        - title: '14 组画图工具'
          text: '屏幕电子教鞭提供了丰富的画图工具，包括自由曲线、直线、箭头直线（单箭头、双箭头）、指示箭头、矩形、圆形、实心矩形、实心圆形、文字、聚光灯、图标、截图工具、选取工具、橡皮擦、全屏截图等，同组工具可以用 Tab 键切换。'
          feature_icon: check
          features:
            - '使用选取工具可以重新调整绘制图形的外观、尺寸、位置、颜色、效果等'
            - 'macOS 版还提供了区域截屏、放大镜、预置图形等工具'
          image: 'epointer/epointer_drawtools.jpg'
        - title: '精选画笔颜色'
          text: '提供了几十个精选颜色，无论是黑暗或明亮背景，都可以满足画图需求；同时，还可以通过自定义快捷键为 10 个颜色设置快捷键，以便快速切换。'
          feature_icon: check
          image: 'epointer/epointer_colors.jpg'
        - title: '黑板、白板'
          text: '屏幕电子教鞭的黑板、白板各提供 9 个分页，相当于 18 块黑板白板。每个分页中的标注内容会自动保存和加载，分页中的内容也支持叠加显示，支持数据导出。'
          feature_icon: check
          image: 'epointer/epointer_boards.jpg'
        - title: '完全的快捷键'
          text: '屏幕电子教鞭提供完全的快捷键操作，同时，几乎所有快捷键都支持自定义。'
          feature_icon: check
          image: 'epointer/epointer_shortcuts.jpg'
        - title: '图形编辑操作'
          text: '使用选取工具可以对绘制的图形进行移动或再编辑，包括重新设置图形的颜色、效果、尺寸等，通过图形的调整手柄重新调整图形的外观、缩放、角度等。同时，支持图形的单选和多选，支持对图形的复制、剪切、粘贴、撤销等常规操作。'
          feature_icon: check
          image: 'epointer/epointer_edits.jpg'
        - title: '工具箱边缘停靠'
          text: '将工具箱拖动到屏幕边缘，可以让工具箱自动隐藏到边缘中，当鼠标再次滑过该边缘处时，就可以自动显示工具箱。另外，双击工具箱的标题栏空白处，可以将工具箱最小化，也可以减少对屏幕的占用。'
          feature_icon: check
          image: 'epointer/epointer_edgedock.jpg'
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: pricing
    id: versions
    content:
      title: '版本说明'
      subtitle: '注意，macOS 版和 Windows 版可能存在部分功能差异，以下载的软件为准。免费版提供的画图工具仅包括曲线、直线、填充椭圆、截图工具、选择工具、橡皮擦等有限几个，其它大部分功能无限制，以供测试软件功能使用。'
      tiers:
        - name: '免费版'
          description: '零成本体验核心标注能力。'
          price_note: '免费'
          highlight: false
          features:
            - text: '部分画图工具'
              included: true
            - text: '画板分页器'
              included: true
            - text: '三种画图模式'
              included: true
            - text: '点击穿透功能'
              included: true
            - text: '四种图形效果'
              included: true
            - text: '笔迹消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有画笔颜色'
              included: true
            - text: '未来的部分新功能'
              included: true
        - name: '基础版'
          description: '解锁全部画图工具。'
          price_note: '应用内购买'
          highlight: false
          features:
            - text: '所有画图工具'
              included: true
            - text: '画板分页器'
              included: false
            - text: '三种画图模式'
              included: true
            - text: '点击穿透功能'
              included: true
            - text: '四种图形效果'
              included: true
            - text: '笔迹消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有画笔颜色'
              included: true
            - text: '未来的部分新功能'
              included: true
        - name: '完整版'
          badge: '推荐'
          description: '现在和未来的全部功能。'
          price_note: '应用内购买'
          highlight: true
          features:
            - text: '所有画图工具'
              included: true
            - text: '画板分页器'
              included: true
            - text: '三种画图模式'
              included: true
            - text: '点击穿透功能'
              included: true
            - text: '四种图形效果'
              included: true
            - text: '笔迹消逝'
              included: true
            - text: '黑板、白板'
              included: true
            - text: '所有画笔颜色'
              included: true
            - text: '未来的所有新功能'
              included: true

  - block: cta-card
    id: contact
    content:
      title: '联系我们'
      text: '任何意见、建议、反馈都可以联系我们，联系邮箱：oeapp@outlook.com'
      button:
        text: '发送邮件'
        url: 'mailto:oeapp@outlook.com'
        icon: 'hero/envelope'
    design:
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
