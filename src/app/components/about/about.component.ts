import { Component } from '@angular/core';
import { ActiveBackendService } from '../../services/data-sources/active-backend.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public readonly backend: ActiveBackendService) {}

  get backendLabel(): string {
    return this.backend.current === 'supabase' ? 'Supabase' : 'Google Sheets';
  }
}
