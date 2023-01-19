import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent {
  @Input() showCard = false;
  @Input() showActions = false;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() iconUser!: string;
  @Input() nameUser!: string;
  @Input() labelName!: string;
  @Input() iconSituation!: string;
  @Input() titleSituation!: string;
  @Input() statusSituation!: string;
  @Input() textButton!: string;
  @Input() callAction!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
