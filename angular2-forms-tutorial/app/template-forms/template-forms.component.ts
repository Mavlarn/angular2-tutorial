import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { MobileValidator } from '../validators/mobile.validator';

@Component({
    selector: 'template-form',
    templateUrl: 'app/template-forms/template-forms.component.html',
    styleUrls: ['app/template-forms/template-forms.component.css']
})
export class TemplateFormsComponent {
    user: any;
    active: Boolean = true;
    errorMsg: String;
    nameErrorMsg: String;
    constructor() {
        this.user = {
            name: '张三',
            mobile: 13800138001,
            address: {
                city: '北京',
                street: '朝阳望京...'
            }
        };
    }
    logForm(theForm: NgForm) {
        if (theForm.invalid) {
            this.errorMsg = 'validation errors!';
            if (theForm.controls['name'].errors) {
                this.nameErrorMsg = 'name error:' + JSON.stringify(theForm.controls['name'].errors);
            } else {
                this.nameErrorMsg = null;
            }
        } else {
            this.errorMsg = null;
            this.nameErrorMsg = null;
        }
        console.log(theForm.value);
    }

    create() {
        this.user = {
            address: {}
        };
        this.active = false;
        setTimeout(() => this.active = true, 0);
        return false;
    }
    reset(theForm: NgForm) {
        theForm.reset();
        return false;
    }
    diagnostic(model) {
        console.log(JSON.stringify(model));
    }
 }

