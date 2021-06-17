import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'size'
})

export class demoPipe implements PipeTransform{
    // transform(size: any, ...args: any[]) {
    //     throw new Error('Method not implemented.');
    // }

    // transform(size: number): string {
    //     return (size / (1024 * 1024)).toFixed(2) + 'MB';
    //   }

// We’re returning a type string as we’re appending 'MB' on the end. 

// using arguments
      transform(size: number, extension: string = 'MB'): string {
        return (size / (1024 * 1024)).toFixed(2) + extension;
       }
}