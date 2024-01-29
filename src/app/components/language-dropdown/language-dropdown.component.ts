import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.css'
})

export class LanguageDropdownComponent {
  @Input() languages: string[] = []
  defaultLanguage = "Português (Brasil)"
}
