import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() nome : string;
  @Input() cargo : string;
  @Input() cargahoraria : string;

  constructor() { }

  ngOnInit() {}

}
