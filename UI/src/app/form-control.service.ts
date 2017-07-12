import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(items: any[] ) {
    let group: any = {};

    items.forEach(item => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required)
                                              : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
}