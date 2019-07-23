import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title = 'Angular Aubay'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        HeaderComponent,
        MenuComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; //Desde aqui podemos acceder al objeto. Similar a new header que no se puede hacer
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'Angular Aubay'`, () => {    
    expect(component.title).toEqual(title);
  });

  it('should render title in a h1 tag', () => {    
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('h1').textContent).toContain(title);
  });


});
