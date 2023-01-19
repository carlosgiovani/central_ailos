import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CardComponentComponent } from './components/card-component/card-component/card-component.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [AppComponent, CardComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
