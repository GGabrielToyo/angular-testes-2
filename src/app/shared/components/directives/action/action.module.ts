import { NgModule } from '@angular/core';
import { ActionDirective } from './action.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ActionDirective],
    imports: [CommonModule],
    exports: [ActionDirective]
})
export class ActionDirectiveModule{

}