import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-provider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-provider.component.html',
  styleUrl: './social-provider.component.css'
})
export class SocialProviderComponent {
  @Input() accounts: string[] = []

}
