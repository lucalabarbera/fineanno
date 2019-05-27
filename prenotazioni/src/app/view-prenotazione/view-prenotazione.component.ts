import { Component, OnInit, Input } from '@angular/core';
import { Appuntamento } from '../appuntamento';

@Component({
  selector: 'app-view-prenotazione',
  templateUrl: './view-prenotazione.component.html',
  styleUrls: ['./view-prenotazione.component.css']
})
export class ViewPrenotazioneComponent implements OnInit {

  @Input() appuntamento: Appuntamento;

  constructor() { }

  ngOnInit() {
  }

}
