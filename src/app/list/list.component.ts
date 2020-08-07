import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // this array stores the string entered in te search box
  searchString = "";

  // this array stores the list of vegetables that match the input string of the search box
  vegetables = ["Acorn squash","Anise","Artichoke","Arugula","Asparagus","Banana squash","Basil","Bean sprouts","Beet greens","Beetroot","Black beans","Black-eyed peas","Bok choy","Borlotti bean","Broad beans","Broccoflower","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Calabrese","Caraway","Carrot","Cauliflower","Cayenne pepper","Celeriac","Celery","Chamomile","Chard","Chickpeas","Chili pepper","Chives","Cilantro seeds are Coriander","Collard greens","Corn salad","Courgette","Cucumber","Daikon","Delicata","Dill","Endive","Fennel","Fennel","Fiddleheads","Frisee","Garlic","Gem squash","Ginger","Green beans","Green pepper and Red pepper","Habanero","Herbs and spices","Horseradish","Hubbard squash","Jalapeño","Jerusalem artichoke","Jicama","Kale","Kidney beans","Kohlrabi","Lavender","Leek Allium porrum","Lemon Grass","Lentils","Lettuce Lactuca sativa","Lima beans or Butter bean","Maize","Mangel-wurzel","Marjoram","Marrow","Mung beans","Mushrooms","Mustard greens","Navy beans","Nettles","New Zealand spinach","Okra","Onion","Onion family","Oregano","Paprika","Parsley","Parsnip","Patty pans","Peas","Peppers","Pinto beans","Potato","Pumpkin","Quandon","Radicchio","Radish","Rhubarb","Root vegetables","Rosemary","Runner beans","Rutabaga","Sage","Salsify (usually Purple Salsify or Oyster Plant)","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","Split peas","Spring onion","Squashes","Sunchokes","Swede","Sweet potato","Tabasco pepper","Taro","Tat soi","Thyme","Topinambur","Tubers","Turnip","Turnip","Turnip greens","Wasabi","Water chestnut","Watercress","White radish","Yam"]

  searchVegetablesList: string[] = this.vegetables;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.currentVegetableName.subscribe(name => {
      // complete this function which searches the vegetables using regex and adds them to searchVegetablesList
      if (!name.length) {
        this.searchVegetablesList = this.vegetables;
        return;
      }

      this.searchVegetablesList = this.vegetables.filter((item) => {
        if (0 === item.toLowerCase().indexOf(name)) {
          return true;
        };
        return false;
      })
    });

  }

}
