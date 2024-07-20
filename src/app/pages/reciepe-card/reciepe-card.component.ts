import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { UpdateReciepeFormComponent } from '../update-reciepe-form/update-reciepe-form.component';
import { ReciepeServiceService } from '../../services/Reciepe/reciepe-service.service';

@Component({
  selector: 'app-reciepe-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule],
  templateUrl: './reciepe-card.component.html',
  styleUrl: './reciepe-card.component.scss'
})
export class ReciepeCardComponent {
  @Input() reciepe:any
  @Input() toggle:any

  constructor(public dialog:MatDialog,private reciepeService:ReciepeServiceService){

    
  }
  handleOpenEditReciepeform(){
    this.dialog.open(UpdateReciepeFormComponent,{ data: this.reciepe })
  }

  ngOnInit() {
    console.log("toggle",this.toggle)
  }

  handleDeleteReciepe() {
    this.reciepeService.deleteReciepes(this.reciepe.id).subscribe();
  }
    
  
}
