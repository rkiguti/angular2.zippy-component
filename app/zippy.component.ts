import { Component, Input } from '@angular/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                {{ title }}
                <i class="pull-right glyphicon"
                    [ngClass]="{
                        'glyphicon-chevron-down':!isOpen,
                        'glyphicon-chevron-up':isOpen
                    }"
                    (click)="toggle()"></i>
            </div>
            <div class="panel-body" [hidden]="!isOpen">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
    `]
})
export class ZippyComponent {
    @Input() title: string;

    isOpen = false;

    toggle() {
        this.isOpen = !this.isOpen;
    }
}