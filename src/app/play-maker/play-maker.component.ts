import { Component } from '@angular/core';
import { MapItem } from '../models/map-item.model';

@Component({
  selector: 'app-play-maker',
  templateUrl: './play-maker.component.html',
  styleUrls: ['./play-maker.component.css']
})
export class PlayMakerComponent {
  ngOnInit(): void {
    if (this.maps.length > 0) {
      this.selectedMapUrl = this.maps[0].url;
    }
  }

  maps: MapItem[] = [
    { name: 'Ascent', url: '../../assets/Images/Maps/Ascent.png' },
    { name: 'Bind', url: '../../assets/Images/Maps/Bind.png' },
    { name: 'Haven', url: '../../assets/Images/Maps/Haven.png' },
    { name: 'Split', url: '../../assets/Images/Maps/Split.png' },
    
  ];

  selectedMapUrl = '';

  onMapSelect(selectedMap: MapItem) {
      this.selectedMapUrl = selectedMap.url;
  }
}
