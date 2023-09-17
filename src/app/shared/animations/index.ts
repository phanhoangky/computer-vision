import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const drawerSlide = trigger('modalToggle', [
  transition(':enter', [
    style({ transform: 'translate(100%, 0)' }),
    animate('0.3s ease-in', style({ transform: 'translate(0, 0)' })),
  ]),
  transition(':leave', [
    style({ transform: '*', 'box-shadow': '*' }),
    animate('0.3s ease-out', style({ transform: 'translate(100%, 0)' })),
  ]),
]);

export const modalAni = trigger('modalToggle', [
  transition(':enter', [
    style({ transform: 'translate(0, 100px)', opacity: 0 }),
    animate(
      '0.3s ease-in',
      style({ transform: 'translate(0, 0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: '*', opacity: '*' }),
    animate(
      '0.3s ease-out',
      style({ transform: 'translate(0, -100px)', opacity: '0' })
    ),
  ]),
]);

export const popoverMenu = trigger('scaleUp', [
  // transition('* <=> *', [
  //   query(
  //     ':enter',
  //     [
  //       style({ transform: 'scale(0)', opacity: 0 }),
  //       animate('0.3s ease-in', style({ transform: 'scale(1)', opacity: 1 })),
  //     ],
  //     { optional: true }
  //   ),
  //   query(
  //     ':leave',
  //     [
  //       style({ transform: '*', opacity: '*' }),
  //       animate('0.3s ease-out', style({ transform: 'scale(0)', opacity: 0 })),
  //     ],
  //     { optional: true }
  //   ),
  // ]),
  transition(':enter', [
    style({
      'transform-origin': 'top right',
      transform: 'scale(0) translate(0,-100%)',
      opacity: 0,
    }),
    animate('0.3s ease-in', style({ transform: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: '*', opacity: '*' }),
    animate(
      '0.3s ease-out',
      style({
        'transform-origin': 'top right',
        transform: 'scale(0) translate(0, -200%)',
        opacity: 0,
      })
    ),
  ]),
]);
