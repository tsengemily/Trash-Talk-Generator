function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateTrashtalk(options) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  //depend on target to choose task
  let target = "";
  let taskCollection = [];

  if (options.exampleRadios === "engineer") {
    target = "工程師";
    taskCollection = task.engineer;
  }
  if (options.exampleRadios === "designer") {
    target = "設計師";
    taskCollection = task.designer;
  }
  if (options.exampleRadios === "entrepreneur") {
    target = "創業家";
    taskCollection = task.entrepreneur;
  }

  //error
  if (taskCollection.length === 0) {
    return "選個對象吧!";
  }

  //make a sentence
  let trashtalk = `身為一個${target}，${sample(taskCollection)}，${sample(
    phrase
  )}吧!`;

  return trashtalk;
}

module.exports = generateTrashtalk;
