import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalComponent implements OnInit {
  @Input() modalName: string = '';

  constructor(public modal: ModalService, public element: ElementRef) {}

  closeModal(): void {
    this.modal.toggleModal(this.modalName);
  }

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  }
}
