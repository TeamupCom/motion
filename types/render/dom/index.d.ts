import * as React from "react"
import { MotionProps } from "../../motion"
import { HTMLMotionComponents, SVGMotionComponents } from "./types"
import { MotionFeature } from "../../motion/features/types"
/**
 * I'd rather the return type of `custom` to be implicit but this throws
 * incorrect relative paths in the exported types and API Extractor throws
 * a wobbly.
 */
export declare type CustomDomComponent<Props> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Props & MotionProps> &
        React.RefAttributes<SVGElement | HTMLElement>
>
declare type MotionComponents = HTMLMotionComponents & SVGMotionComponents
declare type CustomMotionComponent = {
    custom: <Props>(
        Component: string | React.ComponentType<Props>
    ) => CustomDomComponent<Props>
}
export declare type Motion = MotionComponents & CustomMotionComponent
/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion.custom(Component)
 * ```
 *
 * @public
 */
export declare function createMotionProxy(
    defaultFeatures: MotionFeature[]
): Motion
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
export declare const motion: Motion
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
export declare function createDomMotionComponent<
    T extends keyof MotionComponents
>(key: T): MotionComponents[T]
export {}
