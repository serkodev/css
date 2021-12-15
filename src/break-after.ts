import { MasterStyle } from '@master/style';
import { AFTER, BREAK, DASH } from './constants/css-property-keyword';

export class BreakAfterStyle extends MasterStyle {
    static override properties = [BREAK + DASH + AFTER];
}