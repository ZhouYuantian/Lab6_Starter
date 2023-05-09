// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement
    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
            let shadowEl=this.attachShadow({mode:'open'});
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
            let articleEl=document.createElement('article');
            articleEl.id="articleId";
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
            let  styleEl=document.createElement('style');
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
            styleEl.textContent='* {\n' +
                '    font-family: sans-serif;\n' +
                '    margin: 0;\n' +
                '    padding: 0;\n' +
                '  }\n' +
                '\n' +
                '  a {\n' +
                '    text-decoration: none;\n' +
                '  }\n' +
                '\n' +
                '  a:hover {\n' +
                '    text-decoration: underline;\n' +
                '  }\n' +
                '\n' +
                '  article {\n' +
                '    align-items: center;\n' +
                '    border: 1px solid rgb(223, 225, 229);\n' +
                '    border-radius: 8px;\n' +
                '    display: grid;\n' +
                '    grid-template-rows: 118px 56px 14px 18px 15px 36px;\n' +
                '    height: auto;\n' +
                '    row-gap: 5px;\n' +
                '    padding: 0 16px 16px 16px;\n' +
                '    width: 178px;\n' +
                '  }\n' +
                '\n' +
                '  div.rating {\n' +
                '    align-items: center;\n' +
                '    column-gap: 5px;\n' +
                '    display: flex;\n' +
                '  }\n' +
                '\n' +
                '  div.rating>img {\n' +
                '    height: auto;\n' +
                '    display: inline-block;\n' +
                '    object-fit: scale-down;\n' +
                '    width: 78px;\n' +
                '  }\n' +
                '\n' +
                '  article>img {\n' +
                '    border-top-left-radius: 8px;\n' +
                '    border-top-right-radius: 8px;\n' +
                '    height: 118px;\n' +
                '    object-fit: cover;\n' +
                '    margin-left: -16px;\n' +
                '    width: calc(100% + 32px);\n' +
                '  }\n' +
                '\n' +
                '  p.ingredients {\n' +
                '    height: 32px;\n' +
                '    line-height: 16px;\n' +
                '    padding-top: 4px;\n' +
                '    overflow: hidden;\n' +
                '  }\n' +
                '\n' +
                '  p.organization {\n' +
                '    color: black !important;\n' +
                '  }\n' +
                '\n' +
                '  p.title {\n' +
                '    display: -webkit-box;\n' +
                '    font-size: 16px;\n' +
                '    height: 36px;\n' +
                '    line-height: 18px;\n' +
                '    overflow: hidden;\n' +
                '    -webkit-line-clamp: 2;\n' +
                '    -webkit-box-orient: vertical;\n' +
                '  }\n' +
                '\n' +
                '  p:not(.title),\n' +
                '  span,\n' +
                '  time {\n' +
                '    color: #70757A;\n' +
                '    font-size: 12px;\n' +
                '  }';

    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
      shadowEl.append(articleEl);
      shadowEl.append(styleEl);

  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;
    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
            let articleEl=this.shadowRoot.getElementById("articleId");
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.

      articleEl.innerHTML=`<img src=${data['imgSrc']}` +
          `    alt=${data['imgAlt']}>\n` +
          `  <p class="title">\n` +
          `    <a href=${data['titleLnk']}>${data['titleTxt']}</a>\n` +
          `  </p>\n` +
          `  <p class="organization">${data['organization']}</p>\n` +
          `  <div class="rating">\n` +
          `    <span>${data['rating']}</span>\n` +
          `    <img src="/assets/images/icons/${data['rating']}-star.svg" alt="${data['rating']} stars">\n` +
          `    <span>(${data['numRatings']})</span>\n` +
          `  </div>\n` +
          `  <time>${data['lengthTime']}</time>\n` +
          `  <p class="ingredients">\n` +
          `    ${data['ingredients']}\n` +
          `  </p>`;
      
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
        customElements.define("recipe-card",RecipeCard);
