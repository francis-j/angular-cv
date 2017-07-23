import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHelper } from 'app/app.api';
import { GlobalSettings } from 'app/app.static.values';
import { FormControlService } from "app/form-control.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [HttpHelper]
})
export class FormComponent implements OnInit {

    @Input() items: any[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private itemComponents: FormControlService) { }

    ngOnInit() {
        this.form = this.itemComponents.toFormGroup(this.items);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
