import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-bs-group',
  template: `
  <ul class="nav nav-tabs">
    <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index">
      <a 
        class="nav-link active" 
        [class.active] = "idx === activeIndex"
        (click)="activeIndexChange.emit(idx)"
      >{{tab.title}}
        <button class="btn btn-sm btn-danger" (click)="removeTab(tab)">x</button>
      </a>
    </li> 
  </ul>
    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
    <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].implicitBody"></ng-container>
  </div>

  <ng-template #noTabs>
    No more tabs
  </ng-template>
  `,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {}
