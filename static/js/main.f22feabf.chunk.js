(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__3Oc4x",contact_list_item:"ContactList_contact_list_item__-SX2V",btn_delete:"ContactList_btn_delete__rw0JX",contact_name:"ContactList_contact_name__16ElV",contact_number:"ContactList_contact_number__sx8Qx",total_contacts:"ContactList_total_contacts__1IrPn"}},14:function(t,e,n){t.exports={form:"Form_form__2TM1N",input_name:"Form_input_name__1ZOWf",input_num:"Form_input_num__2GmlK",btn_add:"Form_btn_add__A_Mxs"}},15:function(t,e,n){t.exports={phonebook:"PhoneBook_phonebook__2sJx_",phonebook_header:"PhoneBook_phonebook_header__2yB4I",section_header:"PhoneBook_section_header__1yS1d"}},30:function(t,e,n){t.exports={find_contact:"FindContact_find_contact__1SlRi"}},32:function(t,e,n){t.exports={spinner:"Spinner_spinner__1Neu5"}},34:function(t,e,n){t.exports=n(82)},81:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),u=n(7),s=n(2),i={getContactsRequest:Object(s.b)("contacts/getContactsRequest"),getContactsSuccess:Object(s.b)("contacts/getContactsSuccess"),getContactsError:Object(s.b)("contacts/getContactsError"),addContactRequest:Object(s.b)("contacts/addContactRequest"),addContactSuccess:Object(s.b)("contacts/addContactSuccess"),addContactError:Object(s.b)("contacts/addContactError"),deleteContactRequest:Object(s.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(s.b)("contacts/deleteContactSuccess"),deleteContactError:Object(s.b)("contacts/deleteContactError"),changeFilter:Object(s.b)("contacts/filter")},l=n(13),d=n.n(l);d.a.defaults.baseURL="http://localhost:4040";var b,m,f=function(t){return function(e){var n={name:t.name,number:t.number};e(i.addContactRequest()),d.a.post("/contacts",n).then((function(t){var n=t.data;return e(i.addContactSuccess(n))})).catch((function(t){return e(i.addContactError(t))}))}},_=function(t){return function(e){e(i.deleteContactRequest()),d.a.delete("/contacts/".concat(t)).then((function(){return e(i.deleteContactSuccess(t))})).catch((function(t){return e(i.deleteContactError(t))}))}},p=function(){return function(t){t(i.getContactsRequest()),d.a.get("/contacts").then((function(e){var n=e.data;return t(i.getContactsSuccess(n))})).catch((function(e){return t(i.getContactsError(e))}))}},h=n(6),C=function(t){return t.contacts},O=function(t){return t.filter},j={getContacts:C,getFilter:O,getLoading:function(t){return t.loading},getFilteredContacts:Object(h.a)([C,O],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},g=n(3),E=n(33),v=n(5),y=Object(s.c)([],(b={},Object(g.a)(b,i.getContactsSuccess,(function(t,e){return e.payload})),Object(g.a)(b,i.addContactSuccess,(function(t,e){return[e.payload].concat(Object(E.a)(t))})),Object(g.a)(b,i.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),b)),S=Object(s.c)("",Object(g.a)({},i.changeFilter,(function(t,e){return e.payload}))),k=Object(s.c)(!1,(m={},Object(g.a)(m,i.getContactsRequest,(function(){return!0})),Object(g.a)(m,i.getContactsSuccess,(function(){return!1})),Object(g.a)(m,i.getContactsError,(function(){return!1})),Object(g.a)(m,i.addContactRequest,(function(){return!0})),Object(g.a)(m,i.addContactSuccess,(function(){return!1})),Object(g.a)(m,i.addContactError,(function(){return!1})),Object(g.a)(m,i.deleteContactRequest,(function(){return!0})),Object(g.a)(m,i.deleteContactSuccess,(function(){return!1})),Object(g.a)(m,i.deleteContactError,(function(){return!1})),m)),N=Object(v.c)({contacts:y,filter:S,loading:k}),F=Object(s.a)({reducer:N,devTools:!1}),w=n(8),x=n(9),R=n(11),L=n(10),q=n(14),B=n.n(q),H={name:"",number:""},I=function(t){Object(R.a)(n,t);var e=Object(L.a)(n);function n(){var t;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=H,t.addContactHandler=function(e){e.preventDefault();var n=t.props,a=n.contacts,c=n.onSubmit,o=t.state.name;a.find((function(t){return t.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," already in your contact list")):(c(t.state),t.resetInputs())},t.changeHandler=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(g.a)({},a,c))},t.resetInputs=function(){t.setState(H)},t}return Object(x.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:B.a.form,onSubmit:this.addContactHandler},c.a.createElement("label",null,c.a.createElement("input",{className:B.a.input_name,name:"name",type:"text",placeholder:"Name",value:e,onChange:this.changeHandler})),c.a.createElement("label",null,c.a.createElement("input",{className:B.a.input_num,name:"number",type:"tel",placeholder:"Number",value:n,onChange:this.changeHandler})),c.a.createElement("button",{className:B.a.btn_add,type:"submit"},"Add contact"))}}]),n}(a.Component),P=Object(u.b)((function(t){return{contacts:j.getContacts(t)}}),(function(t){return{onSubmit:function(e){return t(f(e))}}}))(I),D=n(30),J=n.n(D),M=Object(u.b)((function(t){return{value:j.getFilter(t)}}),(function(t){return{onChange:function(e){var n=e.target.value;return t(i.changeFilter(n))}}}))((function(t){var e=t.value,n=t.onChange;return c.a.createElement("label",null,c.a.createElement("input",{className:J.a.find_contact,type:"text",placeholder:"Find contact by name",value:e,onChange:n}))})),A=n(12),T=n.n(A),G=function(t){Object(R.a)(n,t);var e=Object(L.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.showContacts()}},{key:"render",value:function(){var t=this;return c.a.createElement("ul",{className:T.a.contact_list},this.props.items.map((function(e){return c.a.createElement("li",{className:T.a.contact_list_item,key:e.id},c.a.createElement("span",{className:T.a.contact_name},e.name,": "),c.a.createElement("span",{className:T.a.contact_number},e.number),c.a.createElement("button",{className:T.a.btn_delete,title:"delete",onClick:function(){return t.props.onDelete(e.id)}},"x"))})))}}]),n}(a.Component),V=Object(u.b)((function(t){return{items:j.getFilteredContacts(t)}}),(function(t){return{onDelete:function(e){return t(_(e))},showContacts:function(){return t(p())}}}))(G),X=n(31),K=n.n(X),Q=(n(80),n(32)),U=n.n(Q),W=function(t){Object(R.a)(n,t);var e=Object(L.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return c.a.createElement(K.a,{className:U.a.spinner,type:"Grid",color:"#00BFFF",height:70,width:70})}}]),n}(a.Component),Z=n(15),z=n.n(Z),Y=function(t){Object(R.a)(n,t);var e=Object(L.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var t=this.props.isloading;return c.a.createElement("div",{className:z.a.phonebook},t?c.a.createElement(W,null):c.a.createElement("h1",{className:z.a.phonebook_header},"Phonebook"),c.a.createElement("h2",{className:z.a.section_header},"Create a new contact"),c.a.createElement(P,null),c.a.createElement("h2",{className:z.a.section_header},"Contacts"),c.a.createElement(M,null),c.a.createElement(V,null))}}]),n}(a.Component),$=Object(u.b)((function(t){return{isloading:j.getLoading(t)}}),null)(Y);n(81);var tt=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(u.a,{store:F},c.a.createElement($,null)))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(tt,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f22feabf.chunk.js.map