import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  QueryList,
  ContentChildren,
} from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  selector: 'tab-group',
  template: `
    <div>
      <div
        class="tab-headers"
        *ngFor="let tab of tabPanelList; let idx = index"
        (click)="activeIndexChange.emit(idx)"
      >
        {{tab.title}}
        <button (click)="removeTab(tab)" @fade>x</button>
      </div>
    </div>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </div>

    <ng-template #noTabs>
      No more tabs
    </ng-template>
  `,
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(2000)]),
      transition('* => void', [animate(2000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();
  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    console.log(this.tabPanels);
    this.tabPanels.changes.subscribe(console.log);
  }

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tabPanel, index) => {
      if (tabPanel === tab) {
        found = index;
        return false;
      }
      return true;
    });

    if (found === this.activeIndex) {
      this.activeIndexChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
