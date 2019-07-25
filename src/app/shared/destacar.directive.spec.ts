import { DestacarDirective } from './destacar.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template:'<p id="test" destacar></p>'
})
class TestComponent{}

describe('DestacarDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elem: ElementRef
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({   
      declarations: [
        TestComponent,
        DestacarDirective  
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elem = fixture.debugElement.query(By.css('#test'))
  });

  it('should create an instance', () => {
    const directive = new DestacarDirective(elem);
    expect(directive).toBeTruthy();
  });
});

