import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { DataService } from '../data.service';

describe('ListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should enlist all the vegetables', () => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    expect(list.searchVegetablesList).toEqual(["Acorn squash","Anise","Artichoke","Arugula","Asparagus","Banana squash","Basil","Bean sprouts","Beet greens","Beetroot","Black beans","Black-eyed peas","Bok choy","Borlotti bean","Broad beans","Broccoflower","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Calabrese","Caraway","Carrot","Cauliflower","Cayenne pepper","Celeriac","Celery","Chamomile","Chard","Chickpeas","Chili pepper","Chives","Cilantro seeds are Coriander","Collard greens","Corn salad","Courgette","Cucumber","Daikon","Delicata","Dill","Endive","Fennel","Fennel","Fiddleheads","Frisee","Garlic","Gem squash","Ginger","Green beans","Green pepper and Red pepper","Habanero","Herbs and spices","Horseradish","Hubbard squash","Jalapeño","Jerusalem artichoke","Jicama","Kale","Kidney beans","Kohlrabi","Lavender","Leek Allium porrum","Lemon Grass","Lentils","Lettuce Lactuca sativa","Lima beans or Butter bean","Maize","Mangel-wurzel","Marjoram","Marrow","Mung beans","Mushrooms","Mustard greens","Navy beans","Nettles","New Zealand spinach","Okra","Onion","Onion family","Oregano","Paprika","Parsley","Parsnip","Patty pans","Peas","Peppers","Pinto beans","Potato","Pumpkin","Quandon","Radicchio","Radish","Rhubarb","Root vegetables","Rosemary","Runner beans","Rutabaga","Sage","Salsify (usually Purple Salsify or Oyster Plant)","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","Split peas","Spring onion","Squashes","Sunchokes","Swede","Sweet potato","Tabasco pepper","Taro","Tat soi","Thyme","Topinambur","Tubers","Turnip","Turnip","Turnip greens","Wasabi","Water chestnut","Watercress","White radish","Yam"]);
  });

  it('should filter the vegetables', inject([DataService], (service: DataService) => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    list.ngOnInit();
    service.changeVegetableName("a");
    expect(list.searchVegetablesList).toEqual(["Acorn squash","Anise","Artichoke","Arugula","Asparagus"]);
  }));
  it('should filter the vegetables', inject([DataService], (service: DataService) => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    list.ngOnInit();
    service.changeVegetableName("Chickpeas");
    expect(list.searchVegetablesList).toEqual(["Chickpeas"]);
  }));
  it('should filter the vegetables', inject([DataService], (service: DataService) => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    list.ngOnInit();
    service.changeVegetableName("pars");
    expect(list.searchVegetablesList).toEqual(["Parsley","Parsnip"]);
  }));
});
