import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { CounterComponent } from './counter/counter.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { TabContentDirective } from './tabs/tab-content.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TabGroupComponent,
    TabPanelComponent,
    CounterComponent,
    TabBsGroupComponent,
    TabContentDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
