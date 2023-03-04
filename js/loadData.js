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
                            <!-- Button trigger modal -->
                            <button onclick="modalReceivesData(${assistantData.id})" type="button" class="rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#modal-ai-details">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                                

                            
                                
                    

                                

                            

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

                            <!-- Button trigger modal -->
                            <button onclick="modalReceivesData(${assistantData.id})" type="button" class="rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#modal-ai-details">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>

                            
                                

                                

                            

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








//-----------------spinner------
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load',() => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    
    },200);



})

// we added onclick on arrow buttons in this js folder using modalReceivesData function

const modalReceivesData = idAi =>{
    // console.log(idAi);
    const url = `https://openapi.programming-hero.com/api/ai/tool/0${idAi}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(allLdata => modalOpens(allLdata));

}

const modalOpens = gettingDataByaIds =>{
    // console.log(gettingDataByaIds.data.accuracy);
    document.getElementById('exampleModalLabel').innerText = gettingDataByaIds.data.tool_name;
    document.getElementById('modal-body').innerHTML=

    `
    
    <div class ="d-flex justify-content-evenly  ">

    <div class=" m-2 card border-danger rounded-4 bg-danger-subtle" style="width: 30rem;">
    <div class="card-body">
        <h5 class="card-title text-center">${gettingDataByaIds.data.description}</h5>
        <div class="d-flex justify-content-evenly text-center m-2 mt-5">

            <div class="bg-body rounded-4 fw-normal  " style="width: 25%"">

                <p class="text-success fw-bolder .fs-4 text m-2 mt-4">${gettingDataByaIds.data.pricing[0].price}</p>
                <p  class="text-success fw-bolder .fs-4 text ">${gettingDataByaIds.data.pricing[0].plan}</p>


                

             </div>

  
            <div class="bg-body rounded-4" style="width: 25%">
                <p class="text-danger-emphasis fw-bolder .fs-4 text  m-2 mt-4">${gettingDataByaIds.data.pricing[1].price}</p>  
                <p class="text-danger-emphasis fw-bolder .fs-4 text ">${gettingDataByaIds.data.pricing[1].plan}</p>

            </div>
  
            <div class="bg-body rounded-4" style="width: 25%">
                <p class="text-danger fw-semibold .fs-5 text  m-2 mt-4">${gettingDataByaIds.data.pricing[2].price}</p>
                <p class="text-danger fw-semibold .fs-5 text">${gettingDataByaIds.data.pricing[2].plan}</p>

    
  
            </div>

        </div>

        <div class="d-flex mt-5">

            <div>
                <h5 class="text-center">Features</h5>

                <ul>
                    <li>${gettingDataByaIds.data.features[1].feature_name}</li>
                    <li>${gettingDataByaIds.data.features[2].feature_name}</li>
                    <li>${gettingDataByaIds.data.features[3].feature_name}</li>
                    
                </ul>

            </div>
  
            <div>
                <h5 class="text-center">Integrations</h5>
                <ul>
                
                    <li>${gettingDataByaIds.data.integrations[0]}</li>
                    <li>${gettingDataByaIds.data.integrations[0]}</li>
                    <li>${gettingDataByaIds.data.integrations[0]}</li>

                </ul>
  
            </div>
  
        </div>

    </div>
    </div>

    <div class="m-2 card rounded-4" style="width: 30rem;">

        <div style="position: relative;">
            <img src="${gettingDataByaIds.data.image_link[0]}" class="card-img-top" alt="..." style="z-index: -1;">
            <p class="mt-2 me-3 rounded-pill p-2 text-white bg-danger" style="z-index: 2; position: absolute; top: 0; right: 0;">${gettingDataByaIds.data.accuracy.score} accuracy </p>
        </div>
  



        <div>
            <div class="card-body">
                <h5 class="card-title text-center">${gettingDataByaIds.data.input_output_examples[0].input}</h5>
                <p class="card-text text-center">${gettingDataByaIds.data.input_output_examples[0].output}</p>
            </div>

        </div>






    </div>


    
    </div>

    

    `

    


}
    


loadData();


