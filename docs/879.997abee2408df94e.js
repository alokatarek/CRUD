"use strict";(self.webpackChunkCRUD=self.webpackChunkCRUD||[]).push([[879],{8879:(R,P,a)=>{a.r(P),a.d(P,{PostsModule:()=>K});var l=a(6895),c=a(78),t=a(1571),L=a(384),g=a(7908);let v=(()=>{class o{constructor(e,s,n){this._authService=e,this._router=s,this._toastService=n}canActivate(e,s){const n=this._authService.getIsAuth();return n||(this._toastService.addSuccess("Login First Please !"),this._router.navigate(["/auth/login"])),n}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(L.e),t.LFG(c.F0),t.LFG(g.k))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var r=a(433),h=a(529),I=a(4004),m=a(8505),Z=a(262),T=a(2843);let _=(()=>{class o{constructor(e,s,n){this.http=e,this._router=s,this._toastService=n,this.url="https://crud-api-cnt6.vercel.app/post"}getPosts(e,s){let n=(new h.LE).set("pagesize",e).set("page",s);return this.http.get(`${this.url}`,{params:n}).pipe((0,I.U)(p=>({posts:p.posts.map(f=>({...f})),maxPosts:p.maxPost})),(0,m.b)(()=>{this._toastService.addSuccess("get list of posts")}),(0,Z.K)(p=>(this._toastService.addError(p.error.message),(0,T._)(p))))}getPost(e){return this.http.get(`${this.url}/${e}`).pipe((0,m.b)(()=>{this._toastService.addSuccess("get post")}))}createPost(e){return this.http.post(`${this.url}`,e).pipe((0,m.b)(s=>{this._toastService.addSuccess(s.message),this._router.navigate(["/"])}))}deletePost(e){return this.http.delete(`${this.url}/${e}`).pipe((0,m.b)(s=>{this._toastService.addSuccess(s.message)}))}updatePost(e,s){return this.http.put(`${this.url}/${s}`,e).pipe((0,m.b)(n=>{this._toastService.addSuccess(n.message),this._router.navigate(["/"])}))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.eN),t.LFG(c.F0),t.LFG(g.k))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=a(9549),A=a(4144),y=a(3546),d=a(4859),x=a(1572);function F(o,i){1&o&&t._UZ(0,"mat-spinner")}function J(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a post title."),t.qZA())}function M(o,i){if(1&o&&(t.TgZ(0,"div",11),t._UZ(1,"img",12),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.imagePreview,t.LSH)("alt",e.form.value.title)}}function N(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a post content."),t.qZA())}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onSavePost())}),t.TgZ(1,"mat-form-field",3),t._UZ(2,"input",4),t.YNc(3,J,2,0,"mat-error",0),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const n=t.MAs(7);return t.KtG(n.click())}),t._uU(5,"Pick Image"),t.qZA(),t.TgZ(6,"input",6,7),t.NdJ("change",function(n){t.CHM(e);const p=t.oxw();return t.KtG(p.onImagaPicked(n))}),t.qZA(),t.YNc(8,M,2,2,"div",8),t.TgZ(9,"mat-form-field"),t._UZ(10,"textarea",9),t.YNc(11,N,2,0,"mat-error",0),t.qZA(),t.TgZ(12,"button",10),t._uU(13),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(3),t.Q6J("ngIf",e.form.controls.title.invalid),t.xp6(5),t.Q6J("ngIf",""!==e.imagePreview&&e.imagePreview&&e.form.controls.image.valid),t.xp6(3),t.Q6J("ngIf",e.form.controls.content.invalid),t.xp6(2),t.Oqu("create"===e.mode?"save post":"update post")}}let S=(()=>{class o{constructor(e,s,n){this._postService=e,this._route=s,this._toastService=n,this.isLoading=!1,this.imagePreview="",this.postId="",this.mode="create",this.post={title:"",content:"",image:""},this.form=new r.cw({title:new r.NI("",[r.kI.required]),content:new r.NI("",[r.kI.required]),image:new r.NI("",[r.kI.required])})}ngOnInit(){this._route.paramMap.subscribe(e=>{e.has("postId")?(this.postId=e.get("postId"),this.mode="edit",this.isLoading=!0,this._postService.getPost(this.postId).subscribe(s=>{this.post=s,this.isLoading=!1,this.form.setValue({title:this.post.title,content:this.post.content,image:this.post.image}),this.imagePreview=this.post.image,this.form.get("image")?.updateValueAndValidity()})):(this.mode="create",this.postId=null)})}onSavePost(){if(!this.form.invalid)if(this.isLoading=!0,"create"==this.mode){let e=new FormData;e.append("title",this.form.value.title||""),e.append("content",this.form.value.content||""),e.append("image",this.form.value.image||""),this._postService.createPost(e).subscribe(s=>{this.isLoading=!1},s=>{this.isLoading=!1,this._toastService.addError("cant create Post")})}else{let e=new FormData;e.append("title",this.form.value.title||""),e.append("content",this.form.value.content||""),e.append("image",this.form.value.image||""),this.isLoading=!0,this._postService.updatePost(e,this.postId).subscribe(s=>{this.isLoading=!1},s=>{this.isLoading=!1,this._toastService.addError("cant update Post")})}}onImagaPicked(e){let s=e.target.files[0];this.form.patchValue({image:s}),this.form.get("image")?.updateValueAndValidity();const n=new FileReader;n.onload=()=>{this.imagePreview=n.result},n.readAsDataURL(s)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(c.gz),t.Y36(g.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-create"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["matInput","","type","text","formControlName","title","name","title","placeholder","Post title"],["type","button",1,"mat-stroked-button","mb-3",3,"click"],["type","file",3,"change"],["inputFile",""],["class","image-preview",4,"ngIf"],["matInput","","name","content","formControlName","content","placeholder","Post content"],["mat-button","","color","primary","type","submit",1,"mt-3"],[1,"image-preview"],[3,"src","alt"]],template:function(e,s){1&e&&(t.YNc(0,F,1,0,"mat-spinner",0),t.TgZ(1,"mat-card"),t.YNc(2,O,14,5,"form",1),t.qZA()),2&e&&(t.Q6J("ngIf",s.isLoading),t.xp6(2),t.Q6J("ngIf",!s.isLoading))},dependencies:[l.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,C.TO,C.KE,A.Nt,y.a8,d.lW,x.$g],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:200px;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}"]}),o})();var u=a(7084),b=a(1676);function w(o,i){1&o&&t._UZ(0,"mat-spinner")}const U=function(o){return["/edit",o]};function z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-expansion-panel")(1,"mat-expansion-panel-header"),t._uU(2),t.qZA(),t.TgZ(3,"div",6),t._UZ(4,"img",7),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-action-row")(8,"a",8),t._uU(9,"EDIT"),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){const p=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.onDelete(p.id))}),t._uU(11,"DELETE"),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.hij(" ",null==e?null:e.title," "),t.xp6(2),t.Q6J("src",e.image,t.LSH)("alt",e.title),t.xp6(2),t.Oqu(null==e?null:e.content),t.xp6(2),t.Q6J("routerLink",t.VKq(5,U,e.id))}}function G(o,i){if(1&o&&(t.TgZ(0,"mat-accordion",4),t.YNc(1,z,12,7,"mat-expansion-panel",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.posts)}}function Y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-paginator",10),t.NdJ("page",function(n){t.CHM(e);const p=t.oxw();return t.KtG(p.onPageChange(n))}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("length",e.totalPosts)("pageSize",e.postsPerPage)("pageSizeOptions",e.postSizeOption)}}function E(o,i){1&o&&(t.TgZ(0,"p",11),t._uU(1,"No Posts Founded !"),t.qZA())}const Q=[{path:"",component:(()=>{class o{constructor(e,s){this._postService=e,this._toastService=s,this.posts=[],this.totalPosts=0,this.isLoading=!1,this.postsPerPage=2,this.currentPage=1,this.postSizeOption=[1,2,5,10]}ngOnInit(){this.getPosts()}getPosts(){this.isLoading=!0,this._postService.getPosts(this.postsPerPage,this.currentPage).subscribe(e=>{this.posts=e.posts,this.totalPosts=e.maxPosts,this.isLoading=!1})}onDelete(e){this.isLoading=!0,this._postService.deletePost(e).subscribe(s=>{console.log(s.message),this.getPosts(),this.isLoading=!1},s=>{this.isLoading=!1,this._toastService.addError("Not Authorized Person")})}onPageChange(e){this.currentPage=e.pageIndex+1,this.postsPerPage=e.pageSize,this.getPosts()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(g.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-list"]],decls:4,vars:4,consts:[[4,"ngIf"],["multi","true",4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],["class","info-text mat-body-2",4,"ngIf"],["multi","true"],[4,"ngFor","ngForOf"],[1,"post-image"],[3,"src","alt"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","warn",3,"click"],[3,"length","pageSize","pageSizeOptions","page"],[1,"info-text","mat-body-2"]],template:function(e,s){1&e&&(t.YNc(0,w,1,0,"mat-spinner",0),t.YNc(1,G,2,1,"mat-accordion",1),t.YNc(2,Y,1,3,"mat-paginator",2),t.YNc(3,E,2,0,"p",3)),2&e&&(t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("ngIf",s.posts.length>0&&!s.isLoading),t.xp6(1),t.Q6J("ngIf",s.posts.length>0),t.xp6(1),t.Q6J("ngIf",s.posts.length<=0))},dependencies:[l.sg,l.O5,c.yS,d.lW,d.zs,u.pp,u.ib,u.VG,u.yz,x.$g,b.NW],styles:[".info-text[_ngcontent-%COMP%]{text-align:center}mat-paginator[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}mat-spinner[_ngcontent-%COMP%]{margin:auto}img[_ngcontent-%COMP%]{width:200px;height:200px}"]}),o})()},{path:"create",component:S,canActivate:[v]},{path:"edit/:postId",component:S,canActivate:[v]}];let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(Q),c.Bz]}),o})();var D=a(3466);let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,$,r.UX,D.q,h.JF]}),o})()}}]);