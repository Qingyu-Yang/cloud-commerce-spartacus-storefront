import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryBarComponent } from './tertiary-bar.component';

describe('TertiaryBarComponent', () => {
    let component: TertiaryBarComponent;
    let fixture: ComponentFixture<TertiaryBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TertiaryBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TertiaryBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
