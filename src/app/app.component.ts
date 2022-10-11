import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'untitled'

  nodes: any =
    [{
      name: 'Diana\'s Pathway',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      title: 'Chief Executive Officer',
      children: [
        {
          name: 'Task 1',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, Google Cloud',
          children: [
            {
              name: 'Step 1a',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, YouTube'
            }
          ]
        },
        {
          name: 'Task 2',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, YouTube',
          children: []
        },
        {
          name: 'Task 3',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: [
            {
              name: 'Step 3a',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: []
            },
            {
              name: 'Step 3b',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: [
                {
                  name: 'Task aa',
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Head of Artificial Intelligence',
                  children: []
                },
                {
                  name: 'SC2',
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Head of Artificial Intelligence',
                  children: [
                    {
                      name: 'Task aa',
                      cssClass: 'ngx-org-head',
                      image: 'assets/node.svg',
                      title: 'Head of Artificial Intelligence',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              name: 'Step 3c',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: []
            }
          ]
        },
        {
          name: 'Task 4',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: []
        },
        {
          name: 'Task 5',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: []
        },
        {
          name: 'Task 6',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: [
            {
              name: 'Task a',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Head of Artificial Intelligence',
              children: [
                {
                  name: 'Task aa',
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Head of Artificial Intelligence',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }]


  // node = {
  //   name: 'root', children: [
  //     {name: 'a', children: []},
  //     {name: 'b', children: []},
  //     {
  //       name: 'c', children: [
  //         {
  //           name: '1', children: [
  //             {name: 'c1a', children: []}
  //           ]
  //         },
  //         {name: '2', children: []},
  //         {name: '3', children: []}
  //       ]
  //     },
  //     {name: 'd', children: []}
  //   ]
  // }

  ngOnInit() {

  }
}
