import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ReciepeServiceService } from '../../services/Reciepe/reciepe-service.service';
@Component({
  selector: 'app-create-reciepe',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './create-reciepe.component.html',
  styleUrl: './create-reciepe.component.scss'
})
export class CreateReciepeComponent {
  reciepeItem:any={
    title:"",description:"",
    foodType:"",image:"",
  };

  constructor(private reciepeService:ReciepeServiceService){

  }
  onSubmit(){
    console.log("values",this.reciepeItem)

    this.reciepeService.createReciepe(this.reciepeItem).subscribe(
      {
        next:data=>console.log("created reciepe",data),
        error:error=>console.log("error",error)
      }
    )
  }

}
