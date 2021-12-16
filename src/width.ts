import { FIT, FIT_CONTENT, FULL, MAX, MAX_CONTENT, MIN, MIN_CONTENT, PERCENT100, WIDTH } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class WidthStyle extends Style {
    static override prefixes =  /^w:/;
    static override properties = [WIDTH];
    static override values = {
        [FULL]: PERCENT100,
        [FIT]: FIT_CONTENT,
        [MAX]: MAX_CONTENT,
        [MIN]: MIN_CONTENT
    }
}