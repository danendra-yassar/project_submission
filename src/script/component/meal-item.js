class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .meal {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meal-info {
                   padding: 24px;
               }
              
               .meal-info > h2 {
                   font-weight: lighter;
               }
              
               .meal-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
           <div class="meal-info">
               <h2>${this._meal.name}</h2>
               <br>
               <img class="meal" src="${this._meal.pict}" alt="Gambar">
               <br>
               <br>
               <h4>${this._meal.category}</h4>
               <p>${this._meal.description}</p>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);