import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly profile = profile;
  readonly year = new Date().getFullYear();
}
