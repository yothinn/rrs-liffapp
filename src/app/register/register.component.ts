import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  titleList = [
    'นาย', 'นาง', 'นางสาว', 'เด็กชาย', 'เด็กหญิง'
  ];
  
  personInfoGroup: FormGroup;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,

  ) { 
    this.titleService.setTitle('ลงทะเบียนสมาขิก');
  }

  ngOnInit(): void {
    this.personInfoGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      addressLine1: ['', Validators.required],
      addressStreet: ['', Validators.required],
      addressPostalCode: ['', [Validators.required]],
      addressProvince: ['', Validators.required],
      addressDistrict: ['', Validators.required],
      addressSubDistrict: ['', Validators.required],
    });
  }

}
