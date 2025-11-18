import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ButtonOverviewComponent } from './button-overview/button-overview.component';
import { OutlineButtonComponent } from './button-overview/components/outline-button/outline-button.component';
import { SizeButtonComponent } from './button-overview/components/size-button/size-button.component';
import { DisabledButtonComponent } from './button-overview/components/disabled-button/disabled-button.component';
import { VariantButtonComponent } from './button-overview/components/variant-button/variant-button.component';
import { CustomStyleButtonComponent } from './button-overview/components/custom-style-button/custom-style-button.component';

@NgModule({
  declarations: [AppComponent, CustomButtonComponent, ButtonOverviewComponent, OutlineButtonComponent, SizeButtonComponent, DisabledButtonComponent, VariantButtonComponent, CustomStyleButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
