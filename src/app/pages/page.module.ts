import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'
import { ComponentModule } from 'app/components/component.module'

import * as Pages from 'app/pages'

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ComponentModule
  ],
  declarations: [ 
    Pages.PostsPageComponent,
    Pages.PostPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ],
  exports: [ 
    Pages.PostsPageComponent,
    Pages.PostPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ]
})
export class PageModule { }
