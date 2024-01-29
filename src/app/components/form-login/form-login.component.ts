import { Component } from '@angular/core';
import { LanguageDropdownComponent } from '../language-dropdown/language-dropdown.component';
import { SocialProviderComponent } from '../social-provider/social-provider.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [LanguageDropdownComponent, SocialProviderComponent, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

}
