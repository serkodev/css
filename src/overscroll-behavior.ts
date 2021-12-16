import { DASH, OVERSCROLL_BEHAVIOR, X, Y } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class OverscrollBehaviorStyle extends Style {
    static override prefixes = /^overscroll-behavior(-x|-y)?:/;
    static override supportFullName = false;
    override get properties(): { [key: string]: any } {
        switch (this.prefix.slice(-2, -1)) {
            case X:
                return { [OVERSCROLL_BEHAVIOR + DASH + X]: this };
            case Y:
                return { [OVERSCROLL_BEHAVIOR + DASH + Y]: this };
            default:
                return { [OVERSCROLL_BEHAVIOR]: this };
        }
    }
}