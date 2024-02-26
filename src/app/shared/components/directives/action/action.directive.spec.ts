import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
    let fixture: ComponentFixture<ActionDirectiveComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ActionDirectiveComponent],
            imports: [ActionDirectiveModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveComponent);
    });

    it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
        
    });
});

@Component({
    template: `<div (appAction)="actionHandler($event)"></div>">`
})
class ActionDirectiveComponent{
    private event: Event = null
    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): boolean {
        return !!this.event;
    }
}