const loadData = fetchingData => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    // .then (allData => console.log(allData))
    .then (allData => eachAiAssistants(allData.data.tools))


    // .then (allData => console.log(allData.data.tools[0].name))

}

//showing all the details inside all 12 cards
const eachAiAssistants = assistantDatas => {
    const aiCardContainer = document.getElementById('ai-card-container');

    assistantDatas.slice(0,6).forEach(assistantData => {
        console.log(assistantData)
        const assistantDiv = document.createElement('div');
        assistantDiv.classList.add('col');
        assistantDiv.innerHTML=
        `
        <div class="card p-4 ">
                    <img src="${assistantData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${assistantData.name}</h5>
                      <ol class="text-left" type="1">
                        <li>${assistantData.features[0]}</li>
                        <li>${assistantData.features[1]}</li>
                        <li>${assistantData.features[2]}</li>

                      </ol>
                      
                        

                      

                    
                    </div>
                    <div class="card-footer bg-body">
                        <h5 class="card-title">${assistantData.name}</h5>
                        <div class="d-flex justify-content-between">
                            <div >
                                <i class="fa-sharp fa-regular fa-calendar-days"></i>

                            </div>

                            <div class="flex-fill">
                                ${assistantData.published_in}

                            </div>

                            <div>

                                <button class="rounded-circle border-0 "><i class="fa-solid fa-arrow-right"></i></button>

                            </div>

                        </div>

                        <!-- <input class="border-0" value="2017-06-01" type="date"  /> -->


                    </div>
                  </div>
        `;
        aiCardContainer.appendChild(assistantDiv);


    })

    //----------------------if see more button gets clicked rest of the cards will be available to the users
    const seeMoreButton = document.getElementById('see-more-button');
    seeMoreButton.addEventListener('click', function(){
        

    


    assistantDatas.slice(6,12).forEach(assistantData => {

        const assistantDiv = document.createElement('div');
        assistantDiv.classList.add('col');
        assistantDiv.innerHTML=
        `
        <div class="card p-4 ">
                    <img src="${assistantData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${assistantData.name}</h5>
                      <ol class="text-left" type="1">
                        <li>${assistantData.features[0]}</li>
                        <li>${assistantData.features[1]}</li>
                        <li>${assistantData.features[2]}</li>

                      </ol>
                      
                        

                      

                    
                    </div>
                    <div class="card-footer bg-body">
                        <h5 class="card-title">${assistantData.name}</h5>
                        <div class="d-flex justify-content-between">
                            <div >
                                <i class="fa-sharp fa-regular fa-calendar-days"></i>

                            </div>

                            <div class="flex-fill">
                                ${assistantData.published_in}

                            </div>

                            <div>

                                <button class="rounded-circle border-0 "><i class="fa-solid fa-arrow-right"></i></button>

                            </div>

                        </div>

                        <!-- <input class="border-0" value="2017-06-01" type="date"  /> -->


                    </div>
                  </div>
        `;
        aiCardContainer.appendChild(assistantDiv);
        


    

    })
    this.style.display ='none';





})


}

// const seeMoreButton = document.getElementById('see-more-button');
// seeMoreButton.addEventListener('click', function(){

//     eachAiAssistantsSeeMore();




// })



loadData();