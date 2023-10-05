import { Injectable } from '@angular/core';

interface IModal {
  name: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modals: IModal[] = [];

  registerModal(name: string): void {
    this.modals.push({
      name,
      visible: false
    });
  }

  unregisterModal(name: string): void {
    this.modals = this.modals.filter(element =>
      element.name !== name);
  }

  isModalVisible(name: string): boolean {
    return Boolean(this.modals.find(element =>
      element.name === name)?.visible);
  }

  toggleModal(name: string): void {
    const modal = this.modals.find(element =>
      element.name === name);

    if (!modal) return;

    modal.visible = !modal.visible;
  }
}
