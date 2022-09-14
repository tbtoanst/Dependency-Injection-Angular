import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class TabPanelComponent {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;
  @ContentChild(TabContentDirective, { static: true })
  explicitBody: TabContentDirective;

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    console.log(this.explicitBody);
    this.tabGroup.addTab(this);
  }
}
