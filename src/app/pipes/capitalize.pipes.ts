import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
        value = value.toLowerCase();
        const names = value.split(' ');
        for ( const i in names) {
            names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        return names.join(' ');
    }
}