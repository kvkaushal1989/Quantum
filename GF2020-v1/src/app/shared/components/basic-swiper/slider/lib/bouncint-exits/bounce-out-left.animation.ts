import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

export interface IBounceOutLeftAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 2000px
   */
  translate?: string;
}

const bounceOutLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', easing: 'ease', offset: 0.2 }),
      style({ opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function bounceOutLeftAnimation(options?: IBounceOutLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutLeft', [
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceOutLeft),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          translate: (options && options.translate) || '2000px'
        }
      }
    )
  ]);
}

export function bounceOutLeftOnLeaveAnimation(options?: IBounceOutLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutLeftOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceOutLeft),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          translate: (options && options.translate) || '2000px'
        }
      }
    )
  ]);
}
