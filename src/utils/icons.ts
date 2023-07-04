import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';


export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;
export type IconType = 'solid' | 'outline';

export function getIcon(name: IconName, type: IconType = 'solid') {
    switch(type) {
        case 'solid': return SolidIcons[name];
        case 'outline': return OutlineIcons[name];
    }
}