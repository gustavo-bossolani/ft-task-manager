import { GenericModalConfig } from './models/generic-modal-config.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  styles = {
    default: 'text-black hover:bg-gray-100 hadow rounded p-2 mx-4',
    primary: 'text-white bg-red-500 hover:bg-red-600 hadow rounded p-2 font-semibold mx-4',
    none: ''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GenericModalConfig,
  ) { }

  ngOnInit(): void { }

}
