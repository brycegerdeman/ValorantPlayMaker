import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-icon',
  templateUrl: './player-icon.component.html',
  styleUrls: ['./player-icon.component.css']
})
export class PlayerIconComponent {
  @Input() iconUrl!: string;
}
