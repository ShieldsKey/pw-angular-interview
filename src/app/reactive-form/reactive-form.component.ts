import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  {
    form: FormGroup;
    comment = new FormControl("", Validators.required);
    name = new FormControl("", Validators.required);
    email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
  
    /* Observable Solution */
    // constructor(fb: FormBuilder) {
    //   this.form = fb.group({
    //     comment: this.comment,
    //     name: this.name,
    //     email: this.email
    //   });
    //   this.form.valueChanges
    //     .pipe(
    //       filter(data => this.form.valid),
    //       map(data => {
    //         data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, "");
    //         return data;
    //       }),
    //       map(data => {
    //         data.lastUpdateTS = new Date();
    //         return data;
    //       })
    //     )
    //     .subscribe(data => console.log(JSON.stringify(data)));
    // }
    /* None Observable Solution */
    constructor(fb: FormBuilder) {
      this.form = fb.group({
        "comment": this.comment,
        "name": this.name,
        "email": this.email
      });
      this.form.valueChanges
          .subscribe( data => {
            if (this.form.valid) {
              data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
              data.lastUpdateTS = new Date();
              console.log(JSON.stringify(data))
            }
          });
    }
  
    onSubmit() {
      console.log("Form submitted!");
    }
  }
