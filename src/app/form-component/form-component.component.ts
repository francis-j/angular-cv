import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControlService } from "app/form-control.service";

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

    @Input() item: any;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.item.key].valid; }

}
