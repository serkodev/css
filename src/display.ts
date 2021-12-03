import { BLOCK, CONTENTS, DASH, DISPLAY, FLEX, GRID, INLINE } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class MasterDisplayStyle extends MasterStyle {
    static override prefixes = /^(display|d):/;
    static override properties = [DISPLAY];
    static override semantics = {
        [BLOCK]: BLOCK,
        [INLINE + DASH + BLOCK]: INLINE + DASH + BLOCK,
        [INLINE]: INLINE,
        [FLEX]: FLEX,
        [INLINE + DASH + FLEX]: INLINE + DASH + FLEX,
        [GRID]: GRID,
        [INLINE + DASH + GRID]: INLINE + DASH + GRID,
        [CONTENTS]: CONTENTS
    }
}