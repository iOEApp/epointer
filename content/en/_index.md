---
title: 'ePointer'
date: 2026-09-27
type: landing

seo:
  title: 'ePointer — Draw and annotate freely on any screen'
description: 'ePointer is a powerful virtual annotation tool: draw, doodle and annotate
  freely on top of any app for teaching, meetings and stock chart analysis. Exclusive
  click-through and canvas paginator keep your presentation flowing without interrupting
  your workflow.'

sections:
  - block: hero
    id: top
    content:
      eyebrow: 'For Windows 10/11 and macOS 13+'
      title: '[Draw and annotate] anywhere on your screen'
      text: 'ePointer is a simple yet powerful virtual annotation tool that lets you draw,
        doodle and annotate freely on top of any app. Exclusive features such as
        click-through and the canvas paginator boost expression, collaboration and
        interaction — without interrupting your workflow.'
      primary_action:
        text: 'Download on Microsoft Store'
        url: 'https://apps.microsoft.com/detail/9NDMS4RC84VM'
        icon: 'brands/windows'
        style: gradient
      secondary_action:
        text: 'Download on Mac App Store'
        url: 'https://apps.apple.com/us/app/id1626223968'
        icon: 'brands/apple'
        # Flat brand fill: same primary family as the gradient Microsoft button,
        # but clearly a different treatment (solid vs gradient).
        style: solid
      media:
        type: image
        src: 'epointer-screenshot/epointer_screenshot_en_01.jpg'
        alt: 'ePointer annotating on top of another app'
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
      title: 'Two pain points of similar tools, solved'
      text: |
        1. **No interaction while drawing, no drawing while interacting?** — solved by Canvas Click-through.
        2. **Complex annotations end up messy, or you have to keep deleting them?** — solved by the Canvas Paginator.
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"
      spacing:
        padding: ["4rem", 0, "3rem", 0]

  - block: gallery
    id: screenshots
    content:
      title: 'Screenshots'
      subtitle: 'A look at ePointer in action.'
      items:
        - src: 'epointer-screenshot/epointer_screenshot_en_01.jpg'
          alt: 'Annotating directly on top of another app'
          caption: 'Annotate directly over any app'
        - src: 'epointer-screenshot/epointer_screenshot_en_02.jpg'
          alt: 'Canvas paginator'
          caption: 'The canvas paginator keeps complex annotations tidy'
        - src: 'epointer-screenshot/epointer_screenshot_en_03.jpg'
          alt: 'Canvas click-through'
          caption: 'Click-through switches between drawing and interacting'
        - src: 'epointer-screenshot/epointer_screenshot_en_04.jpg'
          alt: 'Spotlight and ink fading'
          caption: 'Spotlight and ink fading keep a live explanation flowing'
        - src: 'epointer-screenshot/epointer_screenshot_05.jpg'
          alt: 'Blackboard and whiteboard'
          caption: 'Blackboard and whiteboard, 9 pages each'
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
      title: 'Introduction to ePointer'
      text: |
        ePointer is a simple and powerful virtual annotation tool. It supports free drawing, doodling and annotation on top of any app, and can be widely used for teaching annotation, remote meeting assistance, online education presentations, illustrated annotations, stock market analysis and more. With exclusive features such as click-through and the canvas paginator, it improves expression, collaboration and interaction without interrupting your workflow.

        The app provides 3 drawing modes (classic, dynamic and freeze), 14 sets of drawing tools, multiple brush sizes, dozens of curated colors plus a color panel, 4 graphic effects (shadow, stroke, dotted line and translucent), the canvas paginator, multi-spotlight, ink fading, multiple visual command modes, blackboard and whiteboard, and much more. With the click-through switch you can move between drawing and interaction instantly, resolving the conflict between the two. With the powerful paginator you can annotate in layers and overlay them, solving the clutter problem of complex annotations. It also supports re-editing shapes (adjusting appearance, size and angle through handles), copying, cutting, pasting and undoing, saving and loading annotation data, saving screenshots, full keyboard operation, and fully customizable shortcuts. The brush toolbox can dock to the edge of the screen, where it hides and reappears automatically without taking up space.
    design:
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: features
    id: features
    content:
      subtitle: 'Why ePointer'
      title: 'Key features'
      text: 'Twelve capabilities that make on-screen explanation effortless.'
      items:
        - name: '3 Drawing Modes'
          icon: 'hero/window'
          description: 'Classic, dynamic and freeze modes cover different scenarios.'
        - name: 'Canvas Paginator'
          icon: 'hero/squares-plus'
          description: 'Solves the clutter problem when annotating complex content.'
        - name: 'Canvas Click-through'
          icon: 'hero/cursor-arrow-rays'
          description: 'Solves the conflict between drawing and interacting.'
        - name: 'Multi-Spotlight'
          icon: 'hero/light-bulb'
          description: 'Highlights several key areas of the screen at the same time.'
        - name: '4 Graphic Effects'
          icon: 'hero/sparkles'
          description: 'Shadow, stroke, dotted line and translucent — for better looking annotations.'
        - name: 'Ink Fading'
          icon: 'hero/clock'
          description: 'Annotations fade away automatically, so you never wipe the board by hand.'
        - name: '14 Sets of Drawing Tools'
          icon: 'hero/pencil'
          description: 'A rich set of shapes for every annotation need.'
        - name: 'Curated Brush Colors'
          icon: 'hero/swatch'
          description: 'Dozens of selected colors for dark or bright backgrounds alike.'
        - name: 'Blackboard & Whiteboard'
          icon: 'hero/view-columns'
          description: '9 pages each, with data saved automatically.'
        - name: 'Full Shortcut Support'
          icon: 'hero/command-line'
          description: 'Operate entirely by keyboard and remap almost every shortcut.'
        - name: 'Shape Editing'
          icon: 'hero/adjustments-horizontal'
          description: 'Copy, paste, undo and reshape anything you have drawn.'
        - name: 'Toolbox Edge Docking'
          icon: 'hero/arrows-pointing-in'
          description: 'The toolbox hides into the screen edge and reappears on hover.'
    design:
      layout: bento
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: cta-image-paragraph
    id: details
    content:
      items:
        - title: '3 drawing modes'
          text: 'Both classic mode and dynamic mode support annotating animations, videos, games and other moving images.'
          feature_icon: check
          features:
            - '**Classic mode**: for scenes that are drawing-heavy and interaction-light'
            - '**Dynamic mode**: for scenes that are drawing-light and interaction-heavy'
            - '**Freeze mode**: annotates transient interfaces that vanish as soon as they lose focus'
            - 'Freeze mode freezes the screen on start, so it does not support annotating moving images'
          image: 'epointer/epointer_3modes_en.jpg'
        - title: 'Canvas paginator'
          text: 'The canvas paginator splits annotation into pages, each one independent — dimensions on page one, angles on page two, for example. Finally you can overlay some or all of the pages to build a complete, complex annotation. The paginator keeps the explanation and the annotation orderly, with results that read at a glance.'
          feature_icon: check
          features:
            - 'Up to 9 independent pages'
            - 'Annotations on each page are saved and loaded automatically'
            - 'Pages can be shown individually, or several or all of them overlaid'
            - 'Each page can be labelled to make its content explicit'
            - 'Page data can be exported as a whole and reloaded later'
          image: 'epointer/epointer_paginator_en.jpg'
        - title: 'Canvas click-through'
          text: 'While explaining or demonstrating, you often need to draw and annotate on screen *and* interact with a third-party app. ePointer offers two ways to switch freely between drawing and interaction. The switch does not exit drawing mode and does not affect what you have already annotated unless you clear it manually, so your workflow is never interrupted.'
          feature_icon: check
          features:
            - 'Option 1: a one-key shortcut that toggles between classic and dynamic mode'
            - 'Option 2: a shortcut that temporarily enables or disables click-through'
            - 'In classic mode, hold the key to open click-through and interact with other apps'
            - 'In dynamic mode, hold the same key to close click-through and draw temporarily'
          image: 'epointer/epointer_clickthrough.jpg'
        - title: 'Multi-spotlight'
          text: 'ePointer spotlights come in circular and rectangular shapes and are usually used to highlight key content on screen. You can draw one or several spotlights at the same time to highlight multiple points of interest, then readjust their appearance, size and position with the selection tool.'
          feature_icon: check
          image: 'epointer/epointer_spotlight_en.jpg'
        - title: '4 graphic effects'
          text: 'ePointer can add four effects to any shape you draw — shadow, stroke, dotted line and translucent — used alone or combined. Besides looking better, each effect serves a different annotation need.'
          feature_icon: check
          features:
            - '**Shadow**: adds depth and makes a shape stand out'
            - '**Stroke**: adapts a shape to busy backgrounds so annotations stay readable'
            - '**Dotted line**: distinguishes path shapes from solid ones'
            - '**Translucent**: combined with the brush or filled rectangle, tints underlying text'
          image: 'epointer/epointer_effects.jpg'
        - title: 'Ink fading'
          text: 'Ink fading lets shapes disappear automatically after a set period of time, so you can skip the "wipe the blackboard" step entirely.'
          feature_icon: check
          image: 'epointer/epointer_inkfade_en.jpg'
        - title: '14 sets of drawing tools'
          text: 'ePointer ships with a rich set of drawing tools: free curve, line, arrowed line (single and double), indicator arrow, rectangle, circle, solid rectangle, solid circle, text, spotlight, icon, screenshot, selection tool, eraser, full-screen screenshot and more. Tools in the same group can be cycled with the Tab key.'
          feature_icon: check
          features:
            - 'Use the selection tool to readjust appearance, size, position, color and effects'
            - 'The macOS version also adds area screenshot, magnifier and preset shapes'
          image: 'epointer/epointer_drawtools.jpg'
        - title: 'Curated brush colors'
          text: 'Dozens of curated colors cover both dark and bright backgrounds. You can also assign shortcuts to 10 of them for instant switching.'
          feature_icon: check
          image: 'epointer/epointer_colors.jpg'
        - title: 'Blackboard and whiteboard'
          text: 'The blackboard and whiteboard each provide 9 pages — 18 boards in total. Annotations on every page are saved and loaded automatically, pages can be overlaid, and data can be exported.'
          feature_icon: check
          image: 'epointer/epointer_boards.jpg'
        - title: 'Fully customizable shortcuts'
          text: 'ePointer can be driven entirely from the keyboard, and almost every shortcut can be customized.'
          feature_icon: check
          image: 'epointer/epointer_shortcuts.jpg'
        - title: 'Shape editing'
          text: 'With the selection tool you can move or re-edit anything you have drawn: reset its color, effects and size, or readjust its appearance, scale and angle using the adjustment handles. Single and multiple selection are both supported, along with the usual copy, cut, paste and undo operations.'
          feature_icon: check
          image: 'epointer/epointer_edits_en.jpg'
        - title: 'Toolbox edge docking'
          text: 'Drag the toolbox to the edge of the screen and it hides away automatically; move the mouse back over that edge and it reappears. Double-clicking a blank spot in the toolbox title bar minimizes it, freeing up even more screen space.'
          feature_icon: check
          image: 'epointer/epointer_edgedock_en.jpg'
    design:
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: pricing
    id: versions
    content:
      title: 'Version information'
      subtitle: 'Note that the macOS and Windows versions may differ slightly in features — the downloaded app is authoritative. The free version ships only a limited set of drawing tools (curve, line, filled ellipse, screenshot, selection tool, eraser); most other features are unrestricted so you can evaluate the app.'
      tiers:
        - name: 'Free version'
          description: 'Try the core annotation experience at no cost.'
          price_note: 'Free'
          highlight: false
          features:
            - text: 'Partial drawing tools'
              included: true
            - text: 'Canvas paginator'
              included: true
            - text: '3 drawing modes'
              included: true
            - text: 'Canvas click-through'
              included: true
            - text: '4 graphic effects'
              included: true
            - text: 'Ink fading'
              included: true
            - text: 'Blackboard and whiteboard'
              included: true
            - text: 'All brush colors'
              included: true
            - text: 'Some upcoming new features'
              included: true
        - name: 'Basic version'
          description: 'All drawing tools, unlocked in the app.'
          price_note: 'In-app purchase'
          highlight: false
          features:
            - text: 'All drawing tools'
              included: true
            - text: 'Canvas paginator'
              included: false
            - text: '3 drawing modes'
              included: true
            - text: 'Canvas click-through'
              included: true
            - text: '4 graphic effects'
              included: true
            - text: 'Ink fading'
              included: true
            - text: 'Blackboard and whiteboard'
              included: true
            - text: 'All brush colors'
              included: true
            - text: 'Some upcoming new features'
              included: true
        - name: 'Full version'
          badge: 'Recommended'
          description: 'Everything ePointer has, now and in the future.'
          price_note: 'In-app purchase'
          highlight: true
          features:
            - text: 'All drawing tools'
              included: true
            - text: 'Canvas paginator'
              included: true
            - text: '3 drawing modes'
              included: true
            - text: 'Canvas click-through'
              included: true
            - text: '4 graphic effects'
              included: true
            - text: 'Ink fading'
              included: true
            - text: 'Blackboard and whiteboard'
              included: true
            - text: 'All brush colors'
              included: true
            - text: 'All upcoming new features'
              included: true

  - block: cta-card
    id: contact
    content:
      title: 'Contact us'
      text: 'Any opinion, suggestion or feedback is welcome — reach us at oeapp@outlook.com'
      button:
        text: 'Send an email'
        url: 'mailto:oeapp@outlook.com'
        icon: 'hero/envelope'
    design:
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
