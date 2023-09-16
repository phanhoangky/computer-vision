import { animate, style, transition, trigger } from '@angular/animations';

export const drawerSlide = trigger('modalToggle', [
  transition(':enter', [
    style({ transform: 'translate(100%, 0)'}),
    animate('0.3s ease-in', style({ transform: 'translate(0, 0)' })),
  ]),
  transition(':leave', [
    style({ transform: '*', 'box-shadow': "*" }),
    animate('0.3s ease-out', style({ transform: 'translate(100%, 0)' })),
  ]),
]);

export const modalAni = trigger('modalToggle', [
  transition(':enter', [
    style({ transform: 'translate(0, 100px)', opacity: 0, }),
    animate('0.3s ease-in', style({ transform: 'translate(0, 0)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: '*', opacity: '*' }),
    animate('0.3s ease-out', style({ transform: 'translate(0, -100px)', opacity: '0' })),
  ]),
]);
