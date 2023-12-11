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

  playerIconUrls = [
    '../../assets/Images/Agents/Breach/breach.png',
    '../../assets/Images/Agents/Brimstone/brimstone.png',
    '../../assets/Images/Agents/Cypher/cypher.png',
    '../../assets/Images/Agents/Jett/jett.png',
    '../../assets/Images/Agents/Pheonix/pheonix.png'
    
  ];

  markerIconUrls = [
    '../../assets/Images/Markers/blue.png',
    '../../assets/Images/Markers/red.png',
    '../../assets/Images/Markers/green.png',
    '../../assets/Images/Markers/orange.png',
    '../../assets/Images/Markers/yellow.png'
    
  ];

  AgentAbilities = [
    {
      name: 'Breach Util',
      toggleImageUrl: '../../assets/Images/Agents/Breach/breach.png',
      icons: [
        '../../assets/Images/Agents/Breach/Util/B-A-1.png',
        '../../assets/Images/Agents/Breach/Util/B-A-2.png',
        '../../assets/Images/Agents/Breach/Util/B-A-3.png',
        '../../assets/Images/Agents/Breach/Util/B-A-4.png'
      ],
      show: false
    },
    {
      name: 'Brimstone Util',
      toggleImageUrl: '../../assets/Images/Agents/Brimstone/brimstone.png',
      icons: [
        '../../assets/Images/Agents/Brimstone/Util/BRIM-A-1.png',
        '../../assets/Images/Agents/Brimstone/Util/BRIM-A-2.png',
        '../../assets/Images/Agents/Brimstone/Util/BRIM-A-3.png',
        '../../assets/Images/Agents/Brimstone/Util/BRIM-A-4.png'
      ],
      show: false
    },
    {
      name: 'Cypher Util',
      toggleImageUrl: '../../assets/Images/Agents/Cypher/cypher.png',
      icons: [
        '../../assets/Images/Agents/Cypher/Util/C-A-1.png',
        '../../assets/Images/Agents/Cypher/Util/C-A-2.png',
        '../../assets/Images/Agents/Cypher/Util/C-A-3.png',
        '../../assets/Images/Agents/Cypher/Util/C-A-4.png'
      ],
      show: false
    },
    {
      name: 'Jett Util',
      toggleImageUrl: '../../assets/Images/Agents/Jett/jett.png',
      icons: [
        '../../assets/Images/Agents/Jett/Util/J-A-1.png',
        '../../assets/Images/Agents/Jett/Util/J-A-2.png',
        '../../assets/Images/Agents/Jett/Util/J-A-3.png',
        '../../assets/Images/Agents/Jett/Util/J-A-4.png'
      ],
      show: false
    },
    {
      name: 'Pheonix Util',
      toggleImageUrl: '../../assets/Images/Agents/Pheonix/pheonix.png',
      icons: [
        '../../assets/Images/Agents/Pheonix/Util/P-A-1.png',
        '../../assets/Images/Agents/Pheonix/Util/P-A-2.png',
        '../../assets/Images/Agents/Pheonix/Util/P-A-3.png',
        '../../assets/Images/Agents/Pheonix/Util/P-A-4.png'
      ],
      show: false
    },
  ];

  selectedMapUrl = '';

  showAgents = false;
  showMarkers = false;

  currentAbilityIndex: number | null = null;

  onMapSelect(selectedMap: MapItem) {
      this.selectedMapUrl = selectedMap.url;
  }

  toggleAgents() {
    this.showAgents = !this.showAgents;
  }
  toggleMarkers() {
    this.showMarkers = !this.showMarkers;
  }
  toggleNestedDropdown(index: number) {
    if (this.currentAbilityIndex === index) {
      this.currentAbilityIndex = null;
    } else {
      this.currentAbilityIndex = index;
    }
  }
}
