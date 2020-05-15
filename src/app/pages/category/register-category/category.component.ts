import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../category.service';
import {StaticMessages} from '../../../shared/services/static-messages';
import {TokenStorageService} from '../../../shared/services/token-storage-service';
import {Location} from '@angular/common';
import {SnackBarService} from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-register-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class RegisterCategoryComponent implements OnInit {

  public frmCategory: FormGroup;

  staticmsgs = StaticMessages;
  color = 'accent';
  checked = false;
  disabled = false;

  constructor(private fb: FormBuilder,
              private serviceCategory: CategoryService,
              private storageToken: TokenStorageService,
              private _location: Location,
              private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.frmCategory = this.fb.group(
      {
        name: [null, Validators.required],
        isActive: [null, Validators.required],
        type: [null, Validators.required],
        userId: [null, null],
        color: [null, null],
      }
    );
    this.frmCategory.patchValue({
      isActive: false,
    });
  }


  async save() {
    const user = this.storageToken.getUser();
    debugger
    this.frmCategory.patchValue({
      userId: user.id,
      color: ''
    });

    try {
      if (this.frmCategory.valid) { //save
        const res = await this.serviceCategory.registerCategory(this.frmCategory.value);
        this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
        this._location.back();
      }
    } catch (e) {

    }

  }

}
