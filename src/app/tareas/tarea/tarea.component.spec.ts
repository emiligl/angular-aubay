import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaComponent } from './tarea.component';
import { TareaModel } from 'src/app/models/tarea.model';
import { FormsModule } from '@angular/forms';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaComponent ],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    component.tarea = new TareaModel() //IMPORTANTE REVISAR porque es input y objeto
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
