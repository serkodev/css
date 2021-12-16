import { Style } from '@master/style';

export class VariableStyle extends Style {
    static override prefixes = /^\$.*:/;
    static override defaultUnit = ''; // don't use 'rem' as default, because css variable is common API
    static override supportFullName = false;
    override get properties(): { [key: string]: any } {
        return {
            ['--' + this.prefix.slice(1, -1)]: this
        }
    }
}