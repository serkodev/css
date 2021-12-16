import { COLUMN, DASH, GRID, SPAN } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class GridColumnStyle extends Style {
    static override prefixes = /^grid-col(umn)?(-span)?:/;
    static override properties = [GRID + DASH + COLUMN];
    static override defaultUnit = '';
    static override supportFullName = false;
    override get parseValue() {
        return this.prefix.slice(-5, -1) === 'span' && this.value !== 'auto'
            ? SPAN + ' ' + this.value + '/' + SPAN + ' ' + this.value
            : this.value;
    }
}