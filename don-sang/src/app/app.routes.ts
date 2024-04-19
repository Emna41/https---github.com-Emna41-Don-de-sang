import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthenntifierComponent } from './authenntifier/authenntifier.component';
import { InformationComponent } from './information/information.component';
import { DonComponent } from './don/don.component';
import { SangComponent } from './sang/sang.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PourquoidonnerComponent } from './pourquoidonner/pourquoidonner.component';
import { HomepageComponent } from "./homepage/homepage.component"; 
import { ExdonComponent  } from "./exdon/exdon.component";
import { ExsangComponent  } from "./exsang/exsang.component";
import { StockComponent  } from "./stock/stock.component";

export const routes: Routes = [
    {'path': '','title':'Home',component:HomeComponent},
    {'path':'authentifier','title':'authentification',component:AuthenntifierComponent},
    {'path':'inscription','title':'Inscription',component:InscriptionComponent},
    {'path':'information','title':'information',component:InformationComponent},
    {'path':'don','title':'Demande de don',component:DonComponent},
    {'path':'sang','title':'Demande de sang',component:SangComponent},
    {'path':'accueil','title':'Accueil',component:AccueilComponent},
    {'path':'pourquoidonner','title':'pourquoidonner',component:PourquoidonnerComponent},
    {'path':'homepage','title':'homepage',component:HomepageComponent},
    {'path':'exdon','title':'exdon',component:ExdonComponent},
    {'path':'exsang','title':'exsang',component:ExsangComponent},
    {'path':'stock','title':'stock',component:StockComponent},
    {'path':'**','title':'Not found',component:NotfoundComponent},  
    
    
];
