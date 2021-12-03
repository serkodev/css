import { DASH, PROPERTY, TRANSITION } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class MasterTransitionPropertyStyle extends MasterStyle {
    static override prefixes =  /^(transition-property|~property):/;
    static override properties = [TRANSITION + DASH + PROPERTY];
}