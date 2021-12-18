import { Style } from '@master/style';

export class BackgroundClipStyle extends Style {
    static override prefixes = /^(bg|background)-clip:/;
    override get properties(): { [key: string]: any } {
        return {
            '-webkit-background-clip': this,
            'background-clip': this
        }
    }
}