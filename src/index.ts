/**
 * Components
 */
export { m } from "./render/dom/minimal-component"
export { AnimatePresence } from "./components/AnimatePresence"
export { AnimateSharedLayout } from "./components/AnimateSharedLayout"
export { HTMLVisualElement } from "./render/dom/HTMLVisualElement"

// TWEAKED PART BELOW - adapted from https://github.com/framer/motion/issues/364#issuecomment-723137822
import { motion as origMotion, createDomMotionComponent } from "./render/dom"

// Using the same Proxy polyfill checks as proxy-polyfill
import { proxyDefined } from "./has-proxy"

import {
    htmlElements,
    svgElements,
} from "./render/dom/utils/supported-elements"
const createNonProxyMotion = () => {
    let motionProxy = {
        custom: (component: any) => {
            createDomMotionComponent(component)
        },
    }
    motionProxy = htmlElements.reduce((acc, key) => {
        acc[key] = createDomMotionComponent(key)
        return acc
    }, motionProxy)
    motionProxy = svgElements.reduce((acc, key) => {
        acc[key] = createDomMotionComponent(key)
        return acc
    }, motionProxy)
    return motionProxy
}

const motion = proxyDefined ? origMotion : createNonProxyMotion()
export { motion, createDomMotionComponent }

/**
 * Features
 */
export { Animation as AnimationFeature } from "./motion/features/animation"
export { Drag as DragFeature } from "./motion/features/drag"
export { Exit as ExitFeature } from "./motion/features/exit"
export { Gestures as GesturesFeature } from "./motion/features/gestures"
export { AnimateLayout as AnimateLayoutFeature } from "./motion/features/layout/Animate"

/**
 * Motion values
 */
export { useMotionValue } from "./value/use-motion-value"
export { useMotionTemplate } from "./value/use-motion-template"
export { MotionValue, motionValue, PassiveEffect, Subscriber } from "./value"
export { resolveMotionValue } from "./value/utils/resolve-motion-value"
export { useTransform } from "./value/use-transform"
export { useSpring } from "./value/use-spring"
export { useElementScroll } from "./value/scroll/use-element-scroll"
export { useViewportScroll } from "./value/scroll/use-viewport-scroll"

/**
 * Accessibility
 */
export { useReducedMotion } from "./utils/use-reduced-motion"

/**
 * Utils
 */
export {
    AnimationControls,
    animationControls,
} from "./animation/AnimationControls"
export { useAnimation } from "./animation/use-animation"
export { animate } from "./animation/animate"
export { animateVisualElement } from "./render/VisualElement/utils/animation"
export {
    HoverHandlers,
    TapHandlers,
    PanHandlers,
    FocusHandlers,
    TapInfo,
    PanInfo,
    GestureHandlers,
    useTapGesture,
    usePanGesture,
    useGestures,
} from "./gestures"
export { useCycle } from "./utils/use-cycle"
export { transform } from "./utils/transform"
export { isValidMotionProp } from "./motion/utils/valid-prop"
export {
    usePresence,
    useIsPresent,
} from "./components/AnimatePresence/use-presence"
export {
    useDragControls,
    DragControls,
} from "./gestures/drag/use-drag-controls"
export { useDomEvent } from "./events/use-dom-event"
export { useExternalRef } from "./motion/utils/use-external-ref"
export { createMotionComponent } from "./motion"
export { addScaleCorrection } from "./render/dom/layout/scale-correction"

/**
 * Contexts
 */
export {
    MotionConfig,
    MotionConfigContext,
} from "./motion/context/MotionConfigContext"
export { PresenceContext } from "./components/AnimatePresence/PresenceContext"
export { LayoutGroupContext } from "./components/AnimateSharedLayout/LayoutGroupContext"
export { useVariantContext } from "./motion/context/MotionContext"

/**
 * Types
 */
export {
    HTMLMotionProps,
    SVGMotionProps,
    SVGAttributesAsMotionValues,
    ForwardRefComponent,
} from "./render/dom/types"
export { CustomDomComponent } from "./render/dom"
export { ScrollMotionValues } from "./value/scroll/utils"
export {
    AnimationProps,
    MotionProps,
    MotionCallbacks,
    MotionAdvancedProps,
    MotionStyle,
    MotionTransform,
    VariantLabels,
    RelayoutInfo,
    ResolveLayoutTransition,
} from "./motion/types"
export {
    Orchestration,
    Repeat,
    Tween,
    Spring,
    Keyframes,
    Inertia,
    None,
    EasingFunction,
    Target,
    TargetAndTransition,
    Transition,
    ResolvedKeyframesTarget,
    KeyframesTarget,
    CustomValueType,
    ResolvedSingleTarget,
    SingleTarget,
    ResolvedValueTarget,
    ValueTarget,
    Variant,
    Variants,
} from "./types"
export { EventInfo } from "./events/types"
export { MotionFeature, FeatureProps } from "./motion/features/types"
export { DraggableProps, DragHandlers } from "./gestures/drag/types"
export { LayoutProps } from "./motion/features/layout/types"
export { AnimatePresenceProps } from "./components/AnimatePresence/types"
export { SharedLayoutProps } from "./components/AnimateSharedLayout/types"
export {
    SharedLayoutAnimationConfig,
    VisibilityAction,
} from "./components/AnimateSharedLayout/types"
export {
    SharedLayoutSyncMethods,
    SharedLayoutContext,
    FramerTreeLayoutContext,
    SyncLayoutLifecycles,
    createBatcher,
} from "./components/AnimateSharedLayout/SharedLayoutContext"
export * from "./types/geometry"

/**
 * Deprecated
 */
export { useAnimatedState as useDeprecatedAnimatedState } from "./animation/use-animated-state"
export { useInvertedScale as useDeprecatedInvertedScale } from "./value/use-inverted-scale"
