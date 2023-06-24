$(document).ready(function () {
  /**
   * Direction:
   * Find maximum number of words from given sentences.
   *
   * Expected:
   * 23
   */
  const loop = true;
  const sentences = [
    "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
    "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
    "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.",
  ];

  function result(e, sentences) {
    var arrayMaxWords = [];
    for (let i = 0; i < sentences.length; i++) {
      arrayMaxWords.push(sentences[i].split(" ").length);
    }

    var result = 0;
    if (e == "Max") {
      result = Math.max.apply(Math, arrayMaxWords);
      alert(result);
    } else if (e == "Min") {
      result = Math.min.apply(Math, arrayMaxWords);
      alert(result);
    } else {
      alert("Input Tidak Sesuai");
      eInput();
    }
    $("#container").html(result);
  }

  function eInput() {
    while (loop) {
      var inputPrompt = prompt("Max/Min?", "Max");
      if (inputPrompt != null) {
        if (inputPrompt != "" || inputPrompt != " ") {
          result(inputPrompt, sentences);
          loop = false;
        }
      } else {
        alert("Anda harus mengisinya");
      }
    }
  }

  eInput();
  /*console.log(result(sentences));*/
});
