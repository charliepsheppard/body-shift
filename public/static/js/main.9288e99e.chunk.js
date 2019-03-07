(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(65)},33:function(e,t,a){},36:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),o=a(68),l=(a(33),a(2)),i=a.n(l),u=a(3),m=a(4),p=a(5),d=a(7),h=a(6),f=a(8),b=(a(36),a(9)),E=a.n(b),k=a(69),g=a(70),v=a(66),N=(a(56),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"nav"},r.a.createElement(v.a,{to:"/home",className:"link"},"BodyShift"),r.a.createElement(v.a,{to:"/meals",className:"link"},"Meals"),r.a.createElement(v.a,{to:"/workouts",className:"link"},"Workouts")))}),w=a(14),j=(n.Component,a(59),function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"single-page"},r.a.createElement("h1",{className:"heading"},"BodyShift"),r.a.createElement("img",{src:"https://i.imgur.com/M2SuSkt.jpg",className:"heading-image"}),r.a.createElement("img",{src:"https://i.imgur.com/ncfsepT.jpg",className:"heading-image"}),r.a.createElement("div",{className:"welcome-text"},r.a.createElement("p",null,"Welcome to BodyShift, your personal health tracker.",r.a.createElement("br",null)," Our purpose is to make a simple way for you to keep track of your health endevours. Add meals and workouts to not only keep track as you move forward in your goals, but to return to when you might need some ispiration of what you did before.",r.a.createElement("br",null),"Enjoy!")),r.a.createElement("div",{className:"link-buttons"},r.a.createElement(v.a,{to:"/meals"},r.a.createElement("button",{className:"welcome-button"},"Meals")),r.a.createElement(v.a,{to:"/workouts"},r.a.createElement("button",{className:"welcome-button"},"Workouts")))))}),y=(a(60),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getMealsData=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/meals");case 3:t=e.sent,n=t.data.meals,a.setState({meals:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.state={meals:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMealsData()}},{key:"render",value:function(){var e=this,t=this.state.meals.map(function(t,a){return r.a.createElement("div",{key:a,className:"individual-item"},r.a.createElement(v.a,{id:t.id,to:{pathname:"/meals/".concat(t.id),state:t},onClick:e.props.selectMeal,className:"individual-item-link"},r.a.createElement("h1",{className:"name"},t.name),r.a.createElement("p",{className:"ingredients"},t.ingredients)))});return r.a.createElement("div",{className:"item-list"},r.a.createElement("img",{src:"https://i.imgur.com/iqHthZj.jpg?1",className:"list-banner"}),r.a.createElement(v.a,{to:"/add-meal"},r.a.createElement("button",{className:"add-button"},"Add A Meal")),t)}}]),t}(n.Component)),O=(a(61),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getWorkoutData=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/workouts");case 3:t=e.sent,n=t.data.workouts,a.setState({workouts:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.state={workouts:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getWorkoutData()}},{key:"render",value:function(){var e=this,t=this.state.workouts.map(function(t,a){return r.a.createElement("div",{key:a,className:"individual-item"},r.a.createElement(v.a,{id:t.id,to:{pathname:"/workouts/".concat(t.id),state:t},onClick:e.props.selectWorkout,className:"individual-item-link"},r.a.createElement("h1",{className:"activity"},t.activity),r.a.createElement("p",{className:"description"},t.description)))});return r.a.createElement("div",{className:"item-list"},r.a.createElement("img",{src:"https://i.imgur.com/4U1yUUV.jpg?1",className:"list-banner"}),r.a.createElement(v.a,{to:"/add-workout"},r.a.createElement("button",{className:"add-button"},"Add A Workout")),t)}}]),t}(n.Component)),C=a(67),x=(a(62),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).addMeal=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/meals",a.state);case 2:case"end":return e.stop()}},e)})),a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.addMeal();case 3:a.setState({submitted:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",ingredients:"",prep:0,cooktime:0,calories:0,submitted:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return!0===this.state.submitted?r.a.createElement(C.a,{to:"/meals"}):r.a.createElement("div",{className:"form"},r.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"ingredients",placeholder:"Ingredients",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"prep",placeholder:"Prep Time",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"cooktime",placeholder:"Cook Time",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"calories",placeholder:"Calories",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Add Meal",className:"form-button"})))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).addWorkout=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/workouts",a.state);case 2:case"end":return e.stop()}},e)})),a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleNewWorkoutSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.addWorkout();case 3:a.setState({submitted:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={propsCheck:a.props,activity:"",description:"",duration:0,submitted:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.state),!0===this.state.submitted?r.a.createElement(C.a,{to:"/workouts"}):r.a.createElement("div",{className:"form"},r.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleNewWorkoutSubmit},r.a.createElement("input",{type:"text",name:"activity",placeholder:"Type",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"duration",placeholder:"Duration",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"description",placeholder:"Description",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",className:"form-button"})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleEditMealSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a.state.name,ingredients:a.state.ingredients,prep:a.state.prep,cooktime:a.state.cooktime,calories:a.state.calories},r=a.props.mealToUpdate.id,e.next=5,E.a.put("/meals/".concat(r),n);case 5:a.setState({name:n.name,ingredients:n.ingredients,prep:n.prep,cooktime:n.cooktime,calories:n.calories,submitted:!0});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteMeal=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.mealToUpdate.id,e.next=3,E.a.delete("/meals/".concat(t));case 3:a.setState({deleted:!0});case 4:case"end":return e.stop()}},e)})),a.state={name:a.props.mealToUpdate.name,ingredients:a.props.mealToUpdate.ingredients,prep:a.props.mealToUpdate.prep,cooktime:a.props.mealToUpdate.cooktime,calories:a.props.mealToUpdate.calories,submitted:!1,deleted:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.submitted,t=this.state.deleted;return e||!0===t?r.a.createElement(C.a,{to:"/meals"}):r.a.createElement("div",{className:"form"},r.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleEditMealSubmit},r.a.createElement("input",{type:"text",defaultValue:this.state.name,name:"name",placeholder:"Name",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",defaultValue:this.state.ingredients,name:"ingredients",placeholder:"Ingredients",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",defaultValue:this.state.prep,name:"prep",placeholder:"Prep Time",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",defaultValue:this.state.cooktime,name:"cooktime",placeholder:"Cook Time",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",defaultValue:this.state.calories,name:"calories",placeholder:"Calories",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Edit",className:"form-button"})),r.a.createElement("button",{onClick:this.deleteMeal,className:"form-button"},"Delete"))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).renderForm=function(){a.setState({editClicked:!0})},a.state={editClicked:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.props.location.state.name),!1===this.state.editClicked?r.a.createElement("div",{className:"single-page"},r.a.createElement("h1",{className:"single-page-item"},this.props.location.state.name),r.a.createElement("p",{className:"single-page-label"},"Ingredients:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.ingredients),r.a.createElement("p",{className:"single-page-label"},"Prep Time:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.prep),r.a.createElement("p",{className:"single-page-label"},"Cook Time:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.cooktime),r.a.createElement("p",{className:"single-page-label"},"Calories:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.calories),r.a.createElement("button",{onClick:this.renderForm,className:"edit-button"},"Edit")):!0===this.state.editClicked?r.a.createElement("div",{className:"single-page"},r.a.createElement("div",null,r.a.createElement(M,{mealToUpdate:this.props.location.state}))):void 0}}]),t}(n.Component),T=(a(64),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleEditWorkoutSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={activity:a.state.activity,description:a.state.description,duration:a.state.duration},r=a.props.workoutToUpdate.id,e.next=5,E.a.put("/workouts/".concat(r),n);case 5:a.setState({activity:n.activity,description:n.description,duration:n.duration,updated:!0});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteWorkout=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.workoutToUpdate.id,e.next=3,E.a.delete("/workouts/".concat(t));case 3:a.setState({deleted:!0});case 4:case"end":return e.stop()}},e)})),a.state={propsCheck:a.props,activity:a.props.workoutToUpdate.activity,description:a.props.workoutToUpdate.description,duration:a.props.workoutToUpdate.duration,updated:!1,deleted:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.updated,t=this.state.deleted;return e||!0===t?r.a.createElement(C.a,{to:"/workouts"}):r.a.createElement("div",{className:"form"},r.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleEditWorkoutSubmit},r.a.createElement("input",{type:"text",defaultValue:this.state.activity,name:"activity",placeholder:"Type",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",defaultValue:this.state.duration,name:"duration",placeholder:"Duration",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"description",defaultValue:this.state.description,placeholder:"Description",className:"form-input"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Edit",className:"form-button"})),r.a.createElement("button",{onClick:this.deleteWorkout,className:"form-button"},"Delete"))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).renderForm=function(){a.setState({editClicked:!0})},a.state={editClicked:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return!1===this.state.editClicked?r.a.createElement("div",{className:"single-page"},r.a.createElement("h1",{className:"single-page-item"},this.props.location.state.activity),r.a.createElement("p",{className:"single-page-label"},"Description:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.description),r.a.createElement("p",{className:"single-page-label"},"Duration:"),r.a.createElement("p",{className:"single-page-item"},this.props.location.state.duration),r.a.createElement("button",{onClick:this.renderForm,className:"edit-button"},"Edit")):!0===this.state.editClicked?r.a.createElement("div",{className:"single-page"},r.a.createElement(T,{workoutToUpdate:this.props.location.state})):void 0}}]),t}(n.Component),U=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).selectMeal=function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/meals/".concat(a.target.id));case 3:n=t.sent,r=n.data.meal,e.setState({selectedMeal:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),e.selectWorkout=function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/workouts/".concat(a.target.id));case 3:n=t.sent,r=n.data.workout,e.setState({selectedWorkout:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),e.mealId=function(t){e.setState({mealId:t})},e.workoutId=function(t){e.setState({workoutId:t}),console.log(e.state.workoutId)},e.state={meals:[],workouts:[],mealId:"",workoutId:"",selectedMeal:"",selectedWorkout:""},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(k.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(g.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(g.a,{exact:!0,path:"/meals",render:function(){return r.a.createElement(y,{meals:e.state.meals,getMeals:e.getMealsData,selectMeal:e.selectMeal})}}),r.a.createElement(g.a,{exact:!0,path:"/workouts",render:function(){return r.a.createElement(O,{workouts:e.state.workouts,getWorkouts:e.getWorkoutData,selectWorkout:e.selectWorkout})}}),r.a.createElement(g.a,{path:"/add-meal",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(g.a,{path:"/add-workout",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(g.a,{path:"/meals/:id",render:function(t){return r.a.createElement(W,Object.assign({},t,{selectMeal:e.state.selectedMeal,mealId:e.mealId}))}}),r.a.createElement(g.a,{path:"/workouts/:id",render:function(t){return r.a.createElement(D,Object.assign({},t,{selectWorkout:e.state.selectedWorkout,workoutId:e.workoutId}))}})))}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9288e99e.chunk.js.map