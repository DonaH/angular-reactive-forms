import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';
  locations: string[] = ['Downtown', 'Northridge', 'Santa Monica', 'Venice', 'Culver City'];
  volunteerForm!: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')])
    })
  }

  onSumbit() {
    console.log(this.volunteerForm);

  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }

  selectLocation(event: any) {
    this.volunteerForm.patchValue({
      preferredLocation: event.target.value
    })
  }

  addEmail() {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.references.removeAt(index);
  }
}
