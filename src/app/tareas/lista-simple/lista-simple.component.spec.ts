import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSimpleComponent } from './lista-simple.component';
import { FormsModule } from '@angular/forms';
import { NuevaTareaComponent } from '../nueva-tarea/nueva-tarea.component';
import { TareaComponent } from '../tarea/tarea.component';

describe('ListaSimpleComponent', () => {
  let component: ListaSimpleComponent;
  let fixture: ComponentFixture<ListaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaSimpleComponent,
        NuevaTareaComponent,
        TareaComponent
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
