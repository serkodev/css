import { COLOR } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class FontColorStyle extends Style {
    static override prefixes =  /^(f(ont)?-)?color:/;
    static override properties = [COLOR];
}