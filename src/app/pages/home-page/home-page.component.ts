import { Component } from '@angular/core';
import { ReciepeCardComponent } from '../reciepe-card/reciepe-card.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
  import { CreateReciepeComponent } from '../create-reciepe/create-reciepe.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { ReciepeServiceService } from '../../services/Reciepe/reciepe-service.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReciepeCardComponent,MatIconModule,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
reciepes=[]
constructor(public dialog: MatDialog,public authService:AuthServiceService,private reciepeService:ReciepeServiceService){}
handleOpenCreateReciepeForm(){
this.dialog.open(CreateReciepeComponent)
}
ngOnInit(){
this.authService.getUserProfile();
this.reciepeService.getReciepes().subscribe();
this.reciepeService.reciepeSubject.subscribe(
  (state)=>{
    console.log("state",state)
    this.reciepes=state.reciepes
  }
)
}
}
