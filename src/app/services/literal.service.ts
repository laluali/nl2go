import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteralService {

  constructor() { }

  getUserTableHeaders() {
    return [
        {
          label: '',
          id: 'row',
          type: 'checkbox',
          content: '&#x2713',
          size: 'medium'
        },
        {
          label: 'First Name',
          id: 'firstName',
          type: 'textbox'
        },
        {
          label: 'Email',
          id: 'email',
          type: 'textbox'
        },
        {
          label: 'Delete',
          id: 'row',
          type: 'button',
          alias: 'delete',
          buttonStyle: 'btn btn-danger btn-sm'
        },
        {
          label: 'Show',
          id: 'row',
          type: 'button',
          alias: 'show',
          buttonStyle: 'btn btn-info btn-sm'
        },
        {
          label: 'Edit',
          id: 'row',
          type: 'button',
          alias: 'edit',
          buttonStyle: 'btn btn-default btn-sm'
        }
      ];
  }

}
