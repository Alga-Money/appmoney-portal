import {animate, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
	transition('* => *',
		[
			transition(':enter',
				[
					style({opacity: 0}),
					animate('.6s', style({opacity: 1}))
				])
		])
]);
