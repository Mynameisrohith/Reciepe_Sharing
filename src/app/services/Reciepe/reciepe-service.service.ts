import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciepeServiceService {

  private baseUrl='http://localhost:6060'
  constructor(private http:HttpClient) { }

  reciepeSubject=new BehaviorSubject<any>({

    reciepes:[],
    loading:false,
    newReciepe:null

  })

  private getHeaders():HttpHeaders{
    const token=localStorage.getItem("jwt")
    return new HttpHeaders({

      Authorization:`Bearer ${localStorage.getItem("jwt")}`
    })
  }

  getReciepes():Observable<any>{
    const headers=this.getHeaders();
    return this.http.get(`${this.baseUrl}/api/reciepe`,{headers}).pipe(

      tap((reciepes)=>{
        const currentState=this.reciepeSubject.value;
        this.reciepeSubject.next({...currentState,reciepes})
      })

      
    )
  }

  createReciepe(reciepe:any):Observable<any>{
    const headers=this.getHeaders();
    return this.http.post(`${this.baseUrl}/api/reciepe`,reciepe,{headers}).pipe(

      tap((newReciepe)=>{
        const currentState=this.reciepeSubject.value;
        this.reciepeSubject.next({...currentState,reciepes:[newReciepe,...currentState.reciepes]})
      })

      
    )
  }

  updateReciepes(reciepe:any):Observable<any>{
    const headers=this.getHeaders();
    return this.http.put(`${this.baseUrl}/api/reciepe/${reciepe.id}`,reciepe,{headers}).pipe(

      tap((updatedReciepe:any)=>{
        const currentState=this.reciepeSubject.value;
        const updateReciepes=currentState.reciepes.map((item:any)=>item.id==updatedReciepe.id?updatedReciepe:item)
        this.reciepeSubject.next({...currentState,reciepes:updateReciepes})
      })

      
    )
  }

  likeReciepes(id:any):Observable<any>{
    const headers=this.getHeaders();
    return this.http.put(`${this.baseUrl}/api/reciepe/${id}/like`,{headers}).pipe(

      tap((updatedReciepe:any)=>{
        const currentState=this.reciepeSubject.value;
        const updateReciepes=currentState.reciepes.map((item:any)=>item.id==updatedReciepe.id?updatedReciepe:item)
        this.reciepeSubject.next({...currentState,reciepes:updateReciepes})
      })

      
    )
  }

  deleteReciepes(id:any):Observable<any>{
    const headers=this.getHeaders();
    return this.http.delete(`${this.baseUrl}/api/reciepe/${id}`,{headers}).pipe(

      tap((deletedReciepe:any)=>{
        const currentState=this.reciepeSubject.value;
        const updatedReciepes=currentState.reciepes.filter((item:any)=>item.id !==id)
        this.reciepeSubject.next({...currentState,reciepes:updatedReciepes})
      })

      
    )
  }
  
}
