import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { validateMobile } from '../validators/mobile.validator';

@Component({
    selector: 'reactive-form',
    templateUrl: 'app/reactive-forms/reactive-forms.component.html',
    styleUrls: ['app/reactive-forms/reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    userForm: FormGroup;
    msg: String;
    changeMsg: any;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['张三', [Validators.required, Validators.minLength(3)]],
            mobile: [13800138001, [Validators.required, Validators.minLength(11), Validators.maxLength(11), validateMobile]],
            address: this.formBuilder.group({
                city: ['北京', Validators.required],
                street: ['朝阳望京...', Validators.required]
            })
        });
        const addr$ = <FormGroup>this.userForm.controls['address'];
        const city$ = addr$.controls['city'];
        const street$ = addr$.controls['street'];

        city$.valueChanges.debounceTime(1000).distinctUntilChanged().subscribe(cityValue => {
            this.msg = cityValue + ' 欢迎你!';
            street$.setValue(cityValue);
        });

        this.userForm.valueChanges.subscribe(x => this.changeMsg = { event: 'Form DATA CHANGED', object: x });
    }

    logForm(NgForm) {
        if (this.userForm.invalid) {
            this.msg = 'validation errors!';
        } else {
            this.msg = null;
        }
        console.log(this.userForm.value);
    }

    reset() {
        this.userForm.reset();
    }
 }

