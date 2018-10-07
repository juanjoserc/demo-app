import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
		contactForm: FormGroup;
    submitted = false;
    success = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]]
        });
    }

    get cf() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.contactForm.invalid) {
            return;
        }
        this.success = true;
        //alert('Your words shall be heard')
    }
}
