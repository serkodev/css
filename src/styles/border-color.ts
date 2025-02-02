import { Style } from '../style';
import { BORDER, COLOR, dash } from '../constants/css-property-keyword';
import { getBorderProps } from '../utils/get-border-props';

export class BorderColor extends Style {
    static id = 'borderColor';
    static override matches = /^border(-(left|right|top|bottom))?-color:./;
    static override colorStarts = 'b([xytblr]|(order(-(left|right|top|bottom))?))?:';
    static override colorful = true;
    override get props(): { [key: string]: any } {
        return getBorderProps(this.prefix, this, COLOR);
    }
    override get order(): number {
        return (this.prefix === dash(BORDER, COLOR) + ":" || this.prefix === 'b:' || this.prefix === BORDER + ':') ? -1 : 0;
    }
}