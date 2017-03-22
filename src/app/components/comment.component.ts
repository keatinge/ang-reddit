import { Component, Input } from '@angular/core';


@Component({
    selector: 'comment',
    template : `
<div class="well" style="padding:5px;margin:5px">
    <p>{{model.score}} {{model.body}} -- {{model.author}}</p> 
    
    <div style="margin-left:10px">
         <comment *ngFor="let comment of model.children" [model]="comment"></comment>
    </div>
</div>
`
})
export class CommentComponent  {
    @Input() model:any;
}

