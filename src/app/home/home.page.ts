import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteModalPage } from '../modals/note-modal/note-modal.page';
import { Item } from 'models/item.model';
import { EditPage } from '../modals/edit/edit.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  viewMode = 'ToDo';

  today = Date.now();

  Items: Item[] = [
    {
      descripcion: 'Nota 1',
      estado: false
    },
    {
      descripcion: "Nota 2",
      estado: false
    },
    {
      descripcion: "Nota 3",
      estado: false
    },
    {
      descripcion: "Nota 4",
      estado: false
    },
    {
      descripcion: "Nota 5",
      estado: false
    }
  ];

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // Modal
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NoteModalPage
    });
    return await modal.present();
  }

  async openModalEdit() {
    const modal = await this.modalCtrl.create({
      component: EditPage
    });
    return await modal.present();
  }

  // Segments

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  // funciones

  Borrar() {

  }


}
