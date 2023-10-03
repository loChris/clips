import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [
  //   ModalService
  // ]
})

export class ModalComponent implements OnInit {
  @Input() modalName: string = '';

  constructor(public modal: ModalService) {
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalName);
  }

  ngOnInit(): void {
  }
}
