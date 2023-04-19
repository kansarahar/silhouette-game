import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setUserName, setUserRoom, setUserHostStatus } from '../../../store/user-info/user-info.actions';
import { selectUserInfoData } from 'src/app/store/user-info/user-info.selectors';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  name: string = '';
  room: string = '';
  isHost: boolean = false;
  editorDialogVisible: boolean = false;

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.select(selectUserInfoData).subscribe(userInfo => {
      this.name = userInfo.name + 'a';
      this.room = userInfo.room + 'b';
      this.isHost = userInfo.host;
    });
  }

  showEditorDialog() {
    this.editorDialogVisible = true;
  }
  
}
