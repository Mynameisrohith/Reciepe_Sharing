import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ReciepeServiceService } from '../../services/Reciepe/reciepe-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-reciepe-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './update-reciepe-form.component.html',
  styleUrl: './update-reciepe-form.component.scss'
})
export class UpdateReciepeFormComponent {

 
    reciepeItem:any={
      title:"",description:"",
      foodType:"",image:"",
    };

    constructor(@Inject(MAT_DIALOG_DATA) public reciepe: any, private reciepeService:ReciepeServiceService){

    }
    onSubmit(){

      this.reciepeService.updateReciepes(this.reciepeItem).subscribe({
        next:data=>console.log("update",data),error:error=>console.log("error",error)
      })
      console.log("values",this.reciepeItem)
      
    }

    ngOnInit(){
      this.reciepeItem=this.reciepe
    }
  
}
