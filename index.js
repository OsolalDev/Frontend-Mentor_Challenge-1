fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  //! USE THE DATA IN THE JSON FILE
  .then(function (data) {
    let totalScore = 0;
    data.forEach((element) => {
      let currentCat = element.category.toLowerCase();
      let currentElem = document.querySelector("." + currentCat);
      totalScore += element.score;

      if (currentElem != null) {
        //? Find the element that stores the score and change it to the data in the JSON file
        currentElem.querySelector(
          ".content_right_skill_right_number"
        ).innerHTML = element.score;

        //? Find the element that stores the icon and change it to the route in the JSON file
        currentElem
          .querySelector(".content_right_skill_left_icon")
          .setAttribute("src", element.icon);
      } else {
        console.log("Something went wrong with the category: " + currentCat);
      }
    });

    //? The main score updates on its own when one of the summary scores is changed
    document.querySelector(".content_left_circle_main-number").innerHTML =
      Math.floor(totalScore / data.length);
  });
