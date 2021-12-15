import { FIXED, POSITION, STATIC, STICKY } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class PositionStyle extends MasterStyle {
    static override properties = [POSITION];
    static override semantics = {
        [STATIC]: STATIC,
        [FIXED]: FIXED,
        'abs': 'absolute',
        'rel': 'relative',
        [STICKY]: STICKY
    }
}